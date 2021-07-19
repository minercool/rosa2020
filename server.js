const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


app.use('/agent',require('./api/controllers/agentController'));
app.use('/article',require('./api/controllers/articleController'));
app.use('/be',require('./api/controllers/beController'));
app.use('/be1',require('./api/controllers/be1Controller'));
app.use('/bs',require('./api/controllers/bsController'));
app.use('/bs1',require('./api/controllers/bs1Controller'));
app.use('/client',require('./api/controllers/clientController'));
app.use('/contrat',require('./api/controllers/contratController'))
app.listen(5000,()=>{console.log('listening on port 5000')});