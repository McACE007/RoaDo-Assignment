import { useSelector } from "react-redux";
import ChevronRight from "../icons/highPriorityAlerts/ChevronRight";
import { Button } from "../ui/button";
import { RootState } from "../../types/types";
import PriorityAlertCard from "./PriorityAlertCard";

export default function HighPriorityAlerts() {
  const priorityAlerts = useSelector((state: RootState) => state.dashboard.priorityAlerts);
  const displayedAlerts = priorityAlerts.slice(0, 4)

  return (
    < div >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-lg">High Priority alerts ({displayedAlerts.length})</h2>
        <Button variant={"link"} className="font-normal text-sm text-[#1A3875]">View All {"   "} <ChevronRight /></Button>
      </div>
      <div className="flex gap-12 flex-wrap">
        {displayedAlerts.map(item => (
          <PriorityAlertCard title={item.title} description={item.description} type={item.type} loadNo={item.loadNo} billTo={item.billTo} date={item.date} />
        ))}
      </div>
    </div>
  )
}
