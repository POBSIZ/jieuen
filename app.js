const express = require('express');
const cors = require('cors');
const app = express();
var PORT = 2393;

app.use(cors());

app.get('/', async(req, res, next)=>{
	res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', async(req, res, next)=>{
	res.sendFile(__dirname + '/style.css');
});

app.get('/script.js', async(req, res, next)=>{
	res.sendFile(__dirname + '/script.js');
});

app.get('/src/main.png', async(req, res, next)=>{res.sendFile(__dirname + '/src/main.png');});
app.get('/src/poster_jieun.png', async(req, res, next)=>{res.sendFile(__dirname + '/src/poster_jieun.png');});
app.get('/src/poster_project.png', async(req, res, next)=>{res.sendFile(__dirname + '/src/poster_project.png');});




app.get('/pages/slide/index.html', async(req, res, next)=>{
	res.sendFile(__dirname + '/pages/slide/index.html');
});

app.get('/pages/slide/style.css', async(req, res, next)=>{
	res.sendFile(__dirname + '/pages/slide/style.css');
});

app.get('/pages/slide/script.js', async(req, res, next)=>{
	res.sendFile(__dirname + '/pages/slide/script.js');
});

app.get('/src/BG.jpg', async(req, res, next)=>{res.sendFile(__dirname + '/src/BG.jpg');});
app.get('/src/paperbg.png', async(req, res, next)=>{res.sendFile(__dirname + '/src/paperbg.png');});

app.listen(process.env.PORT || 2393, () => {
	console.log(`Server Works !!! At port`+' '+PORT);
});
