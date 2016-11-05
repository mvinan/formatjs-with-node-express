import config from './config'
import crypto from 'crypto'

const salt = config().security.secret

export default {
  md5,
  sha1
}

const md5 = str => (
  crypto
    .createHash('md5')
    .update(`${salt}${str.toString()}`)
    .digest('hex')
)

const sha1 = str => (
  crypto
    .createHash('sha1')
    .update(`${salt}${str.toString()}`)
    .digest('hex')
)
