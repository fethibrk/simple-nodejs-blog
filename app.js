const express    = require('express');
const path       = require('path');
const hbs        = require('express-handlebars');
const bodyParser = require('body-parser');

const blogRoutes = require('./routes/blog');
const hbsHelpers = require('./helpers/hbs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs',
  helpers: {
    truncate: hbsHelpers.truncate
  }
}));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(blogRoutes);

app.listen(3000, err => {
  if (err) return console.log(err);
  console.log('Server listening on port 3000');
});
