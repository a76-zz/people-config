const port = 3010
const host = 'people-cloud.localtest.me'

const messageTypes = [
  'SYNC',
  'ADD_CONTACT',
  'EDIT_CONTACT',
  'DELETE_CONTACT'
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})

module.exports = {
  port,
  host,
  messageTypes,
  uri: `http://${host}:${port}`
}
