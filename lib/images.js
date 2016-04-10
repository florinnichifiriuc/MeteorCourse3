// Create a new mongo collection called images
Images = new Mongo.Collection('images');
Images.allow({
    insert: function (userId, doc) {
        doc.createdBy = userId;
        doc.createdAt = new Date();
        return userId ;
    },
    update: function (userId, doc) {
        console.log(doc);
        console.log('userid', userId);
        return userId;
    }
})