var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
  title: 'Article one | Ujjawal',
  date: '26 April',
  content: ` <p> this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article

          <p>  this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article </p>

            <p>this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article </p>

            this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article
</p> `
},
    'article-two': {
        tiltle: 'Article two | Ujajwal',
        date: '29 Sep',
        content: ` <p> this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article

          <p>  this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article </p>

            <p>this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article </p>

            this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article
</p> `
    },
    'article-three':  { 
         tiltle: 'Article Three | Ujajwal',
        date: '08 Aug',
        content: `  <p> this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article

          <p>  this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article </p>

            <p>this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article </p>

            this is my article this is my article this is my article this is my article this is my article this is my article this is my articlethis is my article
</p>`
    }
};
function createTemp (data){
    var title = data.title;
    var date = data.date;
    var content = data.content;
var template = `
        <html>
        <head>
          <link href="/ui/style.css" rel="stylesheet" />
             <title> ${title}
            </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
        </head>
        <body>
        <div class="content">
        <div  class="center">
        <a href='/'>Home</a>
        </div>
        ${date}
        <hr/>
        ${content}       
        <ol>
        <h2>By - Ujjawal</h2>  
        </ol>
        <hr/>
        </div>
        </body>
        </html>
        `;
    return template;     
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/:articleName', function (req, res){
    var articleName = req.params.articleName;
  res.send(createTemp(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
