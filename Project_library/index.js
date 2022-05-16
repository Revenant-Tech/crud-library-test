const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

const Books = require('./models/Books')

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json());

app.use(express.static('public'));

app.use('/books', bookRoutes)

conn 
.sync()
//.sync({force: true}) //restart toda a tabela e perde os dados, USEM PARA CRIAR A TABELA PARA VCS.
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))



