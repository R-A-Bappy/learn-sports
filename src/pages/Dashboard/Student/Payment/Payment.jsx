import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const location = useLocation();
    const amount = location.state.price;
    const classData = location.state.classData;
    const price = parseFloat(amount.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-8 mb-16">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} classData={classData} />
            </Elements>
        </div>
    );
};

export default Payment;