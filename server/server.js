let sysInfo = require('systeminformation');
let express = require('express');
let app = express();
let port = process.env.PORT || 3030;

let router = express.Router();
app.use('/api', router);

router.get('/cpu', (req, res) => {
  sysInfo.cpu(data => {
    res.json(data);
  });
});

router.get('/system', (req, res) => {
  sysInfo.system(data => {
    res.json(data);
  });
});

router.get('/mem', (req, res) => {
  sysInfo.mem(data => {
    res.json(data);
  });
});

router.get('/network-interfaces', (req, res) => {
  sysInfo.networkInterfaces(data => {
    res.json(data);
  });
});

router.get('/network-status/:id', (req, res) => {
  const itf = req.params.id;
  sysInfo.networkStats(itf, data => {
    res.json(data);
  });
});

router.get('/processes', (req, res) => {
  sysInfo.processes(data => {
    res.json(data);
  });
});

app.disable('etag');
app.listen(port);
console.log('Listening on port ' + port);
