/**
 * Created by Tommy_Phan on 20/11/2015.
 */
exports.showIndex = function(req, res){
    var title= 'Gel';
    if(req.user){
        title = req.user.fullName;
    }
  res.render('index',{
      title : title,
      user : JSON.stringify(req.user) || null
  })
};