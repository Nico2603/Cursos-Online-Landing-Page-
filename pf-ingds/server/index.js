const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
//se establece la conexión
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "cursos_cortos"
});

//Registrar usuario
app.post("/create",(req,res)=>{
	const username = req.body.username;
	const password = req.body.password;
	const user_type = req.body.user_type;

	db.query('INSERT INTO users(username, password, user_type) VALUES (?,?,?)',[username, password, user_type],(err,result)=>{
		if(err)
			console.log(err);
		else
			res.send("Usuario registrado con éxito!");
	});
});

//ver ususarios
app.get("/users",(req,res)=>{
	db.query('SELECT * FROM users',(err,result)=>{
		if(err)
			console.log(err);
		else
			res.send(result);
	});
});
//login
app.post("/login",(req,res)=>{
	const username = req.body.username;
	const password = req.body.password;
	db.query('SELECT * FROM users WHERE username = ? AND password = ?',[username,password],(err,result)=>{
		if(err){
			console.log(err);
			res.json({ success: false });
		}
		else{
			if(result.length > 0){
				res.json({ success: true });
			}else{	
				res.json({ success: false });
			}
		}
	});
});

app.listen(3001,()=>{
	console.log("Runnig in port 3001")
});
