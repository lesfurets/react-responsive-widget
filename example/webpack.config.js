const path = require("path");
const rootPath = process.cwd();

module.exports = (env, argv) => ({
    entry: "./example/app/main.tsx",
    output: {
        path: rootPath + "/example",
        filename: "index.js"
    },
    devServer: {
        inline: true,
        port: 8080
    },
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react',
            },
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom',
            },
        },
    ],
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
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
    },
    resolve: {
        extensions: [ '.tsx', '.ts', ".js", '.scss' ]
    },
});