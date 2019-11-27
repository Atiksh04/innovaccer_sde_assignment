var express = require('express');
var router = express.Router();

var user_entry=require('../controllers/controllers');

/* home page route */
router.get('/', function(req, res, next) {
  res.render('index');
});
/*api to add checkin user*/
router.post('/checkIn',user_entry.checkin);

/* api to update checkout time of existing visitor */
router.patch('/checkOut/:gemail',user_entry.checkout);

/* api to delete visiitor */
router.delete('/deleteentry/:gemail',user_entry.removeentry);

/* api to get detials of visitor */
router.get('/logentry',user_entry.getlogs);

module.exports = router;
