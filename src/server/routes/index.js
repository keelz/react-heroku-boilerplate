/**
 * @file
 */
import express from 'express'

/**
 * Controllers.
 */
import { 
  defaultAction,
  generatePasswordsAction
} from 'controller/index'

const router = express.Router()

router.get('/', defaultAction)
router.get('/genpass', generatePasswordsAction)

export default router
