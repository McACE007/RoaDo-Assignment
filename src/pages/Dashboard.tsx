import Hightlights from "../components/highlights";
import BellIcon from "../components/icons/BellIcon";
import Search from "../components/icons/Search";
import VertMore from "../components/icons/VertMore";
import VerticalSeparator from "../components/icons/VerticalSeparator";
import HighPriorityAlerts from "../components/priorityAlerts";
import QuickActions from "../components/quickActions";
import Stats from "../components/stats";
import { Card } from "../components/ui/card";

export default function Dashboard() {
  return (
    <main className="h-screen w-full bg-[#F7FAFF] p-5 overflow-auto">
      <div className="flex flex-col gap-6 mr-[360px]">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-2xl">Dashboard</h1>
          <Card className="flex items-center justify-center p-2 w-[132px] h-[32px] rounded-2xl bg-[#FFFFFF] gap-3">
            <Search />
            <VerticalSeparator />
            <BellIcon />
            <VerticalSeparator />
            <VertMore />
          </Card>
        </div>
        <Stats />
        <QuickActions />
        <HighPriorityAlerts />
      </div>
      <Hightlights />
    </main>
  )
}
