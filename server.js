const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser())
// { "slackUsername": String, "backend": Boolean, "age": Integer, "bio": String }

my_bio = "A person who loves to use technology";
app.get("/", (req, res) => {
  res.json({
    slackUsername: "Abdulmujeeb Lawal",
    backend: true,
    age: 19,
    bio: my_bio,
  });
});

// { “operation_type”: Enum <addition | subtraction | multiplication> ,
//    “x”: Integer,
//    “y”: Integer }

app.post("/calculate", (req, res) => {
  // res.send('Got a POST request')
  var operation = req.body.operation_type;
  var x = req.body.x;
  var y = req.body.y;

  var result = 0;
  if (operation === "addition") {
    result = x + y;
  } else if (operation === "subtraction") {
    result = x - y;
  } else if (operation === "multiplication") {
    result = x * y;
  }

  // console.log(ID);

  res.send({
    slackUsername: "Abdulmujeeb Lawal",
    operation_type: operation,
    result: result,
  });
});

app.get("/book", (req, res) => {
  res.sendFile("index.html");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
