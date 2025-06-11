import React from "react";
import { render, screen } from "@testing-library/react";
import Summary from "./Summary";

describe("Summary Component", () => {
  // Test 1: Renders correctly for client role
  it("displays total balance for client role", () => {
    render(<Summary userRole="client" total={1000} currentMonth="April" />);

    expect(screen.getByText("Total Balance in April")).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();
  });

  // Test 2: Renders correctly for provider role
  it("displays total earnings for provider role", () => {
    render(<Summary userRole="provider" total={2000} currentMonth="May" />);

    expect(screen.getByText("Total Earnings in May")).toBeInTheDocument();
    expect(screen.getByText("$2000")).toBeInTheDocument();
  });

  // Test 3: Formats total number correctly
  it("formats the total amount correctly", () => {
    render(<Summary userRole="client" total={1234567.89} currentMonth="May" />);

    expect(screen.getByText("$1234567.89")).toBeInTheDocument();
  });

  // Test 4: Handles zero total
  it("displays zero total correctly", () => {
    render(<Summary userRole="provider" total={0} currentMonth="May" />);

    expect(screen.getByText("$0")).toBeInTheDocument();
  });
});

// Snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(
    <Summary userRole="client" total={1000} currentMonth="May" />
  );
  expect(asFragment()).toMatchSnapshot();
});
