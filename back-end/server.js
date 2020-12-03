const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  name: String,
  comment: String,
});

const Item = mongoose.model('Item', itemSchema);

mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true
});

app.post('/api/items', async (req, res) => {
  const item = new Item ({
    name: req.body.name,
    comment: req.body.comment,
  })
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => {
  var item = await Item.findOne({
    _id: req.params.id
  });
  try {
    item.name = req.body.name;
    item.comment = req.body.comment;
    await item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



app.listen(3001, () => console.log('Server listening on port 3001!'));
