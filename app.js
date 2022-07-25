
const nodemailer =require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user : "eya.hadrich@esprit.tn",
    pass : "201SFT3445"
  }
})

let details = {
  from: "eya.hadrich@esprit.tn",
  to: "marwa.jalleli@esprit.tn",
  subject: "confirmation ",
  text: "votre inscription est confirmé"

}

mailTransporter.sendMail(details,(err)=>{
  if (err){
    console.log("it has an error",err)
  }
  else {
    console.log("email has sent !")
  }
})
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const axios = require("axios");
var wikipedia = require("node-wikipedia");
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
var veloRouter = require('./routes/Velos.route');
var reservationRouter = require('./routes/Reservations.route');
var postsRouter = require('./routes/posts');
var commentsRouter = require('./routes/comments');

var associationRouter = require('./routes/Association.route');


var UserRouter = require('./routes/Users.route');
var visiteRouter = require('./routes/visite.route');
var app = express();
app.get('/', function (req, res) {
  res.render('index', {});
});
var  Po = require("./controllers/postController");
var  Comm= require ("./controllers/commentController");
app.get("/posts/:title",Po.getAllComments );
app.post("/posts/create", Po.create);
app.post("/posts/like/:id", Po.Like);
app.post("/posts/dislike/:id", Po.Dislike);
app.post("/posts/rate/:id", Po.Rate);
app.get("/posts/search/:key", Po.Search);
app.get("/comments/search/:key",Comm.Search);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/parade', paradeRouter);
app.use('/formation', formationsRouter);
app.use('/api/velo', veloRouter);
/*app.use('/api/reservation', reservationRouter);*/


app.use('/association', associationRouter);
app.use('/api/formation', formationsRouter);
app.use('/user', UserRouter);
app.use(cors());
app.use('/uploads', express.static(path.join('image')));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)




// API root
app.use('/api', paradeRouter)
app.use('/api', formationsRouter)
app.use('/api', veloRouter)
app.use('/api', reservationRouter)


app.use('/api', visiteRouter)
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.get("/api", (req,res)=>{
  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
    params: {q: 'Elon musk', pageNumber: '1', pageSize: '10', autoCorrect: 'true'},
    headers: {
     'X-RapidAPI-Key': '96e632b31fmsh9de398c0db55bd7p17fb9ejsn53235349f43e',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  

  
  });
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
    path.join(__dirname, )
  )
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

//  render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
