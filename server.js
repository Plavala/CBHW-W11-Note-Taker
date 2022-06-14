const express = require("express").Router();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Start the server on the port
app.listen(app.get('port'), () => console.log(`Listening on PORT: ${PORT}`));
// server.listen(app.get('port') , function(){
//     console.log('Chat Up on Port : '+ app.get('port'));
//     }); 

app.post('/api/notes', (req, res) => {
    res.json('post')
})

app.use('/api', apiRoutes);
//HTML Routs
app.use('/', htmlRoutes);



