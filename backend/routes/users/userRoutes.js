const express = require("express");
const { register, login } = require("../../controllers/users/userController")
const {registerValidations, loginValidations} = require("../../validations/userValidations")
const router = express.Router();

router.post("/register", registerValidations, register);
router.post("/login", loginValidations, login);


module.exports = router;