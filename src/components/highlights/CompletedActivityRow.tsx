import { CompletedActivityItem } from "../../types/types"

type Props = CompletedActivityItem;

export default function CompletedActivityRow({ Assignee, taskDescription, loadNo }: Props) {
  return (
    <div className="p-3 flex flex-wrap gap-x-1">
      <div className="font-normal text-xs text-[#1A3875]">{Assignee}</div>
      <div className="font-normal text-xs text-[#676666]">{taskDescription}</div>
      <div className="font-normal text-xs text-[#000000]">{loadNo}</div>
    </div>
  )
}
