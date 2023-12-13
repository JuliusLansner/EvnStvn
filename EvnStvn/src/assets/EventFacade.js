function EventFacade() {
  let events = [{ id: 1, name: "Party", payments: [], users: [] }];

  let nextId = 2;

  const addEvent = (event) => {
    event.id = nextId;
    events.push(event);
    nextId++;
  };

  const addUser = (user, id) => {
    const event = events.find((event) => event.id === id);

    if (event) {
      event.users.push(user);
    } else {
      console.error("Event not found");
    }
  };

  const addPayment = (payment, id) => {
    const event = events.find((event) => event.id === id);

    if (event) {
      event.payments.push(payment);
    } else {
      console.error("Event not found");
    }
  };

  const getAllEvents = () => {
    return events;
  };

  const getEvent = (id) => {
    return events.find((event) => event.id === id);
  };

  const deleteEvent = (id) => {
    events.filter((event) => event.id != id);
  };

  return(
    addEvent, 
    getAllEvents, 
    getEvent, 
    deleteEvent, 
    addUser, 
    addPayment
  ) 
}
let EventFacadeFunctions = EventFacade;
export default EventFacadeFunctions;
