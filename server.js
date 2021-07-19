const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/agent", require("./api/controllers/agentController"));
app.use("/article", require("./api/controllers/articleController"));
app.use("/be", require("./api/controllers/beController"));
app.use("/be1", require("./api/controllers/be1Controller"));
app.use("/bs", require("./api/controllers/bsController"));
app.use("/bs1", require("./api/controllers/bs1Controller"));
app.use("/client", require("./api/controllers/clientController"));
app.use("/contrat", require("./api/controllers/contratController"));
app.use('/docbe',require('./api/controllers/docbeController'));
app.use('/docbe1',require('./api/controllers/docbe1Controller'));
app.use('/docbs',require('./api/controllers/docbsController'));
app.use('/docbs1',require('./api/controllers/docbs1Controller'));
app.use('/payment',require('./api/controllers/paymentController'));
app.use('/places',require('./api/controllers/placesController'));

app.listen(5000, () => {
  console.log("listening on port 5000");
});
