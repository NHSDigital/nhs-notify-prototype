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

  if (radio_template_type === 'letter-non-eng') {
    res.redirect('create-letter-non-eng-template?mode=');
  }
  
  if (radio_template_type === 'letter-large') {
    res.redirect('create-letter-large-template?mode=');
  }

  if (radio_template_type === 'letter-braille') {
    res.redirect('create-letter-braille-template?mode=');
  }

  if (radio_template_type === 'letter-audio') {
    res.redirect('create-letter-audio-template?mode=');
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

  if (template_next === 'submit-app') {
    res.redirect('template-approve?template-app-name-1-approved=0');
  }


  
  if (template_next === 'edit-email') {
      res.redirect('create-email-template?mode=edit');
  }
  
  if (template_next === 'test-email') {
      res.redirect('template-test');
  }

  if (template_next === 'submit-email') {
    res.redirect('template-approve?template-email-name-1-approved=0');
  }



  if (template_next === 'edit-sms') {
    res.redirect('create-sms-template?mode=edit');
  }

  if (template_next === 'test-sms') {
      res.redirect('template-test');
  }

  if (template_next === 'submit-sms') {
    res.redirect('template-approve?template-sms-name-1-approved=0');
  }



  if (template_next === 'edit-letter') {
    res.redirect('create-letter-template?mode=edit');
  }

  if (template_next === 'test-letter') {
    res.redirect('template-test');
  }

  if (template_next === 'submit-letter') {
    res.redirect('template-approve?template-letter-name-1-approved=0');
  }



  if (template_next === 'create') {
    res.redirect('template-type');
  }

  if (template_next === 'saved') {
    res.redirect('templates');
  }
  
  else {
    res.redirect('#error');
  }

});

module.exports = router