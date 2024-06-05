import { PriorityAlertItem } from "../../types/types"
import TempIcon from "../icons/highPriorityAlerts/TempIcon";
import UserWithBG from "../icons/highPriorityAlerts/UserWithBG"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

type Props = PriorityAlertItem;

export default function PriorityAlertCard({ title, loadNo, billTo, date, description, type }: Props) {
  return (
    <Card className="w-[385px] h-[150px] bg-[#FFFFFF] rounded-2xl mt-2">
      <CardHeader className="px-2 py-3">
        <div className="flex gap-2 items-start justify-center">
          {type === "Complain" ? <UserWithBG /> : <TempIcon />}
          <div>
            <CardTitle className="font-medium text-sm text-[#111111]">{title}</CardTitle>
            <CardDescription className="font-normal text-[10px]">{`Load No : ${loadNo}, Bill To : ${billTo}`}</CardDescription>
          </div>
          <div className="ml-auto font-normal text-xs text-nowrap mr-1">{date}</div>
        </div>
      </CardHeader>
      <CardContent className="text-xs font-normal text-[#111111] px-3 py-0">{description}</CardContent>
      <CardFooter className="my-2 flex justify-end gap-6">
        <Button variant={"link"} className="font-normal text-sm text-[#1A3875]">Ignore</Button>
        <Button className="bg-[#1A3875] hover:bg-[#1A3875]/80">Resolve</Button>
      </CardFooter>
    </Card>
  )
}
