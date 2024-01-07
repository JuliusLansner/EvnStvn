function NewEvent() {
  return (
    <div>
      <div>
      <h1 className="logo">
          EVEN<strong>STEVEN</strong>
      </h1>
      <p className="logo-text">We split even</p>
      </div>
  
       <div className="event-name-box">
        <label className="event-name-label">Event name:</label>
        <input className="event-name" placeholder=" Insert here" type="text"></input>
        <label className="user-label">Add users</label>
       </div>
    </div>
  );
}

export default NewEvent;
