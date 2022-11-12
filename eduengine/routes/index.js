const express = require('express');

const router = express.Router();
const { signUp, signIn } = require('../apis/user');

router.get('/sign-in', signIn);
router.get('/sign-up', signUp)

module.exports = router;