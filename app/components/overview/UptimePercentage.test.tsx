import React from "react";
import { render, screen } from "@testing-library/react";
import UptimePercentage from "./UptimePercentage";
import "@testing-library/jest-dom";
import DoughnutChart from "../ui/DoughnutChart";

describe("UptimePercentage Component", () => {
  const mockUptime = 99.5;

  it("renders correctly for client role", () => {
    render(<UptimePercentage userRole="client" uptime={mockUptime} />);

    expect(screen.getByText("Uptime Percentage")).toBeInTheDocument();
    expect(screen.getByText(`${mockUptime}% uptime`)).toBeInTheDocument();
    expect(screen.getByAltText("24/7 Hours Icon")).toBeInTheDocument();
  });

  it("renders correctly for provider role", () => {
    render(<UptimePercentage userRole="provider" uptime={mockUptime} />);

    expect(screen.getByText("Peak Hours Online")).toBeInTheDocument();
    expect(screen.getByText(`${mockUptime}% uptime`)).toBeInTheDocument();
    expect(screen.getByAltText("24/7 Hours Icon")).toBeInTheDocument();
  });

  it("does not render DoughnutChart when uptime is undefined", () => {
    render(<UptimePercentage userRole="client" uptime={undefined} />);
    expect(screen.queryByTestId("doughnut-chart")).not.toBeInTheDocument();
  });

  it("renders DoughnutChart when data is provided", () => {
    render(<DoughnutChart percentage={50} />);
    expect(screen.getByTestId("doughnut-chart")).toBeInTheDocument();
  });
});
