const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://db_user_backendNode:OdTGDijnJnFUMSkh@cluster0.63u4m.mongodb.net/db_backendNode?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('[db] Conectada con éxito');
//.then(() => console.log('[db] Conectada con éxito'))
//.catch(e => console.error('[db] ', e));

function addMessage(message) {
  //list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage() {
  //return list;
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  //get
  //update
  //delete
}