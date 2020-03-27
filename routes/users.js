const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator');

/* GET all users listing. */
router.get('/', async (req, res) => {
    let users = await User.findAll();
    return res.send(users);
});

/* GET get user by id. */
router.get('/:id', async (req, res) => {
    let user = await User.findById(req.params.id);

    return res.send(user);
});

/* Edit user. */
router.put('/:id',[ check('firstName').optional(),
    check('email').optional().isEmail().custom(async (value, { req }) => {
        let user = await User.findByEmail(value);
        if (user.length > 0 && req.params.id !== user.id) {
            return Promise.reject('E-mail already in use');
        }
    }),
    check('documentTypeId').optional(),
    check('password').optional(),
    check('email').optional()], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array(), message: "Couldn't update user" });
    }

    await User.update(req.body, { where: { id: req.params.id } });

    let user = await User.findById(req.params.id);

    res.status(200);
    res.send(user);
});

/* Create user. */
// TODO: encrypt passwords, im gonna leave it to the end so its easier to log with new users when we test that.
router.post('/',
    [
        check('firstName').notEmpty(),
        check('document').notEmpty(),
        check('documentTypeId').notEmpty(),
        check('password').notEmpty(),
        check('email').notEmpty()
            .isEmail()
            .custom( async value => {
                let user = await User.findByEmail(value);
                if (user.length > 0) {
                    return Promise.reject('E-mail already in use');
                }
            })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array(), message: "Couldn't create user" });
        }
        let newUser = await User.create(req.body);
        res.status(201);
        res.send(newUser);
    }
);

/* Delete user by id. */
router.delete('/:id', async (req, res) => {
    let user = await User.checkActiveStatus(req.params.id);

    if ( user.active ) {
        await User.update( {active: 0}, { where: { id: req.params.id } });
        return res.status(200).json({ message: "User deleted successfully" });
    }

    return res.status(409).json({ message: "The user is already deleted" });
});

module.exports = router;
