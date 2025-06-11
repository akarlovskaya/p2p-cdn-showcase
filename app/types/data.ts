interface Spending {
  actualSpend: number;
  savedAmount: number;
  traditionalCost: number;
  savedPercentage: number;
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

// Main data interface
export default interface MonthlyData {
  month: string;
  currentBalance: number;
  spending: Spending;
  content: Content;
  performance: Performance;
  storage: Storage;
}
