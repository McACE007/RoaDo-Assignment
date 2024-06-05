import { useSelector } from "react-redux";
import { RootState } from "../../types/types"
import { Button } from "../ui/button";
import CompletedActivityRow from "./CompletedActivityRow";

export default function CompletedActivityTable() {
  const completedActivities = useSelector((state: RootState) => state.dashboard.completedActivities);
  const displayedActivities = completedActivities.slice(0, 4)

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="font-medium text-sm">Completed Activities ({completedActivities.length})</div>
        <Button variant={"link"} className="font-normal text-sm text-[#111111]">View All</Button>
      </div>

      <div className="border border-[#CBCBCB] w-[330px] h-fit rounded-lg flex flex-col divide-y">
        {displayedActivities.map(item => (
          <CompletedActivityRow Assignee={item.Assignee} loadNo={item.loadNo} taskDescription={item.taskDescription} />
        ))}
      </div>
    </div>
  )
}
