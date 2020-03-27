const express = require('express');
const router = express.Router();
const Case = require('../models/Case');
const User = require('../models/User');
const CaseUser = require('../models/CaseUser');
const { check, validationResult } = require('express-validator');

router.post('/',
    [
        check('code').notEmpty(),
        check('title').notEmpty(),
        check('description').notEmpty(),
        check('users').notEmpty()
            .custom( async value => {
                for (const user of value) {
                    let dbUser = await User.isIdUnique(user.userId);

                    if (!dbUser) {
                        return Promise.reject('User not found');
                    }

                }
            })
    ],
    async (req, res) => {
        const errors = await validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array(), message: "Couldn't create user" });
        }

        let newCase = await Case.create(req.body);

        for (const user of req.body.users) {

            let associations = {
                userId: user.userId,
                roleId: user.roleId,
                caseId: newCase.id
            };

            await CaseUser.create(associations);
        }

        res.status(201);
        res.send(newCase);
    }
);


module.exports = router;
