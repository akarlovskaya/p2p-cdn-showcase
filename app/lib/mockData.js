export const mockDataClient = {
  overview: {
    currentBalance: 45.0,
    estimatedTraditionalCost: 450.0,
    savings: 405.0,
    savingsPercentage: 90,
    bandwidthUsed: 1200, // in GB
    costPerGB: 0.03,
    costPerRequest: 0.001,
  },
  performance: {
    uptime: 99.98,
    avgResponseTime: 142,
    cacheHitRate: 87,
    errorRate: 0.01,
    totalRequests: 120000,
    failedRequests: 12,
    responseTimeChart: [
      { date: "2023-05-01", value: 135 },
      { date: "2023-05-02", value: 142 },
      // ... more data points
    ],
  },
  content: {
    domains: [
      {
        name: "example.com",
        bandwidth: 800,
        requests: 85000,
        cacheHitRate: 85,
      },
      {
        name: "assets.example.com",
        bandwidth: 400,
        requests: 35000,
        cacheHitRate: 89,
      },
    ],
  },
  billing: {
    invoices: [
      { id: "INV-2023-05", amount: 45.0, date: "2023-05-01", status: "paid" },
      { id: "INV-2023-04", amount: 38.5, date: "2023-04-01", status: "paid" },
    ],
    usageHistory: [
      { month: "2023-03", bandwidth: 800, requests: 90000 },
      { month: "2023-04", bandwidth: 950, requests: 105000 },
      { month: "2023-05", bandwidth: 1200, requests: 120000 },
    ],
  },
  support: {
    quickLinks: [
      { title: "Connect Your Domain", url: "/docs/connect-domain" },
      { title: "Cache Configuration Guide", url: "/docs/cache-config" },
    ],
    contact: {
      email: "support@p2pcdn.com",
      responseTime: "2 hours",
    },
  },
};

export const mockDataProvider = {
  providerStat: {
    currentBalance: 111.0,
  },
};
