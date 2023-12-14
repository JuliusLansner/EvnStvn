import "/Users/mikkel/Documents/GitHub/EvnStvn/EvnStvn/src/App.css";
import { useState, useEffect } from "react";
import eventFacade from "/src/util/eventFacade.jsx";
import { Link } from "react-router-dom";

const Events = () => {
  const [showMyEvents, setShowMyEvents] = useState([]);

  useEffect(() => {
    setShowMyEvents(eventFacade.getEvents());
  }, []);

  const handleRowClick = (eventId) => {
    console.log("Clicked event with id: " + eventId);
  };

  return (
    <div>
      <h1>Events</h1>

      {showMyEvents ? (
        <div className="myEvents-table">
          <table>
            <tbody>
              {showMyEvents.map((event) => (
                <tr
                  key={event.id}
                  className="event-row"
                  onClick={() => handleRowClick(event.id)}
                >
                  <td>
                    <Link to={`/events/event/${event.id}`}>{event.name}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Her kan du oprette et nyt event</p>
      )}
    </div>
  );
};

export default Events;
