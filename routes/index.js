module.exports = function(app) {
    var route = {};
    // index.html
    route.index = function (req, res) {
        /** Code to get the list of routes**/
        var app_routes = app._router.stack;
        var routes = [];
        for (var i = 0; i < app_routes.length; i++) {
            var appRoute = app_routes[i].route;
            if((typeof appRoute != 'undefined')){
                routes.push({
                    path : appRoute.path,
                    method : appRoute.stack[0].method.toUpperCase()
                });
            }
        }

        var contest = {
        	title: "Nature",
        	description: 'Make an application that help users discovering the nature and how beautiful it really is!',
        	useCustomImage: false,
        	customImageUrl: '',
        	credit: ''
        };

        res.render('index', {locals: { routes: routes, contest: contest }});
    };

    app.get('/', route.index);
};