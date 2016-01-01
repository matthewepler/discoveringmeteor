// no 'var' keyword because Posts needs to be truly global
// gives us an API to the database in the client side. e.g. Posts.find().count()
// on the mongo side, db.posts.find().count()

Posts = new Mongo.Collection('posts');