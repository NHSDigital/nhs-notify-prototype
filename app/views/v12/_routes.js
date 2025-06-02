const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

router.post('/{*any}/route-template-type', (req, res) => {

  const radio_template_type = req.session.data['radio-template-type'];
  const radio_template_type_letter = req.session.data['radio-template-type-letter'];

  // Take the user to the relevant 'create' page and reset the page mode to 'create'
  if (radio_template_type === 'app') {
      res.redirect('create-app-template');
  }
  
  if (radio_template_type === 'email') {
      res.redirect('create-email-template');
  }
  
  if (radio_template_type === 'sms') {
    res.redirect('create-sms-template');
  }
  
  if (radio_template_type_letter === 'letter-non-eng') {
    res.redirect('create-letter-non-eng-template');
  }

  /*
  if (radio_template_type === 'letter' && radio_template_type_letter === 'letter-large-print') {
    res.redirect('/404');
  }

  if (radio_template_type === 'letter' && radio_template_type_letter === 'letter-braille') {
    res.redirect('/404');
  }

  if (radio_template_type === 'letter' && radio_template_type_letter === 'letter-audio-cd') {
    res.redirect('/404');
  }
  */

  else {
    res.redirect('create-letter-template');
  }

});


router.post('/{*any}/route-template-next', (req, res) => {

  const template_next = req.session.data['template-next'];

  // Take the user to the 'create' page but set the page to 'edit' mode
  if (template_next === 'edit-app') {
    res.redirect('create-app-template?mode=edit');
  }

  if (template_next === 'test-app') {
      res.redirect('template-test');
  }

  // Create the 'approved' variable for app and set it as false
  if (template_next === 'submit-app') {
    res.redirect('template-approve?template-app-name-1-approved=0');
  }


  // Take the user to the 'create' page but set the page to 'edit' mode
  if (template_next === 'edit-email') {
      res.redirect('create-email-template?mode=edit');
  }
  
  if (template_next === 'test-email') {
      res.redirect('template-test');
  }

  // Create the 'approved' variable for email and set it as false
  if (template_next === 'submit-email') {
    res.redirect('template-approve?template-email-name-1-approved=0');
  }


  // Take the user to the 'create' page but set the page to 'edit' mode
  if (template_next === 'edit-sms') {
    res.redirect('create-sms-template?mode=edit');
  }

  if (template_next === 'test-sms') {
      res.redirect('template-test');
  }

  // Create the 'approved' variable for sms and set it as false
  if (template_next === 'submit-sms') {
    res.redirect('template-approve?template-sms-name-1-approved=0');
  }


  // Take the user to the 'create' page but set the page to 'edit' mode
  if (template_next === 'edit-letter') {
    res.redirect('create-letter-template?mode=edit');
  }

  if (template_next === 'edit-personalisation-letter') {
    res.redirect('template-test-letter');
  }

  if (template_next === 'test-letter') {
    res.redirect('template-test-letter');
  }

  if (template_next === 'view-letter') {
    res.redirect('template-letter-1?show-save-banner=no&personalisation-letter=');
  }

  // Create the 'approved' variable for letter and set it as false
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



router.post('/{*any}/route-template-letter-1', (req, res) => {

  const radio_letter_test_data = req.session.data['radio-letter-test-data'];

  if (radio_letter_test_data === 'yes') {
      res.redirect('template-test-letter');
  }

  else {
    res.redirect('template-letter-1');
  }

});



router.post('/{*any}/route-template-duplicate', (req, res) => {

  const radio_template_duplicate_type = req.session.data['radio-template-duplicate-type'];

  if (radio_template_duplicate_type === 'app') {
      res.redirect('templates?app-duplicate-template=yes');
  }

  else {
    res.redirect('/404');
  }

});




router.post('/{*any}/route-choose-plan', (req, res) => {

  const radio_message_plan = req.session.data['message-plan'];

  if (radio_message_plan === '1') {
      res.redirect('create-message?message-name-1=&messages-draft=0&messages-prod=0&message-plan-submitted=&channel-amount=3&channel-1-type=NHS App&channel-1-template=&channel-2-type=Email&channel-2-template=&channel-3-type=Text message (SMS)&channel-3-template=&channel-4-type=&channel-4-template=&channel-4-large-print-template=&channel-4-language-template=&channel-4-accessible-template=');
  }

  if (radio_message_plan === '2') {
    res.redirect('create-message?message-name-1=&messages-draft=0&messages-prod=0&message-plan-submitted=&channel-amount=4&channel-1-type=NHS App&channel-1-template=&channel-2-type=Email&channel-2-template=&channel-3-type=Text message (SMS)&channel-3-template=&channel-4-type=Letter&channel-4-template=&channel-4-large-print-template=&channel-4-language-template=&channel-4-accessible-template=');
}

  else {
    res.redirect('/404');
  }

});

module.exports = router