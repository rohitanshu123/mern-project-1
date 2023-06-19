const express = require("express");

const {getUser, postUser, getHomepage } = require("../controllers/users");

const router = express.Router();

router.route("/").get(getHomepage);
router.route("./displayUser").get(getUser);
router.route("./createUser").get(postUser);

module.exports = router;


