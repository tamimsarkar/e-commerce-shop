const express = require('express');
require('dotenv').config();
const app = express();
const PORT = 4000 || process.env.PORT;
app.listen( () => console.log(`app listening on port ${PORT}`))