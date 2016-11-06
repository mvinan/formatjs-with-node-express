import browserSync from 'browser-sync'
import config from '../server/lib/config'
const proxy = config().serverPort || 3000

const browserSyncInit = (port) => {
  browserSync.init({
    proxy: `http://0.0.0.0:${proxy}`,
    // files: ['public/**/*.*'],
    browser: "google chrome",
    port: port,
    open: false
  });
}

export default browserSyncInit
