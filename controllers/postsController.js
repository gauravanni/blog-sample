var Post = require(process.cwd() + '/models/post.js');
var Cat = require(process.cwd() + '/models/category.js');

exports.renderPosts=function(req,res){
    Post.find({},function(err,posts){
        res.render('posts', {posts : posts});

    })
    console.log(Cat);
}

exports.renderSinglePosts=function(req,res){
    Post.find({_id:req.params.id},function(err,posts){
        if(err) console.log(err)
        res.render('single', {posts : posts});
    })
}

exports.createPost=function(req,res){
    Cat.find({},function(err,cats){
        res.render('create-post', {cats : cats,title:'Create Post'});
    })
}

exports.add=function(req,res){
    var title=req.body.title;
    var category=req.body.category;
    var body=req.body.body;
    var author=req.body.author;
    var date=new Date();
    var postData={"title" : title, "category" : category, "author" : author, "body" : body, "date" : date};
    // insert posts
    Post.create(postData,function(err,data){
        if(err) throw err;
        res.redirect('/posts');
    })
    
}