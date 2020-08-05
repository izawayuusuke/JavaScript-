// Gruntコードの外枠
module.exports = function (grunt) {
  // 初期化情報（タスクの定義）
  grunt.initConfig({
    uglify: {
      // grunt-contrib-uglifyのタスク
      myTask: {
        // 任意の子タスク
        // 圧縮ルール
        files: {
          "scripts/app.min.js": [
            "src/Member.js",
            "src/MyArea.js",
            "src/MyStorage.js",
            // 入力（圧縮対象）ファイル名
          ],
        },
      },
    },
  });

  // grunt-contrib-uglifyプラグインをロード
  grunt.loadNpmTasks("grunt-contrib-uglify");
  // defaultタスクにuglifyを登録
  grunt.registerTask("default", ["uglify"]);
};
