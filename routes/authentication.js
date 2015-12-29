/**
 * Created by Tommy_Phan on 21/11/2015.
 */
module.exports  = function(app){
    var authentication = require('../controllers/authentication');
    app.route('/api/auth/login').post(authentication.login);
    app.route('/api/auth/signup').post(authentication.signup);
    app.route('/api/auth/logout').get(authentication.logout);

};