// Create a new mongo collection called images
Images = new Mongo.Collection('images');

// global variable to store images
listOfImages = [
    {
        url: "http://fpoimg.com/240x40",
        alt: "240x40"
    },
    {
        url: "http://fpoimg.com/210x40",
        alt: "210x40"
    }
];
console.log('where am I?');
// this code will run on client(browser)
if (Meteor.isClient) {
    // Set a global session to store the list of images
    Session.setDefault('images', listOfImages);
    console.log('I am on client?');
    // Add helpers to the images template
    Template.images.helpers({
        "aImages": function () {
            // Return the cursor of the mongo collection to maintain the reactivity
            // if we use .fetch the reactivity will be lost
            return Images.find();
        }
    });
    // Add helpers to the welcome helpers
    // Template helpers are reactive computations
    Template.welcome.helpers({
        counter: function () {
            console.log('counter helper is running');
            // Session is one reactive data source
            return Session.get('count');
        }
    })

    // This config needs to be added to the client since is a configuration for client
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
}

// this code will be run on the server
if (Meteor.isServer) {

    console.log('I am on server?');
// this code will be run when the server logic is done
    Meteor.startup(function () {
        // Add some default images if we have none
        if (Images.find().count() == 0) {
            console.log('NO IMAGES PRESENT');
            Images.insert({
                url: "http://fpoimg.com/240x40",
                alt: "240x40"
            });

            Images.insert({
                    url: "http://fpoimg.com/210x40",
                    alt: "210x40"
                }
            );
        }
        else {

            console.log('IMAGES PRESENT');
        }
        console.log('when I appeared?');
    });

}
