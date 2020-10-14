module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Salmon Wu";
      return args;
    });
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "files/[name].[hash:8].[ext]"
              }
            }
          ]
        }
      ]
    }
  }
};
