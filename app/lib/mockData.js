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

export const mockDataProvider = {
  months: [
    {
      month: "January",
      overview: {
        earningsSummary: {
          totalEarnings: 185.5,
          earningsFromStorage: 120.0,
          earningsFromBandwidth: 65.5,
        },
        storageUsed: {
          totalGB: 1420,
          allocatedGB: 2000,
          utilizationPercent: 71,
        },
        peersConnected: 248,
      },
      performance: {
        uploadStats: {
          totalGB: 8420,
          avgDailyGB: 271.6,
        },
        downloadStats: {
          totalGB: 3200,
          avgDailyGB: 103.2,
        },
        reliabilityScore: 98.7,
        bandwidthContribution: {
          totalTB: 11.62,
          percentOfNetwork: 3.2,
        },
      },
      storage: {
        contentBreakdown: [
          {
            type: "Video",
            percent: 58,
            totalGB: 823.6,
          },
          {
            type: "Software",
            percent: 22,
            totalGB: 312.4,
          },
        ],
        mostRequestedFiles: [
          {
            name: "popular-movie.mp4",
            requests: 42800,
            sizeGB: 8.2,
          },
        ],
        autoPurgeSettings: {
          enabled: true,
          thresholdGB: 1800,
          strategy: "LRU",
        },
      },
      activity: {
        earningsHistory: [
          {
            date: "2024-01-15",
            amount: 92.75,
            source: "Storage",
          },
        ],
        payouts: [
          {
            date: "2024-01-31",
            amount: 150.0,
            method: "PayPal",
          },
        ],
        nodeAlerts: [
          {
            date: "2024-01-22",
            message: "High memory usage (92%)",
            severity: "warning",
          },
        ],
      },
      settings: {
        resourceLimits: {
          maxStorageGB: 2000,
          maxDailyBandwidthGB: 500,
        },
        bandwidthThrottling: {
          enabled: false,
          limitMbps: null,
        },
        payoutMethods: ["PayPal", "Bank Transfer"],
      },
    },
    {
      month: "February",
      overview: {
        earningsSummary: {
          totalEarnings: 210.25,
          earningsFromStorage: 135.0,
          earningsFromBandwidth: 75.25,
        },
        storageUsed: {
          totalGB: 1580,
          allocatedGB: 2000,
          utilizationPercent: 79,
        },
        peersConnected: 312,
      },
      performance: {
        uploadStats: {
          totalGB: 9210,
          avgDailyGB: 328.9,
        },
        downloadStats: {
          totalGB: 3800,
          avgDailyGB: 135.7,
        },
        reliabilityScore: 99.1,
        bandwidthContribution: {
          totalTB: 13.01,
          percentOfNetwork: 3.5,
        },
      },
      storage: {
        contentBreakdown: [
          {
            type: "Video",
            percent: 62,
            totalGB: 979.6,
          },
        ],
        mostRequestedFiles: [
          {
            name: "game-patch.exe",
            requests: 51200,
            sizeGB: 4.8,
          },
        ],
        autoPurgeSettings: {
          enabled: true,
          thresholdGB: 1800,
          strategy: "LRU",
        },
      },
      activity: {
        nodeAlerts: [
          {
            date: "2024-02-14",
            message: "Node offline for 2h (maintenance)",
            severity: "info",
          },
        ],
      },
    },
    {
      month: "March",
      overview: {
        peersConnected: 287,
      },
      performance: {
        reliabilityScore: 97.3,
      },
      storage: {
        mostRequestedFiles: [
          {
            name: "live-event-stream.m3u8",
            requests: 68700,
            sizeGB: 12.4,
          },
        ],
      },
    },
    {
      month: "April",
      settings: {
        bandwidthThrottling: {
          enabled: true,
          limitMbps: 100,
        },
      },
    },
  ],
};
