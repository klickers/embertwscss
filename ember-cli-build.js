"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
    const app = new EmberApp(defaults, {
        postcssOptions: {
            compile: {
                extension: "scss",
                enabled: true,
                parser: require("postcss-scss"),
                plugins: [
                    {
                        module: require("autoprefixer"),
                        options: {},
                    },
                    {
                        module: require("tailwindcss"),
                        options: {
                            config: "./tailwind.config.js",
                        },
                    },
                ],
            },
        },
    });

    return app.toTree();
};
