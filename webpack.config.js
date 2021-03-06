const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "production",
    entry: {
        polyfill: "babel-polyfill",
        script: "./js/script.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env", {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }
                    ]
                }
            }
        }]
    },
    plugins: [
        new Dotenv({
            path: './conf.d/.env'
        })
    ]
};