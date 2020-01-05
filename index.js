const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'CircleCI is running.'})
})
app.listen(8080, () => console.log(`App is running on port:8080 🚀🚀🚀 `));
