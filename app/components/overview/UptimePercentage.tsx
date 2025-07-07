import React from "react";
import DoughnutChart from "../ui/DoughnutChart";
import Image from "next/image";

type UptimePercentageProps = {
  userRole: "client" | "provider";
  uptime: number | undefined;
};

function UptimePercentage(props: UptimePercentageProps) {
  return (
    <>
      <div className="flex flex-row items-center pb-4">
        <div className="flex-none w-28 h-20">
          {props.uptime !== undefined && (
            <DoughnutChart percentage={props.uptime} />
          )}
        </div>
        <div className="grow">
          <h2 className="text-xl font-semibold mb-4">
            {props.userRole === "client"
              ? "Uptime Percentage"
              : "Peak Hours Online"}
          </h2>
          <p className="text-secondary-dark text-base font-medium">
            {props.uptime}% uptime
          </p>
          <p>Last 30 days</p>
        </div>

        <div className="flex-none mr-2">
          <Image
            src="/images/24-7.jpg"
            alt="24/7 Hours Icon"
            width={80}
            height={80}
            quality={80}
          />
        </div>
      </div>
    </>
  );
}

export default UptimePercentage;
