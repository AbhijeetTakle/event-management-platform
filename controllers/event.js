const { eventModel } = require("../models/eventschema");

const addEvent = async (req, res) => {
  const id = req.body.id;
  const eventName = req.body.eventName;
  const eventDate = req.body.eventDate;
  const organizer = req.body.organizer;
  const email = req.body.email;
  const phone = req.body.phone;
  const location = {
    street: req.body.location.street,
    city: req.body.location.city,
    state: req.body.location.state,
    zip: req.body.location.zip,
  };

  const event = new eventModel({
    id,
    eventName,
    eventDate,
    organizer,
    email,
    phone,
    location,
  });

  await event
    .save()
    .then((doc) => {
      return res.json({
        message: "Event Created",
        record: doc,
      });
    })
    .catch((err) => {
      return res.json({
        message: err,
        record: {},
      });
    });
};

const getEvent = async (req, res) => {
  const id = req.params.id;
  const event = await eventModel.findOne({ id });
  if (event !== null) {
    res.json({
      records: event,
    });
  } else {
    res.json({
      message: "No records found.",
    });
  }
};

const updateEvent = async (req, res) => {
  const id = req.params.id;
  const eventName = req.body.eventName;
  const eventDate = req.body.eventDate;
  const organizer = req.body.organizer;
  const email = req.body.email;
  const phone = req.body.phone;
  const location = req.body.location;
  let obj = req.body;
  console.log(obj);

  const resp = await eventModel.findOneAndUpdate({ id }, obj);

  res.json({
    message: resp,
  });
};

const deleteEvent = async (req, res) => {
  const id = req.params.id;
  const resp = await eventModel.deleteOne({ id });

  res.json({
    message: resp,
  });
};

const getEvents = async (req, res) => {
  const filter = req.query;
  const event = await eventModel.find(filter);
  if (event !== null) {
    res.json({
      records: event,
    });
  } else {
    res.json({
      message: "No records found.",
    });
  }
};

module.exports = { addEvent, getEvent, updateEvent, deleteEvent, getEvents };
