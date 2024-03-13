const express = require('express'); //traemos a express
const routerApi = require('./routes')

const app = express(); //express no va a crear la aplicacion al final
const port = 3000; //puerto que queremos que corra

app.use(express.json()); //con esto ya dejaria recibir informacion de tipo json que nos envian por post

//definir una ruta y utilizar callback que siempre recibe 2 parametros req y res
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta', (req,  res) => {
  res.send('Hola spy un nuevo enpoint');
});


routerApi(app);

//debe escuchar un puerto especifico
app.listen(port, () => {
  console.log('Mi port ' + port);
});
