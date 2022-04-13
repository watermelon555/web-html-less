// eslint-disable-next-line import/no-extraneous-dependencies
const sassResourcesLoader = require('craco-sass-resources-loader');
const path = require('path');
const CracoLessPlugin = require('craco-less');
const NpmImportPlugin = require('less-plugin-npm-import');

const BUILD_PATH = path.resolve(__dirname, './build');

const pathResolve = pathUrl => path.join(__dirname, pathUrl);

const removeCssHashPlugin = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    const { plugins } = webpackConfig;
    plugins.forEach(plugin => {
      const { options } = plugin;

      if (!options) {
        return;
      }

      if (options.filename && options.filename.endsWith('.css')) {
        options.filename = 'static/css/[name].css';
        options.chunkFilename = 'static/css/[name].chunk.css';
      }
    });
    return webpackConfig;
  },
};

module.exports = {
  mode: "development",
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          loader: new NpmImportPlugin({ prefix: '~' }),
        },
        modifyLessRule: () => {
          return {
            test: /\.less$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]___[hash:base64:5]',
                  },
                },
              },
              'less-loader',
            ],
          };
        },
      },
    },
    { plugin: removeCssHashPlugin },
    {
      plugin: sassResourcesLoader,
      options: {
        loader: 'style!css?modules&localIdentName=[name]__[local]!sass?sourceMap=true',
        exclude: path.resolve(__dirname, 'src/*'),
        resources: [
          './src/assets/css/global.module.scss',
          './src/assets/css/base.module.scss',
          './node_modules/font-awesome/scss/font-awesome.scss',
        ],
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
      },
    },
  ],
  webpack: {
    configure: {
      output: {
        path: BUILD_PATH,
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
      },
    },
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils'),
      node_modules: pathResolve('node_modules'),
      // 此处是一个示例，实际可根据各自需求配置
    },
  },
  style: {
    modules: {
      localIdentName: '[local]___[hash:base64:5]',
    },
  },
};
