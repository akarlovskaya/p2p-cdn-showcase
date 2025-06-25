import React from "react";
import Image from "next/image";
import { formattedMoney } from "../../lib/utilities";
//import InsightsProps from "../../types/dataClient";

type CommonInsightsProps = {
  currentMonth: string;
};

type ClientInsightsProps = CommonInsightsProps & {
  userRole: "client";
  bandwidth: number;
  requests: number;
  cacheHitRate: number;
};

type ProviderInsightsProps = CommonInsightsProps & {
  userRole: "provider";
  storageUsed: number;
  earningsFromStorage: number;
  earningsFromBandwidth: number;
};

export type InsightsProps = ClientInsightsProps | ProviderInsightsProps;

export default function Insights(props: InsightsProps) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        {props.currentMonth ? `${props.currentMonth} Insights` : "Insights"}
      </h2>
      <div className="flex flex-row items-center p-4">
        <div className="flex-none mr-2">
          <Image
            src="/images/Monthly Traffic Usage.png"
            alt="Globe Icon"
            width={50}
            height={50}
            quality={80}
          />
        </div>
        <div className="grow">
          {props.userRole === "client" ? (
            <>
              {" "}
              <h3 className="text-lg font-bold ">Monthly Traffic Usage</h3>
              <p className="font-medium">
                {props.bandwidth !== undefined
                  ? `Bandwidth Used: ${props.bandwidth} TB`
                  : "Bandwidth Used: No data available"}
              </p>
            </>
          ) : (
            <>
              {" "}
              <h3 className="text-lg font-bold ">Storage Used</h3>
              <p className="font-medium">
                {props.storageUsed !== undefined
                  ? `Total: ${props.storageUsed} GB`
                  : "Total: No data available"}
              </p>
            </>
          )}
        </div>
        <div className="flex-none">
          <Image
            src="/images/45UP.png"
            alt="Trending Up Icon with percentage"
            width={50}
            height={50}
            quality={80}
          />
        </div>
      </div>
      <div className="flex flex-row items-center p-4">
        <div className="flex-none mr-2">
          <Image
            src="/images/Requests Served.png"
            alt="Requests Served Icon"
            width={50}
            height={50}
            quality={80}
          />
        </div>
        <div className="grow">
          {props.userRole === "client" ? (
            <>
              {" "}
              <h3 className="text-lg font-bold ">Requests Served</h3>
              <p className="font-medium">
                {props.requests !== undefined
                  ? `${new Intl.NumberFormat("fr-CA").format(
                      props.requests
                    )} requests per week`
                  : "No data available"}
              </p>
            </>
          ) : (
            <>
              {" "}
              <h3 className="text-lg font-bold ">Earnings From Storage</h3>
              <p className="font-medium">
                {props.earningsFromStorage !== undefined
                  ? formattedMoney(props.earningsFromStorage)
                  : "No data available"}
              </p>
            </>
          )}
        </div>
        <div className="flex-none">
          <Image
            src="/images/30DOWN.png"
            alt="Trending Down Icon with percentage"
            width={50}
            height={50}
            quality={80}
          />
        </div>
      </div>

      <div className="flex flex-row items-center p-4">
        <div className="flex-none mr-2">
          <Image
            src="/images/Cache Hit Rate.png"
            alt="Cache Hit Rate Icon"
            width={50}
            height={50}
            quality={80}
          />
        </div>
        <div className="grow">
          {props.userRole === "client" ? (
            <>
              {" "}
              <h3 className="text-lg font-bold ">Cache Hit Rate</h3>
              <p className="font-medium">
                {props.cacheHitRate !== undefined
                  ? `${props.cacheHitRate}% cache hits`
                  : "No data available"}
              </p>
            </>
          ) : (
            <>
              {" "}
              <h3 className="text-lg font-bold ">Earnings From Bandwidth</h3>
              <p className="font-medium">
                {props.earningsFromBandwidth !== undefined
                  ? formattedMoney(props.earningsFromBandwidth)
                  : "No data available"}
              </p>
            </>
          )}
        </div>
        <div className="flex-none">
          <Image
            src="/images/15UP.png"
            alt="Trending UP Icon with percentage"
            width={50}
            height={50}
            quality={80}
          />
        </div>
      </div>
    </>
  );
}
