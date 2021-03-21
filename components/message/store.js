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
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  });

  foundMessage.message = message;
  const newMesage = await foundMessage.save();
  return newMesage;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  //get
  //update
  //delete
}