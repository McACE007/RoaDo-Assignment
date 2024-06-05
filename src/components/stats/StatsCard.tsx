import { Card } from "../ui/card"
import DonutChart from "./DonutChart";

type Props = {
  title: string;
  data: {
    name: string;
    value: number;
  }[]

}

export default function StatsCard({ title, data }: Props) {
  return (
    <Card className="w-[196px] h-[275px]">
      <div className="flex flex-col px-3 py-2">
        <div>{title}</div>

        <DonutChart data={data} />

        <div className="flex flex-col gap-2 mt-2">
          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#FFCB49] flex items-center justify-between p-2 rounded-sm text-xs font-normal">
            <div>{data[0].name}</div>
            <div>{data[0].value}</div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#7464FF] flex items-center justify-between p-2 rounded-sm text-xs font-normal">
            <div>{data[1].name}</div>
            <div>{data[1].value}</div>
          </div>

          <div className="bg-gradient-to-r from-[#FFFFFF] to-[#4FD2B5] flex items-center justify-between p-2 rounded-sm text-xs font-normal">
            <div>{data[2].name}</div>
            <div>{data[2].value}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}
