const path = require("path");
const rootPath = process.cwd();

module.exports = (env, argv) => ({
    entry: "./example/app/main.js",
    output: {
        path: rootPath + "/example",
        filename: "index.js"
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                use: ["style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {path: __dirname, ctx: {env: argv.mode}},
                            sourceMap: argv.mode !== "production",
                        },
                    },
                    "less-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {path: __dirname, ctx: {env: argv.mode}},
                            sourceMap: argv.mode !== "production",
                        },
                    },
                    "sass-loader"
                ]
            }
        ],
    }
});