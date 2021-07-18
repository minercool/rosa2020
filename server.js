const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use('/agent',require('./api/controllers/agentController'));
app.listen(5000,()=>{console.log('listening on port 5000')});