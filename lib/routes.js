Router.configure({
    layoutTemplate: 'main'
});

Router.route('/',
    {
        name: "home",
        template: "welcome"
    });
Router.route('/gallery',
    {
        name: "gallery",
        template: "images"
    });
Router.route('/login',
    {
        name: "login",
        template: "login"
    });

Router.route('/gallery/add',
    {
        name: "addimage",
        template: "add-image",
        onBeforeAction: function() {
            console.log('on before action');
            var currentUser = Meteor.userId();
            if (currentUser) {
                this.next(); //Just let this route do what it would normally do.
            } else {
                this.render("login"); // render login template
            }
        }
    });


Router.route('/gallery/edit/:_id',
    {
        name: "editimage",
        template: "edit-image",
        data: function(){
            var currentImg = this.params._id;
            return Images.findOne({ _id: currentImg  });
        }
    });


Router.route('/gallery/view/:_id',
    {
        name: "viewimage",
        template: "view-image",
        data: function(){
            var currentImg = this.params._id;
            return Images.findOne({ _id: currentImg  });
        }
    });