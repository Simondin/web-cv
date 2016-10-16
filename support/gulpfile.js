var gulp = require('gulp');
var stylemod = require('gulp-style-modules');
const path = require('path');

gulp.task('default', function() {
    // place code for your default task here
});

// Wrap css files
gulp.task("modularize-styles", function() {
    gulp.src("../source/app/vendor/components/**/*.css")
        .pipe(stylemod({
            // All files will be named 'styles.html'
            filename: "styles",
            // Use '-css' suffix instead of '-styles' for module ids
            moduleId: function(file) {
                return path.basename(file.path, path.extname(file.path)) + "-css";
            }
        }))
        .pipe(gulp.dest("../source/app/vendor/components/polymer_css/"));
});