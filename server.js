const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost:27017/dataDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const Data = mongoose.model('Data', new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
}));


app.use(express.json());


app.post('/api/insertData', async (req, res) => {
  try {
    const { name, age, gender } = req.body;

    const data = new Data({ name, age, gender });
    await data.save();

    res.status(201).send('Data inserted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
