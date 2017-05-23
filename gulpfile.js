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

gulp.task('sass-font-awesome', function () {
    return gulp.src('./Austin_Responsive_Project/font-awesome-4.7.0/scss/**/*.scss')
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
        .pipe(gulp.dest('./Austin_Responsive/css'))
});

gulp.task('xml', function () {
    return gulp.src('./Austin_Responsive_Project/**/*.xml')
        .pipe(gulp.dest('./Austin_Responsive/css'))
});

gulp.task('fonts', function () {
    return gulp.src('./Austin_Responsive_Project/font-awesome-4.7.0/fonts/*')
        .pipe(gulp.dest('./Austin_Responsive/fonts'))
});

gulp.task('templates', function () {
    return gulp.src('./Austin_Responsive_Project/templates/**/*.html')
        .pipe(gulp.dest('./Austin_Responsive/templates'))
});

gulp.task('js', function () {
    return gulp.src('./Austin_Responsive_Project/js/**/*.js')
        .pipe(gulp.dest('./Austin_Responsive/js'))
});

gulp.task('watch', function () {
    gulp.watch('./Austin_Responsive_Project/scss/**/*.scss', ['sass', 'sass-font-awesome', 'js']);
})