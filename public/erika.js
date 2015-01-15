if (Meteor.isClient) {
  // counter starts at 0
 Template.contact.events({
    'submit form': function( event ){   // also tried just 'submit', both work for me!
      console.log( 'Submitting form!' );
      event.preventDefault();
      event.stopPropagation();
      return false; 
    }
  });
 $("contact").submit(function (e) {
      e.preventDefault();
      alert("FUCKYEA");
});
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

// Router.route('/', function () {
//   this.layout('ApplicationLayout');
// });

// Router.route('/about', function () {
//   this.layout('about');
// });


// Router.route('/portfolio', function () {
//   this.layout('portfolio');
// });