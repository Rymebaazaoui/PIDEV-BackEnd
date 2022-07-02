var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
const bodyParser = require('body-parser');
var logger = require('morgan');

var mongoose=require('mongoose');
mongoose.connect("mongodb+srv://rymbaazaoui88:26zILzBRSWAoARtd@cluster0.lwsfmob.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log(mongoose.connection.readyState)).catch(()=>console.log("Database connection error"),
{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}
);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var paradeRouter = require('./routes/Parades.route');
var formationsRouter = require('./routes/formations.routes');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/parade', paradeRouter);
app.use('/formation', formationsRouter);
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
// API root
app.use('/api', paradeRouter)
app.use('/api', formationsRouter)
// PORT
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint')
})
app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'C:\Users\User\Desktop\Roue_Libre\RoueLibre\src\app\components\list-parade\list-parade.component.html'),
  )
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
