function eventFacade() {
  let paymentForRedbulls = {
    user: "Olfert",
    amount: 100.5,
    description: "Redbulls",
  };

  let snacks = {
    user: "Martin",
    amount: 342.5,
    description: "7Elevn taquitos",
  };

  let events = [
    {
      id: 1,
      name: "Redbulls for dinner",
      payment: [paymentForRedbulls, snacks],
    },
    { id: 2, name: "Night at the club", payment: [snacks] },
    { id: 3, name: "Xmas rave", payment: [] },
    { id: 4, name: "Vacation to Finland", payment: [] },
  ];

  let nextId = 5;

  const getEvents = () => {
    return events;
  };

  const findEvent = (id) => {
    return events.find((event) => event.id.toString() === id);
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

  const removePayment = (eventId, paymentId) => {
    const event = events.find((event) => event.id === eventId);

    if (event) {
      event.payments = event.payments.filter(
        (payment) => payment.id !== paymentId
      );
    } else {
      console.error("Event not found");
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
