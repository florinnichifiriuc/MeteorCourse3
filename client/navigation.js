Template.navigation.helpers({
    isActive: function (routeName) {
console.log('arg',routeName);
console.log('arg',arguments);
console.log('arg',Router.current().route.getName());
        return Router.current().route.getName() == routeName ? "active" : "";
    }
});