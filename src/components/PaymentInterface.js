import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentInterface() {
  const navigate = useNavigate(); // Changed variable name to navigate

  const handlePaymentSuccess = () => {
    // Redirect to success page
    navigate('/success'); // Use navigate function to navigate to the success page
  };

  const handlePaymentFailure = () => {
    // Redirect to failure page
    navigate('/failure'); // Use navigate function to navigate to the failure page
  };

  return (
    <div>
      <h2>Payment Interface</h2>
      {/* Implement Razorpay UPI interface here */}
      <button onClick={handlePaymentSuccess}>Pay Now</button>
      <button onClick={handlePaymentFailure}>Cancel</button>
    </div>
  );
}

export default PaymentInterface;
