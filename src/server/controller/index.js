/**
 * @flow
 * @file
 */
import passwordGenerator from 'password-generator'

/**
 * Default index action.
 * @route('/')
 * @param {exress$Request} req 
 * @param {express$Response} res 
 */
const defaultAction = (req: express$Request, res: express$Request): void => {
  res.status(200).json({message: 'hi'})
}

/**
 * Generate 5 random passwords.
 * @route('/genpass')
 * @param {express$Request} req 
 * @param {express$Response} res 
 */
const generatePasswordsAction = (req: express$Request, res: express$Response): void => {
  const count = 5
  const passwords = Array.from(Array(count).keys()).map(() =>
    passwordGenerator(12, false)
  )

  res.status(200).json(passwords)
}

export { defaultAction, generatePasswordsAction }
