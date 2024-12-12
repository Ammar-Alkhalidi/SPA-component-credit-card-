import React from "react";
import "./CreditCard.css";

export default function CreditCard({
  bank,
  number,
  security,
  expirationDate,
  cardHolder,
}) {
  return (
    <div className="credit-card">
      <div className="bank-name">{bank}</div>
      <div className="card-number">{formatCardNumber(number)}</div>
      <div className="card-info">
        <div className="valid-thru">
          <span>VALID THRU</span>
          <span>{expirationDate}</span>
        </div>
        <div className="cvv">{security}</div>
      </div>
      <div className="cardholder-name">{cardHolder}</div>
    </div>
  );
}

// Helper function to format the card number
function formatCardNumber(number) {
  return number.replace(/(\d{4})(?=\d)/g, "$1 ");
}
