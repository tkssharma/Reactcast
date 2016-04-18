var port = process.env.PORT || 3000;

var lessons = [
    "01-intro",
    "02-let",
    "03-constants",
    "04-defaults",
    "05-Rest-Param-Spread-Operator",
    "06-Object-Destructuring",
    "07-Object-Assign",
    "07-Object-String",
    "08-Template-Strings",
    "09-Arrays",
    "10-Maps-Sets",
    "11-ES6-Native-Promises",
    "12-classes",
    "13-modules",
    "14-generators"
]

var entry = {}
lessons.forEach(function(lesson){
  entry[lesson] = './lessons/' + lesson + '/main.js'
})

module.exports = {
  entry: entry,
  output: {
    path: './lessons/',
    filename: "[name]/index.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './lessons/',
    port: port
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
