"use client";
import { useAuth } from "../../../../lib/contexts/auth-context";
import Image from "next/image";
import useClientData from "../../../../lib/api/client";
import useProviderData from "../../../../lib/api/provider";
import { useEffect, useState } from "react";

import { ClientData } from "../../../../types/dataClient";
import { ProviderData } from "../../../../types/dataProvider";
import { ClientMonthData } from "../../../../types/dataClient";
import { ProviderMonthData } from "../../../../types/dataProvider";

import Summary from "../../../../components/overview/Summary";
import MonthlySpendings from "../../../../components/overview/MonthlySpendings";
import UptimePercentage from "../../../../components/overview/UptimePercentage";
import Insights from "../../../../components/overview/Insights";
import BandwidthUsed from "../../../../components/overview/BandwidthUsed";
import QuickActionsAlerts from "../../../../components/overview/QuickActionsAlerts";

interface User {
  role: "client" | "provider";
  username: string;
}

export default function OverviewDashboard() {
  const { user } = useAuth() as { user: User | null };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [providerData, setProviderData] = useState<ProviderData | null>(null);
  let aprilData: ClientMonthData | ProviderMonthData | undefined;

  // Call the hooks
  const fetchClientData = user?.role === "client" ? useClientData() : null;
  const fetchProviderData =
    user?.role === "provider" ? useProviderData() : null;

  const userFirstName = user?.username.split("-")[0] || "";
  const capitalizedFirstName = userFirstName
    ? userFirstName[0].toUpperCase() + userFirstName.slice(1)
    : "";

  useEffect(() => {
    if (user?.role === "client") {
      setClientData(fetchClientData?.data || null);
      setIsLoading(false);
    } else if (user?.role === "provider") {
      setProviderData(fetchProviderData.data || null);
      setIsLoading(false);
    }
  }, [user?.role, fetchClientData, fetchProviderData]);

  if (user?.role === "client") {
    aprilData = clientData?.find(
      (item: ClientMonthData) => item.month === "April"
    );
  } else if (user?.role === "provider") {
    aprilData = providerData?.find(
      (item: ProviderMonthData) => item.month === "April"
    );
  }

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">
        Hello{`, ${capitalizedFirstName}`}
      </h1>
      <div className="grid grid-cols-1 gap-y-12 md:gap-y-12 xl:grid-cols-2 gap-4 md:gap-6">
        {user && (
          <>
            {/* First Column */}
            <div className="space-y-4 md:space-y-5">
              {/* Summary - 30% */}
              <div className="h-[30%] min-h-[200px] bg-secondary border-black border-2 rounded-lg p-4 md:p-6 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/wavy-lines.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
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

              {/* Monthly Spendings/Earnings */}
              <div className="h-[50%] min-h-[400px] bg-white border-black border-2 rounded-lg shadow p-4 md:p-6">
                {user?.role === "client" ? (
                  <MonthlySpendings userRole="client" userData={clientData} />
                ) : (
                  <MonthlySpendings
                    userRole="provider"
                    userData={providerData}
                  />
                )}
              </div>

              {/* Uptime Percentage - 20% */}
              <div className="h-[18%] min-h-[100px] bg-white border-black border-2 rounded-lg shadow p-4 md:p-6">
                {user?.role === "client" && aprilData && (
                  <UptimePercentage
                    userRole="client"
                    uptime={(aprilData as ClientMonthData).overview?.uptime}
                  />
                )}

                {user?.role === "provider" && aprilData && (
                  <UptimePercentage
                    userRole="provider"
                    uptime={
                      (aprilData as ProviderMonthData).overview?.pickHoursOnline
                    }
                  />
                )}
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4 md:space-y-5">
              {/* Insights of the month - 50% */}
              <div className="h-[50%] xl:h-[40%] bg-white border-black border-2 rounded-lg shadow p-4 md:p-6">
                {user?.role === "client" && aprilData && (
                  <Insights
                    userRole="client"
                    bandwidth={
                      (aprilData as ClientMonthData).overview?.insights
                        .bandwidthTotal
                    }
                    requests={
                      (aprilData as ClientMonthData).overview?.insights
                        .requestsServed
                    }
                    cacheHitRate={
                      (aprilData as ClientMonthData).overview?.insights
                        .cacheHitRate
                    }
                    currentMonth={(aprilData as ClientMonthData).month}
                  />
                )}

                {user?.role === "provider" && aprilData && (
                  <Insights
                    userRole="provider"
                    storageUsed={
                      (aprilData as ProviderMonthData).overview?.insights
                        .storageUsed
                    }
                    earningsFromStorage={
                      (aprilData as ProviderMonthData).overview?.insights
                        .earningsFromStorage
                    }
                    earningsFromBandwidth={
                      (aprilData as ProviderMonthData).overview?.insights
                        .earningsFromBandwidth
                    }
                    currentMonth={(aprilData as ProviderMonthData).month}
                  />
                )}
              </div>

              {/* Bandwidth Used per Domain and QuickActionsAlerts */}
              <div className="h-[50%] xl:h-[50%] bg-white border-black border-2 rounded-lg shadow p-4 md:p-6">
                {user?.role === "client" ? (
                  <BandwidthUsed userData={clientData} />
                ) : (
                  <QuickActionsAlerts />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
