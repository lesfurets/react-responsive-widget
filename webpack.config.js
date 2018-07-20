const path = require("path");
const rootPath = process.cwd();

module.exports = (env, argv) => ({
    entry: "./src/index.js",
    output: {
        path: path.join(rootPath,'/dist'),
        filename: 'index.js',
        library: 'ReactResponsiveWidget',
        libraryTarget: 'umd',
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
            }
        ],
    }
});