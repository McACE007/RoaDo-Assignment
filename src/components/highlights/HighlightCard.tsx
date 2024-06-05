import { HighlightItem } from "../../types/types"

type Props = HighlightItem;

export default function HighlightCard({ type, amount, paymentCount }: Props) {
  if (type === "Income") {
    return <div className="border border-[#CBCBCB] rounded-sm w-[155px] h-[83px] p-2">
      <div className="font-medium text-xs text-[#676666]">Income</div>
      <div className="mt-1 font-medium text-[1rem] text-[#148714]">{amount} CAD</div>
      <div className="font-normal text-xs text-[#676666]">{paymentCount} payments received</div>
    </div>
  } else if (type === "Expenses") {
    return <div className="border border-[#CBCBCB] rounded-sm w-[155px] h-[83px] p-2">
      <div className="font-medium text-xs text-[#676666]">Expenses</div>
      <div className="mt-1 font-medium text-[1rem] text-[#D04141]">{amount} CAD</div>
      <div className="font-normal text-xs text-[#676666]">{paymentCount} payments paid</div>
    </div>
  }
}
