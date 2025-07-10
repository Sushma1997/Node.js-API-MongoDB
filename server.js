const express = require('express');
const mongoose = require('./database');
const User = require('./user');
const { Types } = mongoose;

const app = express();

app.get('/users/"id', async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.ststus(400).json({ error: 'Invalid user ID' });
  }

  try {
    const user = await User.findOne({ _id, age: { $gt:21 } });

    if (!user) {
      return res.ststus(404).json({ error: 'User not found or age <= 21' });
    }

     res.json(user);
  }  catch (error) {
     res.status(500).json({ error: 'server error' });
  }
});

app.listen(3000, () => {
  console.log('API is running on https://localhost:3000');
});
