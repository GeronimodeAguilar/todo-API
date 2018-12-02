const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',  { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');       
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')


//     db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5c0310b0f10e2e43844fb829")
// }, {
//     $set: {
//         completed: true
//     }
// }, {
//     returnOriginal: false
// }).then((result) => {
//         console.log(result);
//     });  

db.collection('Users').findOneAndUpdate({
    _id: ObjectID('5c032569c90d29498cf780b3')
}, {
    $inc: {
        age: 1
    },
    $rename: { 
        'Andrew': 'Andy'
    }
}, {
    returnOriginal: false
}).then((result) => {
        console.log(result);
    });  
    

//    client.close();
});
