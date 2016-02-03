// configure default layout and routing behavior for ALL PAGES
Router.configure({
	layoutTemplate: 'layout', // matches filename 
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('posts'); } // will subscribe to this for every page
});

Router.route('/', {name: 'postsList'}); // matches filename
Router.route('/posts/:_id', {
	name: 'postPage',
	data: function() { return Posts.findOne(this.params._id) }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'}); // shows notFound template