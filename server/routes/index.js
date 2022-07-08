const router = require( "express" ).Router();

router.use('/analytics', require('./analytics'));
router.use('/filiere', require('./filiere'));
router.use('/logs', require('./log'));
router.use('/security', require('./security'));
router.use('/techno', require('./techno'));
router.use('/users', require('./user'));

module.exports = router;