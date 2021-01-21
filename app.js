const express = require('express');
const app = express();

app.get('/', async(req, res, next)=>{
	res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', async(req, res, next)=>{
	res.sendFile(__dirname + '/style.css');
});

var PORT = 2393;
app.listen(process.env.PORT || 2393, () => {
	console.log(`Server Works !!! At port`+' '+PORT);
});
