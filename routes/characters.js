const router = require('express').Router()
const charCtrl = require('../controllers/characters.js')

// GET localhost:3000/
router.get('/', charCtrl.index)
router.post('/', charCtrl.create)
router.post('/:id', charCtrl.addUniqueWeapon)
router.put('/:id', charCtrl.update)
router.delete('/:id', charCtrl.delete)

module.exports = router
