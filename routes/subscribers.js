const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

/* Getting All */
router.get('/', (req, res) => {
    res.send('Test')
})
/* Getting One */
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
/* Creating One */
router.post('/', (req, res) => {

})
/* Updating One  */
router.patch('/', (req, res) => {

})

/* Deleting One  */
router.delete('/:id', (req, res) => {

})

module.exports = router