import { useSelector } from "react-redux";
import { RootState } from "../../types/types"
import { Button } from "../ui/button";
import ScheduledActivityRow from "./ScheduledActivityRow";

export default function ScheduledActivityTable() {
  const scheduledActivities = useSelector((state: RootState) => state.dashboard.scheduledActivities);
  const displayedActivities = scheduledActivities.slice(0, 4)

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="font-medium text-sm">Scheduled Activities ({scheduledActivities.length})</div>
        <Button variant={"link"} className="font-normal text-sm text-[#111111]">View All</Button>
      </div>

      <div className="border border-[#CBCBCB] w-[330px] h-fit rounded-lg flex flex-col divide-y">
        {displayedActivities.map(item => (
          <ScheduledActivityRow Assignee={item.Assignee} loadNo={item.loadNo} taskDescription={item.taskDescription} />
        ))}
      </div>
    </div>
  )
}
