import nodemon from 'gulp-nodemon'
import path from 'path'
import browserSync from 'browser-sync'

export const nodemonDev = (envs={}, cb) => {
  let called = false
  nodemon({
    script: path.join(__dirname, '..', 'server/server.js'),
    ext: 'js',
    watch: ['server/*'],
    ignore: ['client/*.js', 'node_modules/'],
    env: {
      'NODE_ENV': 'development',
      ...envs
    }
  })
  .on('start', () => {
    if (!called) { cb() }
    called = true
  })
  .on('restart', () => {
    browserSync.notify('<span style="color:red;">Reiniciando el server...</span>', 1400)
    setTimeout(() => {
      browserSync.reload({stream: false})
    }, 2500)
  })
}

export const nodemonProduction = (envs={}) => {
  nodemon({
    script: path.join(__dirname, '..', 'server/server.js'),
    ext: 'js',
    env: {
      'NODE_ENV': 'production',
      ...envs
    }
  })
}
