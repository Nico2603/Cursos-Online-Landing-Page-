-- Tabla de Usuarios
CREATE TABLE Users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  user_type ENUM('instructor', 'estudiante') NOT NULL,
  -- Otros campos de perfil como nombre, foto de perfil, detalles personales, etc.
);

-- Tabla de Perfil de Instructores
CREATE TABLE InstructorProfile (
  instructor_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNIQUE,
  experience TEXT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Tabla de Cursos
CREATE TABLE Courses (
  course_id INT PRIMARY KEY AUTO_INCREMENT,
  instructor_id INT,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  difficulty_level VARCHAR(20) NOT NULL,
  is_free BOOLEAN NOT NULL,
  FOREIGN KEY (instructor_id) REFERENCES InstructorProfile(instructor_id)
);

-- Tabla de Lecciones
CREATE TABLE Lessons (
  lesson_id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT,
  title VARCHAR(100) NOT NULL,
  video_url VARCHAR(255),
  material_url VARCHAR(255),
  FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- Tabla de Comentarios
CREATE TABLE Comments (
  comment_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  lesson_id INT,
  text TEXT NOT NULL,
  rating INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  FOREIGN KEY (lesson_id) REFERENCES Lessons(lesson_id)
);

-- Tabla de Categorías de Cursos
CREATE TABLE CourseCategories (
  category_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

-- Tabla de Historial de Compras
CREATE TABLE PurchaseHistory (
  purchase_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  course_id INT,
  purchase_date DATE,
  amount DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- Tabla de Notificaciones
CREATE TABLE Notifications (
  notification_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  text TEXT NOT NULL,
  date DATETIME NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Tabla de Soporte Técnico
CREATE TABLE SupportTickets (
  ticket_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  subject VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('abierto', 'cerrado') NOT NULL,
  created_date DATETIME NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
