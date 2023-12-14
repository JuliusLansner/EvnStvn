import { useParams } from "react-router-dom";
import { useState } from "react";
import eventFacade from "/src/util/eventFacade.jsx";
import "/Users/mikkel/Documents/GitHub/EvnStvn/EvnStvn/src/App.css";

const EventDetails = () => {
  const { id } = useParams();
  const event = eventFacade.findEvent(id);

  const [selectedReceiver, setSelectedReceiver] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("unpaid");

  const handleReceiverChange = (e) => {
    setSelectedReceiver(e.target.value);
  };

  const handlePaymentClick = () => {
    setPaymentStatus("paid");
  };

  if (!event) {
    return <p>Begivenhed ikke fundet</p>;
  }

  return (
    <div>
      <h2>{event.name}</h2>
      <table className="EventDetails-table">
        <thead>
          <tr>
            <th>Afsender</th>
            <th>Modtager</th>
            <th>Beløb</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{event.payment.user}</td>
            <td>
              <select value={selectedReceiver} onChange={handleReceiverChange}>
                <option value="">Vælg modtager</option>
                <option value="Julius">Julius ➔ 100 kr.</option>
                <option value="Malde">Malde ➔ 100 kr.</option>
                <option value="Mikkel">Mikkel ➔ 100 kr.</option>
              </select>
            </td>
            <td>Her skal beløb vises, og ændres baseret på modtager</td>
            <td className={paymentStatus === "unpaid" ? "unpaid" : "paid"}>
              {paymentStatus === "unpaid" ? "Ikke betalt" : "Betalt"}
            </td>
            <td>
              <button onClick={() => handlePaymentClick()}>Betal</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Vist betaler under afsender */}

      {/* Lavet en dropdown menu, der kan scrolle igennem
       alle der skyldes penge fra given bruger */}

      {/* Lave en status funktionalitet der er baseret på modtager */}

      {/* Tilføj andre begivenhedsoplysninger her */}
    </div>
  );
};

export default EventDetails;
