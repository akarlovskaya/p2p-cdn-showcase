// main dashboard content

//import { StatsCard } from "../components/stats-card";
import { FiGlobe, FiDownload, FiClock, FiUsers } from "react-icons/fi";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        StatsCard
        {/* <StatsCard
          title="Total Nodes"
          value="1,234"
          change="+12%"
          isPositive={true}
          icon={<FiGlobe />}
        /> */}
        {/* Other cards... */}
      </div>
      {/* Other sections... */}
    </div>
  );
}
