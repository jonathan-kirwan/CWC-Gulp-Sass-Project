var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    autoprefixerOptions = {
        browsers: ['last 2 versions']
    }

gulp.task('sass', function() {
    return gulp.src('app/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('.')) // should be the same folder
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.scss', [sass])
})