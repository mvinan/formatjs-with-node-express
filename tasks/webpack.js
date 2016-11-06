import gulp from 'gulp'
import webpack from 'gulp-webpack'
import browserSync from 'browser-sync'
import webpackConfig from '../webpack.config'
import path from 'path'

const runWebpack = () => (
  gulp.src(path.join(__dirname, '..', 'client/js/app.js'))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(path.join(__dirname, '..', 'public/js/')))
    .pipe(browserSync.reload({stream: true}))
)

export default runWebpack
