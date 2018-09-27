const {MongoClient, ObjectID} = require('mongodb')

function insertDoc(client, collectionName, doc) {
  const db = client.db('TodoApp')
  db.collection(collectionName).insertOne(doc, (err, res) => {
    if (err) {
      return console.log('unable to insert', err)
    }
    console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2))
  })
}

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('cannot connect to connect to mongo db')
  }
  console.log('connected to mongo db')
  const db = client.db('TodoApp')

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count ${count}`)
  // }, (err) => {
  //   console.log(err)
  // })

  db.collection('Users').find({ name: 'Andrew'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log(err)
  })

  client.close()

})