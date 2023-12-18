import "/Users/mikkel/Documents/GitHub/EvnStvn/EvnStvn/src/App.css";
import { useState, useEffect } from "react";
import eventFacade from "/src/util/eventFacade.jsx";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [showMyEvents, setShowMyEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setShowMyEvents(eventFacade.getEvents());
  }, []);

  const handleRowClick = (eventId) => {
    console.log("Clicked event with id: " + eventId);
    navigate(`/events/event/${eventId}`);
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
                  <td>{event.name}</td>
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
