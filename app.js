/*
    When running locally, if you see "Secure Connection Failed"
    or "Error code: SSL_ERROR_RX_RECORD_TOO_LONG"
    or something similar, comment out the code
    under "Enable Forced HTTPS".
*/

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
Enable Forced HTTPS on visit to HTTP
Note: This must be commented out to run locally
*/


app.enable('trust proxy'); 

app.use(function(request, response, next) {

    if (process.env.NODE_ENV != 'development' && !request.secure) {
        return response.redirect("https://" + request.headers.host + request.url);
    }

    next();
}) 


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
