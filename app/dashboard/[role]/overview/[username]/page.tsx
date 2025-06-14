"use client";
import { useAuth } from "../../../../lib/contexts/auth-context";
import Image from "next/image";
import useClientData from "../../../../lib/api/client";
import useProviderData from "../../../../lib/api/provider";
import { useState } from "react";
import MonthlyData from "../../../../types/data";
import Summary from "../../../../components/overview/Summary";

export default function OverviewDashboard() {
  const { user } = useAuth();
  // const [isLoading, setIsLoading] = useState(true);
  console.log("user", user);
  const userFirstName = user?.username.split("-")[0] || "";
  const capitalizedFirstName = userFirstName
    ? userFirstName[0].toUpperCase() + userFirstName.slice(1)
    : "";
  let fetchData;

  if (user?.role === "client") {
    fetchData = useClientData();
    // setIsLoading(false);
  } else if (user?.role === "provider") {
    fetchData = useProviderData();
    // setIsLoading(false);
  }

  const aprilData = fetchData?.data?.find(
    (item: MonthlyData) => item.month === "April"
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">
        Hello{`, ${capitalizedFirstName}`}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {user ? (
          <>
            {/* First Column */}
            <div className="space-y-4 md:space-y-6">
              {/* Summary - 30% */}
              <div className="h-[30%] min-h-[200px] bg-secondary border-black border-2 rounded-lg p-4 md:p-6 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/wavy-lines.png" // Path from public folder
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                    // className="opacity-20" // Adjust opacity as needed
                  />
                </div>

                {/* Content with relative positioning */}
                <div className="relative z-10">
                  <Summary
                    userRole={user?.role}
                    total={aprilData?.currentBalance}
                    currentMonth={aprilData?.month}
                  />
                </div>
              </div>

              {/* Monthly Spendings - 60% */}
              <div className="h-[60%] min-h-[400px] bg-white rounded-lg shadow p-4 md:p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Monthly Spendings
                </h2>
                {/* Monthly Spendings content goes here */}
              </div>

              {/* Uptime Percentage - 20% */}
              <div className="h-[20%] min-h-[150px] bg-white rounded-lg shadow p-4 md:p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Uptime Percentage
                </h2>
                {/* Uptime Percentage content goes here */}
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4 md:space-y-6">
              {/* Insights of the month - 50% */}
              <div className="h-[50%] min-h-[300px] bg-white rounded-lg shadow p-4 md:p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Insights of the Month
                </h2>
                {/* Insights content goes here */}
              </div>

              {/* Bandwidth Used per Domain - 50% */}
              <div className="h-[50%] min-h-[300px] bg-white rounded-lg shadow p-4 md:p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Bandwidth Used per Domain
                </h2>
                {/* Bandwidth content goes here */}
              </div>
            </div>
          </>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
}
