var gulp = require('gulp')

//imported tasks
gulp.task('lint', require('./tasks/standard'))

//Tasks
gulp.task('analyze', ['lint'])
gulp.task('pre-push', ['lint'])
