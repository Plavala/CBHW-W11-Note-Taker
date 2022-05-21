const express = reqire('express');

// initializw the app and creat a port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

// start the server on the port
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));