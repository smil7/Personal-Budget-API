const express = require('express');
const apiRouter = express.Router();
const envelopeRouter = require('./routes/envelopeRouter');

apiRouter.use('/envelopes', envelopeRouter);

module.exports = apiRouter;