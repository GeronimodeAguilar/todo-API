const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',  { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');       
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Users').deleteMany({text: 'run'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });    

    // db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });  
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5c031125bd89c368cc0ac971")}).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });        

//    client.close();
});
