function eventFacade() {
  let paymentForRedbulls = {
    user: "Olfert",
    amount: 100.5,
    description: "Redbulls",
  };

  let events = [
    { id: 1, name: "Redbulls for dinner", payment: paymentForRedbulls },
    { id: 2, name: "Night at the club", payment: [] },
    { id: 3, name: "Xmas rave", payment: [] },
    { id: 4, name: "Vacation to Finland", payment: [] },
  ];

  let nextId = 5;

  const getEvents = () => {
    return events;
  };

  const findEvent = (id) => {
    return events.find((event) => event.id === id);
  };

  const createEvent = (name, payment) => {
    const newEvent = {
      id: nextId,
      name: name,
      payment: payment,
    };
    nextId++;
    events.push(newEvent);
    return newEvent;
  };

  const deleteEvent = (id) => {
    events = events.filter((event) => event.id !== id);
  };

  const addPayment = (eventId, payment) => {
    const event = findEvent(eventId);
    event.payment.push(payment);
  };

  const removePayment = (eventId, payment) => {
    const event = findEvent(eventId);

    // check event & payment exists
    if (event && event.payment) {
      // find index of payment
      const index = event.payment.indexOf(payment);

      if (index !== -1) {
        // remove index from array. 1 means remove 1 element from array.
        event.payment.splice(index, 1);
      }
    }
  };

  return {
    getEvents,
    findEvent,
    createEvent,
    deleteEvent,
    addPayment,
    removePayment,
  };
}

let returnVal = eventFacade();
export default returnVal;
