// External dependencies
const express = require('express');

const router = express.Router();

// Logging session data  
  
router.use((req, res, next) => {    
    const log = {  
      method: req.method,  
      url: req.originalUrl,  
      data: req.session.data  
    }  
    console.log(JSON.stringify(log, null, 2))  
   
  next()  
})

// GET SPRINT NAME - useful for relative templates  
router.use('/', (req, res, next) => {  
res.locals.currentURL = req.originalUrl; //current screen  
res.locals.prevURL = req.get('Referrer'); // previous screen

console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );

next();  
});

// Add your routes here - above the module.exports line

module.exports = router;

// Get the data values from session-data-defaults.js to use on the page

router.get('*/manage', function (request, response) {
  response.locals.defaults = require('./data/session-data-defaults.js')
  response.render('manage/index')
})

router.get('*/folder-1', function (request, response) {
  response.locals.defaults = require('./data/session-data-defaults.js')
  response.render('manage/folder-1/index')
})


router.get('*/create-email-template', function (request, response) {
  response.locals.defaults = require('./data/session-data-defaults.js')
  response.render('manage/folder-1/create-email-template')
})

router.get('*/template-email-1', function (request, response) {
  response.locals.defaults = require('./data/session-data-defaults.js')
  response.render('manage/folder-1/template-email-1')
})


router.get('*/create-sms-template', function (request, response) {
  response.locals.defaults = require('./data/session-data-defaults.js')
  response.render('manage/folder-1/create-sms-template')
})

router.get('*/template-sms-1', function (request, response) {
  response.locals.defaults = require('./data/session-data-defaults.js')
  response.render('manage/folder-1/template-sms-1')
})


router.get('*/create-letter-template', function (request, response) {
  response.locals.defaults = require('./data/session-data-defaults.js')
  response.render('manage/folder-1/create-letter-template')
})

router.get('*/template-letter-1', function (request, response) {
  response.locals.defaults = require('./data/session-data-defaults.js')
  response.render('manage/folder-1/template-letter-1')
})

router.get('*/template-approve', function (request, response) {
  response.locals.defaults = require('./data/session-data-defaults.js')
  response.render('manage/template-approve')
})