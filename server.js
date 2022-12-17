const express = require('express');
const app = express();
var bodyParser = require('body-parser')

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

const votes = {};

app.get('/', (req, res) => {
  res.send('Hello, World!')
});

app.get('/vote', (req, res) => {
  let html = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voting App</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">
</head>
<body>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nerko+One&family=Poppins:wght@300&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: #ffffff;
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav {
    position: fixed;
    top: 0;
    height: 3rem;
    width: 100%;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.nav h1 {
    margin: 0.5rem 1rem;
    color: #8083ff;
    font-family: 'Nerko One', cursive;
}
.nav .btn_menu {
    position: absolute;
    top: 0;
    right: 0;
    color: #BAC3CD;
    font-size: 24px;
    margin: 0.8rem 1rem;
}
.nav .btn_menu_opened {
    position: absolute;
    top: 0;
    right: 0;
    color: #8083ff;
    font-size: 24px;
    margin: 0.8rem 1rem;
    display: none;
}
.menu {
    position: fixed;
    top: 0;
    background-color: #ffffff;
    height: 13rem;
    width: 10rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0 0 12px 0;
    text-align: center;
    display: none;
}
.menu h3 {
    text-align: left;
    margin: 0.5rem 0.5rem;
    font-size: 24px;
    margin-bottom: 1rem;
    color: #8083ff;
    font-family: 'Nerko One', cursive;
}
.menu ul li {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 0.3rem;
    margin-top: 0.3remrem;
}
.menu ul li a {
    text-decoration: none;
    color: #BAC3CD;
    transition: 0.5s;
    font-family: 'Poppins', sans-serif;
}
.menu ul li a:hover {
    color: #8083ff;
}
.choices {
    padding-top: 10rem;
    height: 230vh;
    display: flex;
    flex-direction: column;
}
.choices .card {
    background: #fffff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    height: 15rem;
    width: 20rem;
    border-radius: 12px;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;
}
.choices .card input[type=radio] {
    text-align: center;
}

.choices .card .leftSide {
    width: 10rem;
    margin-right: 1px;
    word-wrap: break-word;
}
.choices .card .leftSide img {
    height: 10rem;
    width: 10rem;
    border-radius: 12px 0px 12px 0px;
}
.choices .card .leftSide h1 {
    text-align: center;
    margin: 0.2rem 1rem;
    font-family: 'Nerko One', cursive;
}

.choices .card .rightSide {
    width: 10rem;
    margin-left: 1px;
    text-align: center;
}
.choices .card .rightSide h1 {
    padding-top: 1rem;
    font-family: 'Nerko One', cursive;
}
.choices .card .rightSide p {
    margin: 0.2rem 1rem;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
}
.choices .card .rightSide pre {
    padding-top: 1rem;
}

    </style>
    <div class="nav">
        <h1>Vote</h1>
        <i class="ri-menu-3-line btn_menu"></i>
        <i class="ri-menu-2-line btn_menu_opened"></i>
    </div>
    <div class="menu">
        <h3>Menu</h3>
        <ul>
            <li><a href="/vote">Vote</a></li>
            <li><a href="/result">Result</a></li>
            <li><a href="https://liby0.vercel.app">Libyzxy0</a></li>
        </ul>
    </div>
    <div class="center">
    <section class="choices">
        <form action="/voteGetted" method="post">
        <div class="card">
            <div class="leftSide">
                <img src="https://i.picsum.photos/id/186/200/200.jpg?hmac=bNtKzMZT8HFzZq8mbTSWaQvmkX8T7TE47fspKMfxVl8" alt=""></img>
            <h1>Javascript</h1>
            </div>
            <div class="rightSide">
                <h1>Description</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <pre>Click here to vote!</pre>
                <input type="radio" name="vote" value="javascript">
            </div>
        </div>
        <div class="card">
            <div class="leftSide">
                <img src="https://i.picsum.photos/id/186/200/200.jpg?hmac=bNtKzMZT8HFzZq8mbTSWaQvmkX8T7TE47fspKMfxVl8" alt=""></img>
            <h1>C++</h1>
            </div>
            <div class="rightSide">
                <h1>Description</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <pre>Click here to vote!</pre>
                <input type="radio" name="vote" value="cplusplus">
            </div>
        </div>
        <div class="card">
            <div class="leftSide">
                <img src="https://i.picsum.photos/id/186/200/200.jpg?hmac=bNtKzMZT8HFzZq8mbTSWaQvmkX8T7TE47fspKMfxVl8" alt=""></img>
            <h1>Java</h1>
            </div>
            <div class="rightSide">
                <h1>Description</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <pre>Click here to vote!</pre>
                <input type="radio" name="vote" value="java">
            </div>
        </div>
        <input type="submit">
        </form>
    </section>
   </div>
    
    <script>
        var btnMenu = document.querySelector(".btn_menu");
var btnMenuOpened = document.querySelector(".btn_menu_opened");
var menu = document.querySelector(".menu");

btnMenu.addEventListener("click", function() {
   btnMenu.style.display="none"
  btnMenuOpened.style.display="block";
  menu.style.display="block";
 
});  
btnMenuOpened.addEventListener("click", function() {
  btnMenu.style.display="block"
  btnMenuOpened.style.display="none";
  menu.style.display="none";
});
function test() {
    alert("Hello, World");
}

    </script>
</body>
</html>
`;
  res.type('html').send(html)
});


app.post('/voteGetted', (req, res) => {
  const vote = req.body.vote;
  if (votes[vote]) {
    votes[vote]++;
  } else {
    votes[vote] = 1;
  }
  res.redirect('/result')
});

app.get('/result', (req, res) => {
  res.send(`
  <h1>Result</h1>
  <p>Javascript » ${votes.javascript}</p>
  <p>C++ » ${votes.cplusplus}</p>
  <p>Java » ${votes.java}</p>
  `)
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
