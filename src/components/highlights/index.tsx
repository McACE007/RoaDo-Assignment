import { useSelector } from "react-redux";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { RootState } from "../../types/types";
import HighlightCard from "./HighlightCard";
import CompletedActivityTable from "./CompletedActivityTable";
import ScheduledActivityTable from "./ScheduledActivityTable";

export default function Hightlights() {
  const highlights = useSelector((state: RootState) => state.dashboard.highlights)

  return (
    <Card className="fixed right-0 top-0 w-[360px] h-full">
      <div className="px-4 pt-4">
        <CardTitle className="font-medium text-lg">Todays Highlights (14)</CardTitle>
        <CardDescription className="font-normal text-xs">19 Mar 2024</CardDescription>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            {highlights.map(item => (
              <HighlightCard type={item.type} paymentCount={item.paymentCount} amount={item.amount} />
            ))}
          </div>
          <CompletedActivityTable />
          <ScheduledActivityTable />
        </div>
      </div>
    </Card >
  )
}
