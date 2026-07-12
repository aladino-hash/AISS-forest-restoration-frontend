import { PageLayout } from "@/components/layout/PageLayout";

import LandscapeOverview from "@/components/workspace/intelligence/LandscapeOverview";
import OpportunityExplorer from "@/components/workspace/intelligence/OpportunityExplorer";
import SatelliteFeed from "@/components/workspace/intelligence/SatelliteFeed";
import FundingHub from "@/components/workspace/intelligence/FundingHub";
import OrganizationsPanel from "@/components/workspace/intelligence/OrganizationsPanel";
import InsightsFeed from "@/components/workspace/intelligence/InsightsFeed";
import AIAssistant from "@/components/workspace/intelligence/AIAssistant";

import {
  LandscapeProvider,
} from "@/components/workspace/intelligence/context/LandscapeContext";

export default function RestorationIntelligenceWorkspace() {
  return (
    <PageLayout>
      <LandscapeProvider>
        <div className="mx-auto max-w-7xl py-8">
          <LandscapeOverview />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <OpportunityExplorer />
              <SatelliteFeed />
              <InsightsFeed />
            </div>

            <div className="space-y-6">
              <FundingHub />
              <OrganizationsPanel />
              <AIAssistant />
            </div>
          </div>
        </div>
      </LandscapeProvider>
    </PageLayout>
  );
}