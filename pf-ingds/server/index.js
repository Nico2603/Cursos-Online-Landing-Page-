const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "cursos_cortos"
});
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

app.listen(3001,()=>{
	console.log("Runnig in port 3001")
});
