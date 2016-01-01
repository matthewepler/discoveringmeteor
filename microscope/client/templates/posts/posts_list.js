
// Template is type, 'postsLists' matches the template name, helpers is a function
// it creates a template helper called 'posts' that returns the 'postsData' array
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});