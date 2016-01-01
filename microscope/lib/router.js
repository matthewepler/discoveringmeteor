// sets default layout for all routes.
// happens only once when the user access the app. Then data is in their browser.
// !! ALWAYS wait on subscriptions before rendering a page!! 
Router.configure({
  layoutTemplate: 'layout',  // refers to layout.html in templates/application
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); } // every route subscribe to posts
});

Router.route('/', {name: 'postsList'}); // refers to post_list.html in templates/posts
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});