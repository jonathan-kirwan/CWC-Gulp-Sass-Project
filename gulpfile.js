var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    autoprefixerOptions = {
        browsers: ['last 2 versions']
    }

gulp.task('sass', function () {
    return gulp.src('./Austin_Responsive_Project/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })) // Using gulp-sass
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('.')) // should be the same folder
        .pipe(gulp.dest('./Austin_Responsive/css'))
});

gulp.task('skin', function () {
    return gulp.src('./Austin_Responsive_Project/**/*.skin')
    .pipe(rename(function(path) {
       path.basename = changeCase.lowerCase(path.basename);
       path.extname = changeCase.lowerCase(path.extname);
     }))
     .pipe(gulp.dest('./Austin_Responsive/css'))
});

gulp.task('xml', function () {
    return gulp.src('./Austin_Responsive_Project/**/*.xml')
        .pipe(gulp.dest('./Austin_Responsive/css'))
});

gulp.task('watch', function () {
    gulp.watch('./Austin_Responsive_Project/scss/**/*.scss', ['sass']);
})