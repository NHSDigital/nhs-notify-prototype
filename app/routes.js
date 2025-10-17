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

// Get current date & time
router.use((req, res, next) => {
  res.locals.currentDate = new Date();
  next();
});



// Add your routes here - above the module.exports line

router.use('/v1', require('./views/v1/_routes'));
router.use('/v2', require('./views/v2/_routes'));
router.use('/v2_1', require('./views/v2_1/_routes'));
router.use('/v3', require('./views/v3/_routes'));
router.use('/v4', require('./views/v4/_routes'));
router.use('/v5', require('./views/v5/_routes'));
router.use('/v6', require('./views/v6/_routes'));
router.use('/v7', require('./views/v7/_routes'));
router.use('/v8', require('./views/v8/_routes'));
router.use('/v10', require('./views/v10/_routes'));
router.use('/v11', require('./views/v11/_routes'));
router.use('/v12', require('./views/v12/_routes'));
router.use('/v13', require('./views/v13/_routes'));
router.use('/v14', require('./views/v14/_routes'));
router.use('/v15', require('./views/v15/_routes'));

module.exports = router;