const express = require("express");
const router = express.Router();
const { createContact, getContacts ,deleteContacts } = require("../controller/cont.controller");

router.post("/contact", createContact);
router.get("/contact", getContacts);
router.delete("/contact/:id",deleteContacts)

module.exports = router;
