const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

const Books = require('./models/Books')

const booksRoutes = require('./routes/booksRoutes')

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json());

app.use(express.static('public'));

app.use('/', booksRoutes)

conn 
.sync()
//.sync({force: true}) //RESET ALL TABLES.
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))



