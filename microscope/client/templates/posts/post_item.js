// we are already getting title and url from the object
// but we need to dynamically create the domain value for each one.

Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});