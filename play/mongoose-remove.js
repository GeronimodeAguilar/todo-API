const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndDelete({_id: '5c05b1f461de980864658630'}).then((todo) => {
    console.log(todo)
  });

// Todo.findOneAndDelete({_id: '5c05b1f461de980864658630'}).then((todo) => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove('5c065ba158fe9ac1cd742f5f').then((todo) => {
//     console.log(todo);
// });