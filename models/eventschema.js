const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    id: { type: String }, // Unique identifier for the event
    eventName: { type: String }, // Name of the event
    eventDate: { type: Date }, // Date of the event
    organizer: { type: String }, // Organizer's name
    email: { type: String }, // Email of the organizer
    phone: { type: String }, // Phone number of the organizer
    location: {
      street: { type: String }, // Venue street address
      city: { type: String }, // Venue city
      state: { type: String }, // Venue state
      zip: { type: String }, // Venue zip code
    },
  },
  {
    timestamps: true,
  }
);

const eventModel = mongoose.model("event", eventSchema);

module.exports = { eventModel, eventSchema };
