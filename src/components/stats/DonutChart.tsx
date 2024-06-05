import { Cell, Label, Pie, PieChart, Tooltip } from "recharts"

type Props = {
  data: {
    name: string;
    value: number;
  }[]
}

const COLORS = ['#FFCB49', '#7464FF', '#4FD2B5'];

export default function DonutChart({ data }: Props) {
  const total = data.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)

  return (
    <div className="flex items-center justify-center">
      <PieChart width={110} height={110}>
        <Tooltip />
        <Pie
          data={data}
          dataKey={"value"}
          innerRadius={40}
          outerRadius={55}
          paddingAngle={2}
        >
          <Label
            value="Total" position="centerBottom" className='label-top' fontSize={12} fontWeight={400} />
          <Label
            value={total} position="centerTop" className='label' fontSize={12} fontWeight={600} fill="#000000" />
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}
