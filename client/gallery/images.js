Template.images.helpers({
    "aImages": function () {
        // Return the cursor of the mongo collection to maintain the reactivity
        // if we use .fetch the reactivity will be lost
        return Images.find();
    }
});