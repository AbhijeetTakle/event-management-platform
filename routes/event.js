const router = require("express").Router();
const {
  addEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  getEvents,
} = require("../controllers/event");
router.route("/event/:id").get(getEvent).patch(updateEvent).delete(deleteEvent);
router.route("/addevent").post(addEvent);
router.route("/events").get(getEvents);

module.exports = router;
