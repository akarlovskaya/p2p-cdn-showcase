import React from "react";

type SummaryProps = {
  total: number;
};

function Summary({ total }: SummaryProps) {
  return <div>{total}</div>;
}

export default Summary;
