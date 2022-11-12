module.exports.signIn = (req, res) => {
  try {
    return res.render('signin');
  } catch (err) {
    return res.status(404).send('NOT FOUND');   
  }
}

module.exports.signUp = (req, res) => {
  try {
    return res.render('signup');
  } catch(err) {
    return res.status(404).send('NOT FOUND');
  }
}