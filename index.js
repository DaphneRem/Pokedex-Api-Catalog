const express = require('express');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./client/src/static/'));
app.use(express.static('./client/dist/'));
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*'); // donner l'accès à tout
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // accepter ces méthodes
    res.setHeader('Access-Control-Allow-Headers', 'X-requested-With, content-type, Authorization'); // accepter les XML
    next();
});


// start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001 or http://127.0.0.1:3001');
});
