const express = require('express')
const app = express();
const path = require('path')
var cookieParser = require('cookie-parser');
const data = require('./dao/connection');

data.connectionOpen();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.use(require('./controller/routes/User'));
app.use(require('./controller/routes/List'));
app.use(require('./controller/routes/Task'));
app.use(require('./controller/routes/Home'));
app.use(require('./controller/routes/Error'));

app.get('/login',(req,res)=>{
    res.render('signup')
})


app.listen(process.env.PORT || '4000',() => console.log(`running!`))