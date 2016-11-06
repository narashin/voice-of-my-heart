'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
          res.status(200).send('server.js를 보고싶다');
          });

if (module === require.main) {
      const server = app.listen(process.env.PORT || 8080, () => {
                  const port = server.address().port;
                      console.log(`App listening on port ${port}`);
                        });
}

module.exports = app;
