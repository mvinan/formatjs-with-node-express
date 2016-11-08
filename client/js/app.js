import $ from 'jquery'
import socketio from 'socket.io-client'

const socket = socketio('http://0.0.0.0:3333')

let id = 'vote clicked!'
const $buttonEmitter = $('#emiter')
const $lang = $('#lang')

$buttonEmitter.on('click', function(ev){
  socket.emit('vote:clicked', id)
  return false
})

socket.on('vote:done', function(msg){
  $lang.empty().append(msg)
})
