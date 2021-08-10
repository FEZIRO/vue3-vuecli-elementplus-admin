const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  publicPath: "./",

  assetsDir: "public",

  indexPath: "index.html",

  devServer: {
    port: 8083,
    open: true,
    index: "/index.html",
    overlay: {
      warnings: false,
      errors: false,
    },
  },

  css: {
    loaderOptions: {},
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      //正式打包去除console语句
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      //可视化分析打包文件占比
      config.plugins.push(new BundleAnalyzerPlugin());
      //开启gzip压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: /\.js$|\.html$|\.json$|\.css/,
          threshold: 10240,
          minRatio: 0.8,
        })
      );
    }
    //打包进度条
    config.plugins.push(
      new ProgressBarPlugin({
        format:
          " build [:bar] " +
          chalk.green.bold(":percent") +
          " (:elapsed seconds)",
        clear: false,
      })
    );
  },
  chainWebpack: config => {
    //全局导入scss文件
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: "./src/styles/global.scss",
        })
        .end();
    });
  },

  transpileDependencies: [],
  productionSourceMap: false,
};

console.log("process.env.VUE_APP_SERVER_HOST", process.env.VUE_APP_SERVER_HOST);
