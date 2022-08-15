require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const expsesh = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(expsesh.Store);
const sequelize = require('./config/connection');

const hbs = exphbs.create({});


const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    maxAge: 10000,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    })
};

const app = express();

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(expsesh(sessionSettings));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(routes);

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log( 'http://localhost:' + PORT))
});
