function isValidEvent(event) {
  if (!event.name || !event.date || !event.category) {
    return { valid: false, message: "Missing required event fields" };
  }

  const eventDate = new Date(event.date);
  const now = new Date();

//   // BUG: Should not allow past dates, but currently allows them
  if (isNaN(eventDate.getTime())) {
    return { valid: false, message: "Invalid date format" };
  }
   
   
  if (eventDate < now) {
    return { valid: false, message: "Event date cannot be in the past" };
  }



  return { valid: true, message: "Event is valid" };
}

module.exports = { isValidEvent };
