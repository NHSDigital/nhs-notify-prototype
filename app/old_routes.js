
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