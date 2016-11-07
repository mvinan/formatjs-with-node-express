import nodemon from 'gulp-nodemon'
import path from 'path'
import browserSync from 'browser-sync'

export const nodemonDev = (envs={}) => {
  let called = false
  nodemon({
    script: path.join(__dirname, '..', 'server/server.js'),
    ext: 'js',
    watch: [path.join(__dirname,'..','server/*')],
    ignore: [
      path.join(__dirname, '..', 'client/*.js'),
      path.join(__dirname, '..', 'node_modules/')
    ],
    env: {
      'NODE_ENV': 'development',
      ...envs
    }
  })
  .on('start', () => {
    // if (!called) { cb() }
    called = true
  })
  .on('restart', () => {
    browserSync.notify('<span style="color:red;">Reiniciando el server...</span>', 1400)
    setTimeout(() => {
      browserSync.reload({stream: false})
    }, 3000)
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
