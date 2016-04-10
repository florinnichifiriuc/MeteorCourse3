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
