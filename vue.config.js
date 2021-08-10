const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  publicPath: "./",

  // 放置生成的静态资源(css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  assetsDir: "public",

  // 指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
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
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      //可视化分析打包文件占比
      config.plugins.push(new BundleAnalyzerPlugin());
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
