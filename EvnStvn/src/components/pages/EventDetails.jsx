import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import eventFacade from "/src/util/eventFacade.jsx";
import "/Users/mikkel/Documents/GitHub/EvnStvn/EvnStvn/src/App.css";

const EventDetails = () => {
  const { id } = useParams();
  const event = eventFacade.findEvent(id);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedReceiver, setSelectedReceiver] = useState(
    // initialize array with empty strings
    Array(event.payment.length).fill("")
  );
  const [paymentStatus, setPaymentStatus] = useState(
    Array(event.payment.length).fill("unpaid")
  );

  useEffect(() => {
    const calculateTotalAmount = () => {
      if (event && event.payment) {
        const total =
          event.payment.length > 0
            ? event.payment.reduce((sum, payment) => sum + payment.amount, 0) // reduce turns an array into a single value
            : 0;
        setTotalAmount(total);
      }
    };

    calculateTotalAmount();
  }, [id, event]);

  const handleReceiverChange = (e, index) => {
    // copy of array
    const updatedReceivers = [...selectedReceiver];
    // update value at index
    updatedReceivers[index] = e.target.value;
    setSelectedReceiver(updatedReceivers);
  };

  const handlePaymentClick = (index) => {
    const updatedStatus = [...paymentStatus];
    updatedStatus[index] = "paid";
    setPaymentStatus(updatedStatus);
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
          {/* iterate each payment, and return a new component for hvert element. */}
          {event.payment.map((payment, index) => (
            // key is used to identify each element in the list
            <tr key={index}>
              <td>{payment.user}</td>
              <td>
                <select
                  // "" is the default value in case of no selection when the page is first rendered
                  value={selectedReceiver[index] || ""}
                  onChange={(e) => handleReceiverChange(e, index)}
                >
                  <option value="">Vælg modtager</option>
                  <option value="Julius">Julius ➔ 100 kr.</option>
                  <option value="Malde">Malde ➔ 100 kr.</option>
                  <option value="Mikkel">Mikkel ➔ 100 kr.</option>
                </select>
              </td>
              <td>
                <p>Her skal beløb stå, baseret på modtager</p>
              </td>
              <td
                className={
                  paymentStatus[index] === "unpaid" ? "unpaid" : "paid"
                }
              >
                {paymentStatus[index] === "unpaid" ? "Afventer" : "Betalt"}
              </td>
              <td>
                <button
                  onClick={() => handlePaymentClick(index)}
                  disabled={paymentStatus[index] === "paid"}
                >
                  {paymentStatus[index] === "unpaid" ? "Betal" : "Betalt"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-amount-bar">
        <p>Total udgift for eventet: {totalAmount} kr.</p>
      </div>
    </div>
  );
};

export default EventDetails;
