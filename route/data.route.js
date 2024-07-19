const {Router} = require('express')
const router = Router()
const DataController = require('../controllers/data.controller')

router.get('/synccrewsv',DataController.synccrewsv)
router.get('/synccrewbase',DataController.synccrewbase)
router.get('/synccrewdoclist',DataController.synccrewdoclist)
router.get('/synccrewmanlist',DataController.synccrewmanlist)
router.get('/synccrewviewworksv',DataController.synccrewviewworksv)
router.get('/syncmessagesv',DataController.syncmessagesv)
router.get('/synctabelsv',DataController.synctabelsv)

router.get('/syncktudoc',DataController.syncktudoc)
router.get('/syncktulist',DataController.syncktulist)
router.get('/synctalbelmehan',DataController.synctalbelmehan)
module.exports = router
