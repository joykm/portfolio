


/*
Dependencies
*/

const express = require('express')
const exphbs = require('express-handlebars')

/*
Create Express Server
*/

const app = express()

/*
Configure Express Server
*/

app.engine('hbs', exphbs(
    {
        defaultLayout: 'main',
        extname: '.hbs'
    }
))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


/*
Setup Local Port
*/
var PORT = process.env.PORT || 8080
app.set('port', PORT);



app.get('/', (req, res) => {
    res.render('home');
});



app.listen(app.get('port'), function(){
  console.log(
      `Express started on http://${process.env.HOSTNAME}:${app.get('port')}; press Ctrl-C to terminate.`
      );
});