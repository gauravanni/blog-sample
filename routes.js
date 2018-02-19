var postsController=require(process.cwd() + '/controllers/postsController.js');
var multer=require('multer');
var upload=multer({dest:'uploads'});
exports.init = function(router) {
    router.route('/').get((req, res) => {
        res.render('index');
    });
    // get all posts
    router.route("/posts").get(postsController.renderPosts);

    // get single posts
    router.route("/posts/:id").get(postsController.renderSinglePosts);

    // add posts 
    router.route("/createpost").get(postsController.createPost);

    router.route("/add").post(upload.single('img'),postsController.add);

    
};