const exp = require('constants');
const express = require('express');
const path = require('path');

const app = express();

const publicPath = 'public';
app.use(express.static(publicPath));
//app.use(express.static(path.resolve(__dirname, './public')));

//app.listen(3000, ()=>console.log('Servidor corriendo en puerto 3000'));
const port = process.env.PORT || 3001;
app.listen(port, ()=>console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../views/home.html'));
})