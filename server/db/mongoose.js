var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://GeronimodeAguilar:f3MmU654Xn9q2H2@ds159024.mlab.com:59024/node-todo-api' || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports = {mongoose};

