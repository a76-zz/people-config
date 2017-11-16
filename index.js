const port = 3010;
const host = 'people-cloud.localtest.me';

const messages = {
  sync: 'SYNC',
  addContact: 'ADD_CONTACT',
  editContact: 'EDIT_CONTACT',
  deleteContact: 'DELETE_CONTACT'
};

module.exports = {
  port,
  host,
  messages,
  uri: `http://${host}:${port}`
};
