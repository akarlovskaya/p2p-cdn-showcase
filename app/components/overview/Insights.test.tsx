import React from "react";
import { render, screen } from "@testing-library/react";
import Insights from "./Insights";

describe("Insights Component displays all insights based on a role", () => {
  // Test 1: Renders correctly Insights for client role
  it("renders all insights correctly for client role", () => {
    render(
      <Insights
        userRole="client"
        bandwidth={4.7}
        requests={2550000}
        cacheHitRate={76}
        currentMonth="April"
      />
    );

    // Monthly Traffic Usage
    expect(screen.getByText("Monthly Traffic Usage")).toBeInTheDocument();
    expect(screen.getByText("Bandwidth Used: 4.7 TB")).toBeInTheDocument();

    // Requests Served
    expect(screen.getByText("Requests Served")).toBeInTheDocument();
    expect(screen.getByText("2550000 requests per week")).toBeInTheDocument();

    // Cache Hit Rate
    expect(screen.getByText("Cache Hit Rate")).toBeInTheDocument();
    expect(screen.getByText("76% cache hits")).toBeInTheDocument();

    // TODO - text percentages for trending up icon
  });

  // Test 2: Renders correctly Insights for provider role
  it("renders all insights correctly for provider role", () => {
    render(
      <Insights
        userRole="provider"
        storageUsed={1200}
        earningsFromStorage={15000}
        earningsFromBandwidth={5000}
        currentMonth="April"
      />
    );

    // Storage Used
    expect(screen.getByText("Storage Used")).toBeInTheDocument();
    expect(screen.getByText("Total: 1200 GB")).toBeInTheDocument();

    // Earnings from Storage
    expect(screen.getByText("Earnings From Storage")).toBeInTheDocument();
    expect(screen.getByText("$15000")).toBeInTheDocument();

    // Earnings from Bandwidth
    expect(screen.getByText("Earnings From Bandwidth")).toBeInTheDocument();
    expect(screen.getByText("$5000")).toBeInTheDocument();
  });

  // TODO - text percentages for trending up icon
});

describe("Insights Component handles properly edge cases for props", () => {
  // Test 3: Handles zero values for client role
  it("handles zero values correctly for client role", () => {
    render(
      <Insights
        userRole="client"
        bandwidth={0}
        requests={0}
        cacheHitRate={0}
        currentMonth="April"
      />
    );

    expect(screen.getByText("Bandwidth Used: 0 TB")).toBeInTheDocument();
    expect(screen.getByText("0 requests per week")).toBeInTheDocument();
    expect(screen.getByText("0% cache hits")).toBeInTheDocument();
  });

  // Test 4: Handles zero values for provider role
  it("handles zero values correctly for provider role", () => {
    render(
      <Insights
        userRole="provider"
        storageUsed={0}
        earningsFromStorage={0}
        earningsFromBandwidth={0}
        currentMonth="April"
      />
    );

    expect(screen.getByText("Total: 0 GB")).toBeInTheDocument();
    const zeroElements = screen.getAllByText("$0");
    expect(zeroElements.length).toBe(2); // Two $0 elements for storage and bandwidth earnings
  });

  // Test 5: Handles undefined values for client role
  it("handles undefined values correctly for client role", () => {
    render(
      <Insights
        userRole="client"
        bandwidth={undefined}
        requests={undefined}
        cacheHitRate={undefined}
        currentMonth="April"
      />
    );

    expect(
      screen.getByText("Bandwidth Used: No data available")
    ).toBeInTheDocument();
    const zeroElements = screen.getAllByText("No data available");
    expect(zeroElements.length).toBe(2);
  });

  // Test 6: Handles undefined values for provider role
  it("handles undefined values correctly for provider role", () => {
    render(
      <Insights
        userRole="provider"
        storageUsed={undefined}
        earningsFromStorage={undefined}
        earningsFromBandwidth={undefined}
        currentMonth="April"
      />
    );

    expect(screen.getByText("Total: No data available")).toBeInTheDocument();
    const zeroElements = screen.getAllByText("No data available");
    expect(zeroElements.length).toBe(2);
  });
});
