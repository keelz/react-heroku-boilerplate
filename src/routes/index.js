/**
 * @file
 */
import express from 'express'
import passwordGenerator from 'password-generator'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'hi' })
})

router.get('/genpass', (req, res) => {
  const count = 5
  const passwords = Array.from(Array(count).keys()).map(() =>
    passwordGenerator(12, false)
  )

  res.status(200).json(passwords)
})

export default router
