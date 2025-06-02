const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

router.post('/{*any}/question-route', function (req, res) {
    var radio = req.session.data['radio']
    if (radio == 'no'){
        res.redirect('no')
    }
    else {
        res.redirect('yes')
    }
})

module.exports = router