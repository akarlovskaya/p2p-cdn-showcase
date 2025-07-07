import React from "react";
import Image from "next/image";
import { formattedMoney } from "../../lib/utilities";
import DoughnutChart from "../ui/DoughnutChart";

function MonthlySpendings(props) {
  // console.log("MonthlySpendings Props:", props.userData);
  const { userData } = props;
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        {props.userRole === "client" ? "Monthly Spendings" : "Monthly Earnings"}
      </h2>
      {props.userRole === "client" ? (
        <div>
          {userData
            ?.slice(-3)
            .reverse()
            .map((item) => (
              <div key={item.month} className="flex flex-row items-center pb-4">
                <div className="flex-none mr-2">
                  <Image
                    src="/images/doc-icon.jpg"
                    alt="Document Icon"
                    width={50}
                    height={50}
                    quality={80}
                  />
                </div>
                <div className="grow">
                  <h3 className="text-lg font-bold ">{item.month}</h3>
                  <p className="text-secondary-dark text-base font-medium">
                    {/* $ {item?.overview?.spending?.actualSpend}.00 */}
                    {formattedMoney(item?.overview?.spending?.actualSpend)}
                  </p>
                </div>
                <div className="flex-none w-28 h-20">
                  {item?.overview?.spending?.savedPercentage !== undefined && (
                    <DoughnutChart
                      percentage={item?.overview?.spending?.savedPercentage}
                    />
                  )}
                </div>
                <div className="flex-none text-center">
                  <p className="font-bold">Saved*</p>
                  <p className="font-bold">
                    {/* Saved* <br></br> */}
                    {formattedMoney(item?.overview?.spending?.savedAmount)}
                  </p>
                </div>
              </div>
            ))}
          <p>*How much you saved compared to traditional CDNs</p>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="grow pr-4">
            {userData
              ?.slice(-3)
              .reverse()
              .map((item) => (
                <div
                  key={item.month}
                  className="flex flex-row items-center p-4"
                >
                  <div className="flex-none mr-2">
                    <Image
                      src="/images/doc-icon.jpg"
                      alt="Document Icon"
                      width={50}
                      height={50}
                      quality={80}
                    />
                  </div>
                  <div className="grow">
                    <h3 className="text-lg font-bold ">{item.month}</h3>
                    <p className="text-secondary-dark text-base font-medium">
                      {formattedMoney(
                        item?.overview?.earningsSummary?.totalEarnings
                      )}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex-none text-center">
            <h3 className="text-lg font-bold pb-2">MoM Change</h3>
            <Image
              src="/images/up7.8.jpg"
              alt="MoM Change Icon"
              width={50}
              height={50}
              quality={80}
              className="mx-auto pb-2"
            />
            <p className="max-w-48">Strong recovery after March dip</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MonthlySpendings;
