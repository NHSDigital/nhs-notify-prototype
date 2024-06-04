const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

router.post('*/route-template-type', (req, res) => {

  const radio_template_type = req.session.data['radio-template-type'];

  if (radio_template_type === 'app') {
      res.redirect('create-app-template?mode=');
  }
  
  if (radio_template_type === 'email') {
      res.redirect('create-email-template?mode=');
  }
  
  if (radio_template_type === 'sms') {
    res.redirect('create-sms-template?mode=');
  }
  
  else {
    res.redirect('create-letter-template?mode=');
  }

});


router.post('*/route-template-next', (req, res) => {

  const template_next = req.session.data['template-next'];

  if (template_next === 'edit-app') {
    res.redirect('create-app-template?mode=edit');
  }

  if (template_next === 'test-app') {
      res.redirect('template-test');
  }
  
  if (template_next === 'edit-email') {
      res.redirect('create-email-template?mode=edit');
  }
  
  if (template_next === 'test-email') {
      res.redirect('template-test');
  }

  if (template_next === 'edit-sms') {
    res.redirect('create-sms-template?mode=edit');
  }

  if (template_next === 'test-sms') {
      res.redirect('template-test');
  }

  if (template_next === 'edit-letter') {
    res.redirect('create-letter-template?mode=edit');
  }

  if (template_next === 'test-letter') {
      res.redirect('template-test');
  }
  
  else {
    res.redirect('template-approve');
  }

});

module.exports = router