export const mockDataClient = {
  months: [
    {
      month: "January",
      currentBalance: 1000.0,
      spending: {
        actualSpend: 300.0,
        savedAmount: 420.0,
        traditionalCost: 720.0,
        savedPercentage: 58.3,
      },
      content: {
        domains: [
          {
            name: "streaminghub.com",
            bandwidth: 800,
            requests: 85000,
            cacheHitRate: 85,
          },
        ],
      },
      performance: {
        responseTime: {
          northAmerica: 42, // ms
          europe: 38,
        },
        errorRates: {
          totalRequests: 85000,
          "4xxErrors": 425,
          "5xxErrors": 85,
          errorRatePercent: 0.6, // (425 + 85) / 85000 * 100
        },
        trafficGrowth: {
          requestsK: 85, // 85k requests
          percentChange: 5.2, // vs. December
        },
      },
      storage: {
        cachedFiles: {
          total: 125000,
          topExtensions: [
            { extension: ".mp4", count: 45000 },
            { extension: ".js", count: 32000 },
            { extension: ".css", count: 18000 },
          ],
        },
        storageZones: [
          {
            name: "NA-East",
            capacityGB: 500,
            usedGB: 320,
            usagePercent: 64,
          },
          {
            name: "EU-Central",
            capacityGB: 400,
            usedGB: 210,
            usagePercent: 52.5,
          },
        ],
        expiryRules: [
          {
            ruleName: "Video-Cache",
            filePattern: "*.mp4",
            ttlDays: 30,
            lastApplied: "2024-01-15",
          },
          {
            ruleName: "JS-CSS",
            filePattern: "*.{js,css}",
            ttlDays: 7,
            lastApplied: "2024-01-10",
          },
        ],
      },
    },
    {
      month: "February",
      currentBalance: 1100.0,
      spending: {
        actualSpend: 750.0,
        savedAmount: 155.0,
        traditionalCost: 905.0,
        savedPercentage: 17.1,
      },
      content: {
        domains: [
          {
            name: "streaminghub.com",
            bandwidth: 820,
            requests: 90000,
            cacheHitRate: 84,
          },
        ],
      },
      performance: {
        responseTime: {
          northAmerica: 45,
          europe: 40,
        },
        errorRates: {
          totalRequests: 90000,
          "4xxErrors": 540,
          "5xxErrors": 90,
          errorRatePercent: 0.7,
        },
        trafficGrowth: {
          requestsK: 90,
          percentChange: 5.9, // vs. January
        },
      },
      storage: {
        cachedFiles: {
          total: 142000,
          topExtensions: [
            { extension: ".mp4", count: 52000 },
            { extension: ".js", count: 35000 },
          ],
        },
        storageZones: [
          {
            name: "NA-East",
            capacityGB: 500,
            usedGB: 380,
            usagePercent: 76,
          },
        ],
        expiryRules: [
          {
            ruleName: "Video-Cache",
            filePattern: "*.mp4",
            ttlDays: 30,
            lastApplied: "2024-02-01",
          },
        ],
      },
    },
    {
      month: "March",
      currentBalance: 2000.0,
      spending: {
        actualSpend: 150.0,
        savedAmount: 370.0,
        traditionalCost: 520.0,
        savedPercentage: 71.2,
      },
      content: {
        domains: [
          {
            name: "cloudstorage.net",
            bandwidth: 450,
            requests: 38000,
            cacheHitRate: 88,
          },
        ],
      },
      performance: {
        responseTime: {
          northAmerica: 38,
          europe: 35,
        },
        errorRates: {
          totalRequests: 38000,
          "4xxErrors": 190,
          "5xxErrors": 38,
          errorRatePercent: 0.6,
        },
        trafficGrowth: {
          requestsK: 38,
          percentChange: -57.8, // vs. February (drop due to domain shift)
        },
      },
      storage: {
        cachedFiles: {
          total: 110000,
          topExtensions: [
            { extension: ".zip", count: 60000 },
            { extension: ".mp4", count: 28000 },
          ],
        },
        storageZones: [
          {
            name: "APAC-South",
            capacityGB: 300,
            usedGB: 240,
            usagePercent: 80,
          },
        ],
        expiryRules: [
          {
            ruleName: "Archive-Files",
            filePattern: "*.zip",
            ttlDays: 3,
            lastApplied: "2024-03-05",
          },
        ],
      },
    },
    {
      month: "April",
      currentBalance: 1300.0,
      spending: {
        actualSpend: 200.0,
        savedAmount: 285.0,
        traditionalCost: 485.0,
        savedPercentage: 58.8,
      },
      content: {
        domains: [
          {
            name: "officeapps.biz",
            bandwidth: 320,
            requests: 28000,
            cacheHitRate: 90,
          },
        ],
      },
      performance: {
        responseTime: {
          northAmerica: 40,
          europe: 36,
        },
        errorRates: {
          totalRequests: 28000,
          "4xxErrors": 140,
          "5xxErrors": 28,
          errorRatePercent: 0.6,
        },
        trafficGrowth: {
          requestsK: 28,
          percentChange: -26.3, // vs. March
        },
      },
      storage: {
        cachedFiles: {
          total: 65000,
          topExtensions: [
            { extension: ".js", count: 40000 },
            { extension: ".png", count: 25000 },
          ],
        },
        storageZones: [
          {
            name: "EU-Central",
            capacityGB: 400,
            usedGB: 180,
            usagePercent: 45,
          },
        ],
        expiryRules: [
          {
            ruleName: "Static-Assets",
            filePattern: "*.{js,png}",
            ttlDays: 14,
            lastApplied: "2024-04-01",
          },
        ],
      },
    },
  ],
};

export const mockDataClientOld = {
  overview: {
    currentBalance: 1300.0,
    monthlySpending: [
      {
        month: "April",
        actualSpend: 200.0,
        savedAmount: 285.0,
        savedPercentage: 58.8, // (285/(200+285))*100
        traditionalEquivalent: 485.0,
      },
      {
        month: "March",
        actualSpend: 150.0,
        savedAmount: 370.0,
        savedPercentage: 71.2,
        traditionalEquivalent: 520.0,
      },
      {
        month: "February",
        actualSpend: 750.0,
        savedAmount: 155.0,
        traditionalCost: 905.0, // 750 + 155
        savedPercentage: 17.1, // (155 / 905) * 100
      },
      {
        month: "January",
        actualSpend: 300.0,
        savedAmount: 155.0,
        traditionalCost: 455.0,
        savedPercentage: 34,
      },
    ],

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
        name: "streaminghub.com",
        bandwidth: 800,
        requests: 85000,
        cacheHitRate: 85,
      },
      {
        name: "cloudstorage.net",
        bandwidth: 400,
        requests: 35000,
        cacheHitRate: 89,
      },
      {
        name: "officeapps.biz",
        bandwidth: 320,
        requests: 28000,
        cacheHitRate: 90,
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
