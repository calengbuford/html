const express = require('express');
const app = express();
const port = 4200;

app.get('/', (req, res) => {
    res.send('Hello World!<br>Running in port: ' + port);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

