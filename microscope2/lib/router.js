// configure default layout and routing behavior for ALL PAGES
Router.configure({
	layoutTemplate: 'layout', // matches filename 
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('posts'); } // will subscribe to this for every page
});

Router.route('/', {name: 'postsList'}); // matches filename