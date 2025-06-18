import React from "react";

type SummaryProps = {
  userRole: string;
  total: number;
  currentMonth: string;
};

function Summary({ userRole, total, currentMonth }: SummaryProps) {
  return (
    <div className="text-center">
      <h2 className="text-2xl text-black font-bold mt-8 mb-2">
        {userRole === "client" ? "Balance" : "Earnings"} in {currentMonth}
      </h2>
      <p className="font-mono text-6xl text-black font-bold mb-4">${total}</p>
    </div>
  );
}

export default Summary;
