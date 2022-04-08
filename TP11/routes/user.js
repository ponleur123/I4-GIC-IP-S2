var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const userService = require('../services/user');

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await userService.findById(id);
  res.json(result);
})

// all users
router.get('/all', auth.ensureSignedIn, (req, res) => {
  // to do
  const result = await userService.findAll({})
  res.json(result)
})

router.post('/update-password', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {
  // to do
  // const {id,password}=req.body
  const result = await userService.updatePass(req.body)
  res.json(result);
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const {id,email,username,firstname,lastname} = req.body
  const result = await userService.update({id,email,username,firstname,lastname})
  res.json(result);
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json(await userService.remove(req.body));
})

module.exports = router