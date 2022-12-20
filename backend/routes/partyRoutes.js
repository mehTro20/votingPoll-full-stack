const express = require("express");
const router = express.Router();
const {
  getParties,
  setParty,
  putParty,
  deleteParty,
} = require("../controllers/partyControllers");

// router.get("/", getParties);
// router.post("/", setParty);
router.route("/").get(getParties).post(setParty);

// router.put("/:id", putParty);
// router.delete("/:id", deleteParty);
router.route("/:id").put(putParty).delete(deleteParty);

module.exports = router;