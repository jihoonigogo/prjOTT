var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const News = require('../../../models/news')
const Cine = require('../../../models/cines')
// News 리스트 
router.get('/list/latest', (req, res, next) => {
    News.find()
      .then(rs => {
        res.send({ success: true, ds: rs, token: req.token})
      })
      .catch(e => {
        res.send({ success: false, msg: e.message })
      })
  });
router.get('/list/cine', (req, res, next) => {
  Cine.find()
    .then(r => {
      res.send({ success: true, dr: r, token: req.token})
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
});
module.exports = router;
