import React from "react";
import { render, screen } from "@testing-library/react";
import MonthlySpendings from "./MonthlySpendings";
import "@testing-library/jest-dom";
import DoughnutChart from "../ui/DoughnutChart";

describe("MonthlySpendings Component", () => {
  const mockClientData = [
    {
      month: "April",
      overview: {
        spending: {
          actualSpend: 120,
          savedPercentage: 20,
          savedAmount: 30,
        },
      },
    },
    {
      month: "March",
      overview: {
        spending: {
          actualSpend: 100,
          savedPercentage: 15,
          savedAmount: 25,
        },
      },
    },
    {
      month: "February",
      overview: {
        spending: {
          actualSpend: 80,
          savedPercentage: 10,
          savedAmount: 20,
        },
      },
    },
  ];

  const mockProviderData = [
    {
      month: "April",
      overview: {
        earningsSummary: {
          totalEarnings: 210.25,
          momChangePercent: 7.8,
        },
      },
    },
    {
      month: "March",
      overview: {
        earningsSummary: {
          totalEarnings: 198.3,
          momChangePercent: 7.8,
        },
      },
    },
    {
      month: "February",
      overview: {
        earningsSummary: {
          totalEarnings: 190.25,
          momChangePercent: 7, // month-over-month change
        },
      },
    },
  ];

  describe("DoughnutChart", () => {
    it("renders canvas when data is provided", () => {
      render(<DoughnutChart percentage={50} />);
      expect(screen.getByTestId("doughnut-chart")).toBeInTheDocument();
    });
  });

  it("renders Monthly Spendings for client role", () => {
    render(<MonthlySpendings userRole="client" userData={mockClientData} />);

    expect(screen.getByText("Monthly Spendings")).toBeInTheDocument();
    // April
    expect(screen.getByText("April")).toBeInTheDocument();
    expect(screen.getByText("$120.00")).toBeInTheDocument();
    expect(screen.getByText("$30.00")).toBeInTheDocument();

    expect(screen.getByText("March")).toBeInTheDocument();
    expect(screen.getByText("$100.00")).toBeInTheDocument();
    expect(screen.getByText("$25.00")).toBeInTheDocument();

    expect(screen.getByText("February")).toBeInTheDocument();
    expect(screen.getByText("$80.00")).toBeInTheDocument();
    expect(screen.getByText("$20.00")).toBeInTheDocument();
  });

  it("renders Monthly Earnings for provider role", () => {
    render(
      <MonthlySpendings userRole="provider" userData={mockProviderData} />
    );

    expect(screen.getByText("Monthly Earnings")).toBeInTheDocument();
    expect(screen.getByText("April")).toBeInTheDocument();
    expect(screen.getByText("$210.25")).toBeInTheDocument();
    expect(screen.getByText("March")).toBeInTheDocument();
    expect(screen.getByText("$198.30")).toBeInTheDocument();
    expect(screen.getByText("February")).toBeInTheDocument();
    expect(screen.getByText("$190.25")).toBeInTheDocument();
    expect(screen.getByText("MoM Change")).toBeInTheDocument();
  });
});
