module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    // Babelの設定情報
    babel: {
      options: {
        // ソースマップ（変換前後の対応情報）を生成
        sourceMap: true,
        // ES2015のプリセットを有効化
        presets: ["es2015"],
      },
      dist: {
        files: {
          // babel.jsをbegin.jsに変換
          "lib/begin.js": "src/babel.js",
        },
      },
    },
  });
  grunt.registerTask("default", ["babel"]);
};
