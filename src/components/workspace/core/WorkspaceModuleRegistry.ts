import LandscapeOverview from "@/components/workspace/intelligence/LandscapeOverview";
import OpportunityExplorer from "@/components/workspace/intelligence/OpportunityExplorer";
import SatelliteFeed from "@/components/workspace/intelligence/SatelliteFeed";
import FundingHub from "@/components/workspace/intelligence/FundingHub";
import OrganizationsPanel from "@/components/workspace/intelligence/OrganizationsPanel";
import InsightsFeed from "@/components/workspace/intelligence/InsightsFeed";
import AIAssistant from "@/components/workspace/intelligence/AIAssistant";

export const WorkspaceModuleRegistry = {
  "landscape-overview": LandscapeOverview,
  "landscape-intelligence": OpportunityExplorer,
  "satellite-monitoring": SatelliteFeed,
  funding: FundingHub,
  collaboration: OrganizationsPanel,
  reports: InsightsFeed,
  "ai-assistant": AIAssistant,
};