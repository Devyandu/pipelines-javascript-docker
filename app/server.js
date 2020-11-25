'use strict';

const express = require('express');

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello Devyandu\n');
});

app.get('/profile', (req, res) => {
  res.send({'name':'Anonymous'});
});

app.get('/plans', (req, res) => {
  res.send(
      [
    {
      name:'Super Saver 1000',
      'planOptions':[
        'High','Medium','Saver'
      ]
    },
    {
      name:'Super Saver 500',
      'planOptions':[
        'High','Medium','Low 500'
      ]
    },
    {
      name:'Choice 500',
      'planOptions':[
        'High','Medium','Choice'
      ]
    }
  ]);
});
app.post('/nextAction', (req, res) => {
  console.log(req.body);
   res.send({'name':'plans'});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
