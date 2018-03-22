import path from 'path';
import webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    entry: {
        vendor: "./src/vendor.ts",
        index: "./src/index.tsx"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    target: "web",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
        contentBase: "./dist"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    mode: 'development',
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, exclude: "/node_modules/" , loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/index.html'
        })
    ]
};

export default config;