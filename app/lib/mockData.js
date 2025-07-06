import { uptime } from "process";
import { cache } from "react";

export const mockDataClient = {
  months: [
    {
      month: "January",
      currentBalance: 1000.0,
      overview: {
        spending: {
          actualSpend: 300.0,
          savedAmount: 420.0,
          traditionalCost: 720.0,
          savedPercentage: 58.3,
        },
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
            bandwidth: 620,
            requests: 65000,
            cacheHitRate: 85,
          },
          {
            name: "officeapps.biz",
            bandwidth: 320,
            requests: 32000,
            cacheHitRate: 92,
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
      overview: {
        spending: {
          actualSpend: 750.0,
          savedAmount: 155.0,
          traditionalCost: 905.0,
          savedPercentage: 17.1,
        },
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
      overview: {
        spending: {
          actualSpend: 150.0,
          savedAmount: 370.0,
          traditionalCost: 520.0,
          savedPercentage: 71.2,
        },
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
      overview: {
        spending: {
          actualSpend: 200.0,
          savedAmount: 285.0,
          traditionalCost: 485.0,
          savedPercentage: 58.8,
        },
        insights: {
          bandwidthTotal: 4.7,
          bandwidthTrend: {
            monthlyChange: 45, // % vs. March
            trendDirection: "up",
          },
          requestsServed: 2550000,
          requestsTrend: {
            monthlyChange: 30, // % vs. March
            trendDirection: "down",
          },
          cacheHitRate: 76,
          cacheHitTrend: {
            monthlyChange: 15, // % vs. March
            trendDirection: "up",
          },
        },
        uptime: 98.7, // percentage
      },
      content: {
        domains: [
          {
            name: "streaminghub.com",
            bandwidth: 2450,
            requests: 1250000,
            cacheHitRate: 78,
          },
          {
            name: "cloudstorage.net",
            bandwidth: 1820,
            requests: 980000,
            cacheHitRate: 85,
          },
          {
            name: "officeapps.biz",
            bandwidth: 420,
            requests: 320000,
            cacheHitRate: 92,
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
      currentBalance: 185.5,
      overview: {
        earningsSummary: {
          totalEarnings: 185.5,
          momChangePercent: 5.2,
        },
        insights: {
          storageUsed: 1420,
          earningsFromStorage: 120.0,
          earningsFromBandwidth: 65.5,
        },
        storageUsed: {
          totalGB: 1420,
          allocatedGB: 2000,
          utilizationPercent: 71,
        },
        peersConnected: 248,
        pickHoursOnline: 89,
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
          {
            type: "Documents",
            percent: 8,
            totalGB: 113.6,
          },
        ],
        mostRequestedFiles: [
          {
            name: "popular-movie.mp4",
            requests: 42800,
            sizeGB: 8.2,
          },
          {
            name: "office-suite.iso",
            requests: 21500,
            sizeGB: 4.5,
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
          {
            date: "2024-01-25",
            amount: 42.3,
            source: "Bandwidth",
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
      currentBalance: 210.25,
      overview: {
        earningsSummary: {
          totalEarnings: 210.25,
          momChangePercent: 13.4,
        },
        insights: {
          storageUsed: 1580,
          earningsFromStorage: 135.0,
          earningsFromBandwidth: 75.25,
        },
        storageUsed: {
          totalGB: 1580,
          allocatedGB: 2000,
          utilizationPercent: 79,
        },
        peersConnected: 312,
        pickHoursOnline: 91,
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
          {
            type: "Software",
            percent: 20,
            totalGB: 316.0,
          },
          {
            type: "Music",
            percent: 10,
            totalGB: 158.0,
          },
        ],
        mostRequestedFiles: [
          {
            name: "game-patch.exe",
            requests: 51200,
            sizeGB: 4.8,
          },
          {
            name: "music-album.zip",
            requests: 28700,
            sizeGB: 3.2,
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
            date: "2024-02-10",
            amount: 68.5,
            source: "Storage",
          },
          {
            date: "2024-02-20",
            amount: 66.5,
            source: "Bandwidth",
          },
        ],
        payouts: [
          {
            date: "2024-02-29",
            amount: 180.0,
            method: "Bank Transfer",
          },
        ],
        nodeAlerts: [
          {
            date: "2024-02-14",
            message: "Node offline for 2h (maintenance)",
            severity: "info",
          },
          {
            date: "2024-02-21",
            message: "High network latency detected",
            severity: "warning",
          },
        ],
      },
      settings: {
        resourceLimits: {
          maxStorageGB: 2000,
          maxDailyBandwidthGB: 550,
        },
        bandwidthThrottling: {
          enabled: true,
          limitMbps: 100,
        },
        payoutMethods: ["PayPal", "Bank Transfer"],
      },
    },
    {
      month: "March",
      currentBalance: 198.3,
      overview: {
        earningsSummary: {
          totalEarnings: 198.3,
          momChangePercent: -5.7,
        },
        insights: {
          storageUsed: 1350,
          earningsFromStorage: 130.5,
          earningsFromBandwidth: 67.8,
        },
        storageUsed: {
          totalGB: 1350,
          allocatedGB: 2000,
          utilizationPercent: 67.5,
        },
        peersConnected: 231,
        pickHoursOnline: 92,
      },
      performance: {
        uploadStats: {
          totalGB: 7850,
          avgDailyGB: 253.2,
        },
        downloadStats: {
          totalGB: 2950,
          avgDailyGB: 95.2,
        },
        reliabilityScore: 99.1,
        bandwidthContribution: {
          totalTB: 10.8,
          percentOfNetwork: 2.9,
        },
      },
      storage: {
        contentBreakdown: [
          {
            type: "Video",
            percent: 55,
            totalGB: 742.5,
          },
          {
            type: "Software",
            percent: 25,
            totalGB: 337.5,
          },
          {
            type: "Music",
            percent: 12,
            totalGB: 162.0,
          },
          {
            type: "Documents",
            percent: 5,
            totalGB: 67.5,
          },
        ],
        mostRequestedFiles: [
          {
            name: "hit-song-album.mp3",
            requests: 38200,
            sizeGB: 3.8,
          },
          {
            name: "game-patch-v2.0.zip",
            requests: 24500,
            sizeGB: 5.1,
          },
          {
            name: "tech-report.pdf",
            requests: 18200,
            sizeGB: 0.8,
          },
        ],
        autoPurgeSettings: {
          enabled: true,
          thresholdGB: 1700,
          strategy: "LRU",
        },
      },
      activity: {
        earningsHistory: [
          {
            date: "2024-03-10",
            amount: 65.2,
            source: "Bandwidth",
          },
          {
            date: "2024-03-20",
            amount: 88.7,
            source: "Storage",
          },
          {
            date: "2024-03-25",
            amount: 44.4,
            source: "Bandwidth",
          },
        ],
        payouts: [
          {
            date: "2024-03-31",
            amount: 180.0,
            method: "PayPal",
          },
        ],
        nodeAlerts: [
          {
            date: "2024-03-15",
            message: "High CPU usage (85%)",
            severity: "warning",
          },
          {
            date: "2024-03-28",
            message: "Storage optimization completed",
            severity: "info",
          },
        ],
      },
      settings: {
        resourceLimits: {
          maxStorageGB: 2000,
          maxDailyBandwidthGB: 450,
        },
        bandwidthThrottling: {
          enabled: true,
          limitMbps: 80,
        },
        payoutMethods: ["PayPal", "Bank Transfer", "Crypto Wallet"],
      },
    },
    {
      month: "April",
      currentBalance: 212.8,
      overview: {
        earningsSummary: {
          totalEarnings: 210.25,
          momChangePercent: 7.8,
        },
        insights: {
          storageUsed: 1580,
          earningsFromStorage: 145.3,
          earningsFromBandwidth: 67.5,
        },
        pickHoursOnline: 92,
      },
      performance: {
        uploadStats: {
          totalGB: 9120,
          avgDailyGB: 304.0,
        },
        downloadStats: {
          totalGB: 3850,
          avgDailyGB: 128.3,
        },
        reliabilityScore: 97.9,
        bandwidthContribution: {
          totalTB: 12.97,
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
          {
            type: "Software",
            percent: 18,
            totalGB: 284.4,
          },
          {
            type: "Documents",
            percent: 12,
            totalGB: 189.6,
          },
        ],
        mostRequestedFiles: [
          {
            name: "blockbuster-film.mp4",
            requests: 51200,
            sizeGB: 9.5,
          },
          {
            name: "design-software.zip",
            requests: 18700,
            sizeGB: 4.2,
          },
        ],
        autoPurgeSettings: {
          enabled: true,
          thresholdGB: 1900,
          strategy: "FIFO",
        },
      },
      activity: {
        earningsHistory: [
          {
            date: "2024-04-05",
            amount: 78.4,
            source: "Bandwidth",
          },
          {
            date: "2024-04-12",
            amount: 92.1,
            source: "Storage",
          },
        ],
        payouts: [
          {
            date: "2024-04-30",
            amount: 200.0,
            method: "Bank Transfer",
          },
        ],
        nodeAlerts: [
          {
            date: "2024-04-18",
            message: "Storage nearing capacity (87%)",
            severity: "warning",
          },
          {
            date: "2024-04-22",
            message: "Connection lost to 3 peers",
            severity: "critical",
          },
        ],
      },
      settings: {
        resourceLimits: {
          maxStorageGB: 2000,
          maxDailyBandwidthGB: 600,
        },
        bandwidthThrottling: {
          enabled: false,
          limitMbps: 0,
        },
        payoutMethods: ["PayPal", "Bank Transfer", "Crypto Wallet"],
      },
    },
  ],
};
