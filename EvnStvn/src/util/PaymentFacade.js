function PaymentFacade() {
    let payments = [];

    const createPayment = (payment) => {
        payments.push(payment);
    };

    const deletePayment = (id) => {
        payments = payments.filter(payment => payment.id !== id);
    };

    const getAllPayments = () => {
        return payments;
    };

    const getPayment = (id) => {
        return payments.find(payment => payment.id === id);
    };

    return {
        createPayment,
        deletePayment,
        getAllPayments,
        getPayment
    };
}
let paymentFunctions = PaymentFacade
export default paymentFunctions;
