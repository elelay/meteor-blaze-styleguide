Package.describe({
    summary: "blaze component catalogue inspired by chromatic and react-storybook",
    version: "1.0.0",
    name: "ell:blaze-styleguide",
});

function configurePackage(api) {
    api.versionsFrom("1.3");

    var impliedPackages = ["standard-minifier-css", "standard-minifier-js",
        "templating", "underscore", "session",
        "kadira:flow-router@2.12.1",
        "kadira:blaze-layout@2.3.0",
        "twbs:bootstrap@3.3.6"
    ];
    api.use(impliedPackages);
    api.imply(impliedPackages);

    api.export("SG", "client");

    api.addFiles([]);

    api.addFiles([], ["server"]);

    api.addFiles([
        "client/sg_screen/sg_screen.html",
        "client/sg_screen/sg_screen_s.html",
        "client/sg_empty.html",
        "client/sg_layout.html",
        "client/sg_nav.html",
        "client/sg_renderer.html",
        "client/lib/sg.js",
        "client/sg_screen/sg_screen.css",
        "client/sg_screen/sg_screen.js",
        "client/sg_screen/sg_screen_s.js",
        "client/sg_configure.js",
        "client/sg_layout.css",
        "client/sg_layout.js",
        "client/sg_nav.css",
        "client/sg_nav.js",
        "client/sg_register.js",
        "client/sg_renderer.js",
        "client/sg_routes.js"
    ], ["client"]);

}

Package.onUse(configurePackage);

Package.onTest(function(api) {
    configurePackage(api);
});
