import fs from 'fs'
import path from 'path'
import yml from 'js-yaml'
import env from './env'

const ymlPath = path.join(__dirname, '..', 'config', 'config.yml')
const config = yml.safeLoad(fs.readFileSync(ymlPath, 'utf-8'))

/**
 * Return the selected environment configuration
 */

export default function getConfig() {
  return config[env().name] || {}
}
