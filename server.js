var connect = require('connect');
var serveStatic = require('serve-static');
//
// var app = express();
// app.get('/', function(req, res) {
    // res.sendFile('index.html');
// });
// app.use(express.static('/assets'));
// app.listen(8080);

connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});


