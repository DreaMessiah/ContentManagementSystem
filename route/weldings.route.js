const {Router} = require('express')
const router = Router()
const WeldingController = require('../controllers/weldings.controller')

router.get('/loadtabelsv',WeldingController.loadtabelsv)
router.get('/synctabelsv',WeldingController.synctabelsv)

router.get('/loadviewsworksv',WeldingController.loadviewsworksv)
router.get('/syncviewsworksv',WeldingController.syncviewsworksv)

router.get('/loadymsvarka',WeldingController.loadymsvarka)
router.get('/syncymsvarka',WeldingController.syncymsvarka)

router.get('/loadzasv',WeldingController.loadzasv)
router.get('/synczasv',WeldingController.synczasv)

router.get('/loadtablezayavka',WeldingController.loadtablezayavka)
router.get('/synctablezayavka',WeldingController.synctablezayavka)

router.get('/loadcrewsv',WeldingController.loadcrewsv)
router.get('/synccrewsv',WeldingController.synccrewsv)

module.exports = router
