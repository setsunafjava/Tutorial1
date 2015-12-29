/**
 * Created by Tommy_Phan on 20/11/2015.
 */
var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    MongoStore = require('connect-mongo')(session),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    flash = require('connect-flash'),
    mongoose = require('mongoose'),
    passport = require('passport');


var app = express();
require('./models/user');
var db = mongoose.connect('mongodb://localhost/tutorial1');
var User = mongoose.model('User');
passport.serializeUser(function (user,done) {
    done(null,user.id);
});
passport.deserializeUser(function (id,done) {
    User.findOne({
      _id : id
    },'-password -salt', function (err, user) {
        done(err,user);
    });

});
LocalStraegy = require('passport-local').Strategy;

passport.use(new LocalStraegy(function (username,password, done) {
    User.findOne({
        username : username
    }, function (err,user) {
        if(err){
            return done(err);
        }
        if(!user){
            return done(null,false,{
                message :'Unknow user'
            });
        }
        if(!user.authenticate(password)){
            return done(null,false,{
                message : 'Invalid password'
            });
        }
        return done(null,user);
    })
}));



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

// Add the cookie parser and flash middleware
app.use(cookieParser());
app.use(flash());
app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'MEAN',
    cookie: {
        maxAge: 24 * (60 * 60 * 1000),
        httpOnly: true,
        secure: false
    },
    key: 'sessionTutorial',
    store: new MongoStore({
        mongooseConnection: db.connection,
        collection: 'sessions'
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./public'));
app.set('views','./views');
app.set('view engine','ejs');

require('./routes/index')(app);
require('./routes/authentication')(app);
app.listen(3000,function(err){
    if(err){
        console.log('Listen 3000 ERROR : ' + err.message);

    }else
    console.log('Listen 3000');
});