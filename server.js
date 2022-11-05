const express = require("express");
const app = express();
const port = 3000;

// { "slackUsername": String, "backend": Boolean, "age": Integer, "bio": String }

my_bio = "A person who loves to use technology" 

app.get("/", (req, res) => {
  res.json({
    "slackUsername": "Abdulmujeeb Lawal",
    "backend": true,
    "age": 19,
    "bio": my_bio,
  });
});

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
