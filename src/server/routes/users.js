/**
 * @file
 */
import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json([{
    id: 1,
    username: 'lloydb1'
  }, {
    id: 2,
    username: 'lloydb2'
  }])
})

export default router
