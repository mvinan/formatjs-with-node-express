import analyze from './lint'
import runWebpack from './webpack'
import sassCompile from './compile-sass'
import browserSyncInit from './browser-sync'
import {nodemonDev, nodemonProduction} from './nodemon-server'

export default {
  analyze,
  runWebpack,
  sassCompile,
  browserSyncInit,
  nodemon: {
    dev: nodemonDev,
    production: nodemonProduction
  }
}
