import { BaseMonth } from "./baseMonth";

interface Spending {
  actualSpend: number;
  savedAmount: number;
  traditionalCost: number;
  savedPercentage: number;
}

interface Insights {
  bandwidthTotal: number;
  bandwidthTrend: {
    monthlyChange: number;
    trendDirection: "up" | "down";
  };
  requestsServed: number;
  requestsTrend: {
    monthlyChange: number;
    trendDirection: "up" | "down";
  };
  cacheHitRate: number;
  cacheHitTrend: {
    monthlyChange: number;
    trendDirection: "up" | "down";
  };
}

interface Domain {
  name: string;
  bandwidth: number;
  requests: number;
  cacheHitRate: number;
}

interface ResponseTime {
  northAmerica: number; // ms
  europe: number;
}

interface ErrorRates {
  totalRequests: number;
  "4xxErrors": number;
  "5xxErrors": number;
  errorRatePercent: number;
}

interface TrafficGrowth {
  requestsK: number; // in thousands
  percentChange: number;
}

interface FileExtension {
  extension: string;
  count: number;
}

interface StorageZone {
  name: string;
  capacityGB: number;
  usedGB: number;
  usagePercent: number;
}

interface ExpiryRule {
  ruleName: string;
  filePattern: string;
  ttlDays: number;
  lastApplied: string;
}

interface Performance {
  responseTime: ResponseTime;
  errorRates: ErrorRates;
  trafficGrowth: TrafficGrowth;
}

interface Storage {
  cachedFiles: {
    total: number;
    topExtensions: FileExtension[];
  };
  storageZones: StorageZone[];
  expiryRules: ExpiryRule[];
}

interface Content {
  domains: Domain[];
}

// Month data interface
export interface ClientMonthData extends BaseMonth {
  overview: { spending: Spending; insights: Insights; uptime: number };
  content: Content;
  performance: Performance;
  storage: Storage;
}

export type ClientData = ClientMonthData[];
