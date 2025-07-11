import { BaseMonth } from "./baseMonth";

export type SeverityLevel = "info" | "warning" | "critical";

export interface EarningsHistoryItem {
  date: string;
  amount: number;
  source: "Storage" | "Bandwidth";
}

export interface Payout {
  date: string;
  amount: number;
  method: string;
}

export interface NodeAlert {
  date: string;
  message: string;
  severity: SeverityLevel;
}

export interface ActivityData {
  earningsHistory: EarningsHistoryItem[];
  payouts: Payout[];
  nodeAlerts: NodeAlert[];
}

export interface ContentBreakdownItem {
  type: string;
  percent: number;
  totalGB: number;
}

export interface RequestedFile {
  name: string;
  requests: number;
  sizeGB: number;
}

export interface AutoPurgeSettings {
  enabled: boolean;
  thresholdGB: number;
  strategy: "LRU" | "FIFO";
}

export interface StorageData {
  contentBreakdown: ContentBreakdownItem[];
  mostRequestedFiles: RequestedFile[];
  autoPurgeSettings: AutoPurgeSettings;
}

export interface BandwidthStats {
  totalGB: number;
  avgDailyGB: number;
}

export interface BandwidthContribution {
  totalTB: number;
  percentOfNetwork: number;
}

export interface PerformanceData {
  uploadStats: BandwidthStats;
  downloadStats: BandwidthStats;
  reliabilityScore: number;
  bandwidthContribution: BandwidthContribution;
}

export interface EarningsSummary {
  totalEarnings: number;
  momChangePercent: number;
}

export interface StorageUsage {
  totalGB: number;
  allocatedGB: number;
  utilizationPercent: number;
}

export interface InsightsData {
  storageUsed?: number;
  earningsFromStorage?: number;
  earningsFromBandwidth?: number;
}

export interface OverviewData {
  earningsSummary?: EarningsSummary;
  insights: InsightsData;
  storageUsed?: StorageUsage;
  peersConnected?: number;
  pickHoursOnline: number;
}

export interface ResourceLimits {
  maxStorageGB: number;
  maxDailyBandwidthGB: number;
}

export interface BandwidthThrottling {
  enabled: boolean;
  limitMbps: number | null;
}

export interface SettingsData {
  resourceLimits: ResourceLimits;
  bandwidthThrottling: BandwidthThrottling;
  payoutMethods: string[];
}

export interface ProviderMonthData extends BaseMonth {
  overview: OverviewData;
  performance: PerformanceData;
  storage: StorageData;
  activity: ActivityData;
  settings: SettingsData;
}

export type ProviderData = ProviderMonthData[];
