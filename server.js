const express = require('express');
const app = express();
var bodyParser = require('body-parser')

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

const votes = {};

app.get('/', (req, res) => {
  let html = `<html>
  <head>
    <title>Voting App</title>
  </head>
  <body>
    <h1>Vote for your favorite option:</h1>
    <form action="/vote" method="post">
      <input type="radio" name="vote" value="one">Option 1<br>
      <input type="radio" name="vote" value="two">Option 2<br>
      <input type="radio" name="vote" value="three">Option 3<br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
`;
  res.type('html').send(html)
});

app.post('/vote', (req, res) => {
  const vote = req.body.vote;
  if (votes[vote]) {
    votes[vote]++;
  } else {
    votes[vote] = 1;
  }
  res.send('Vote counted: ' + vote);
});
app.get('/result', (req, res) => {
  res.send(`
  <h1>Result</h1>
  <p>Option 1 » ${votes.one}</p>
  <p>Option 2 » ${votes.two}</p>
  <p>Option 3 » ${votes.three}</p>
  `)
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
