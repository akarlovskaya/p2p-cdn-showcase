type CommonInsightsProps = {
  currentMonth: string;
};

type ClientInsightsProps = CommonInsightsProps & {
  userRole: "client";
  bandwidth: number;
  requests: number;
  cacheHitRate: number;
  // Client-specific props
};

type ProviderInsightsProps = CommonInsightsProps & {
  userRole: "provider";
  storageUsed: number;
  earningsFromStorage: number;
  earningsFromBandwidth: number;
  // Provider-specific props
};

export type InsightsProps = ClientInsightsProps | ProviderInsightsProps;
