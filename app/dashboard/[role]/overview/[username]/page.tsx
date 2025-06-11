"use client";
import { useAuth } from "../../../../lib/contexts/auth-context";
import useClientData from "../../../../lib/api/client";
import useProviderData from "../../../../lib/api/provider";
import { useState } from "react";
import MonthlyData from "../../../../types/data";
import Summary from "../../../../components/overview/Summary";

export default function OverviewDashboard() {
  const { user } = useAuth();
  let fetchData;
  const someValue: number = 100; // This should be a number

  if (user?.role === "client") {
    fetchData = useClientData();

    // console.log("fetchData?.data.months.currentBalance", fetchData?.data[0]);
  } else if (user?.role === "provider") {
    fetchData = useProviderData();
  }

  const aprilData = fetchData?.data?.find(
    (item: MonthlyData) => item.month === "April"
  );
  const currentBalance = aprilData?.currentBalance; // 1300

  return (
    <div>
      <h1>Overview Dashboard</h1>
      {user ? (
        <>
          <Summary total={currentBalance} />
          <pre>{currentBalance}</pre>
          {/* <pre>{JSON.stringify(fetchData?.data, null, 2)}</pre> */}
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
