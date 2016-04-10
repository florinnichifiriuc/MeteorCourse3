
// Helpers for image template
Template.image.helpers({
    isCreator : function(){
        // Check if user logged in and is the creator
      return Meteor.userId() && Meteor.userId() == this.createdBy ;
    },
    votingOptions: function () {
        var options = [
            {
                displayName: "Rate as 1",
                voteCountAs: 1
            },
            {
                displayName: "Rate as 2",
                voteCountAs: 2
            },
            {
                displayName: "Rate as 3",
                voteCountAs: 3
            },
            {
                displayName: "Rate as 4",
                voteCountAs: 4
            },
            {
                displayName: "Rate as 5",
                voteCountAs: 5
            }
        ];
        return options;
    }
});
Template.image.events({
    'click a#js-delete': function (eventJquery, template)  {
        var imageId = template.data._id
            , userId = Meteor.userId()
            ;
        console.log(userId,template.data.createdBy);
        if (userId==template.data.createdBy) {
            Images.remove(imageId, function () {
                Route.go('gallery');
            });
        }
        else {
            alert('You are not the creator');
        }
    },
    'click input': function (eventJquery, template) {
        var imageId = template.data._id
            , userId = Meteor.userId()
            ;
        Images.update(imageId,
            {
                $inc: {vote: this.voteCountAs},
                $set: {createdBy: userId }
            }
        );
    }
})
