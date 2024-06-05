import { useSelector } from "react-redux";
import StatsCard from "./StatsCard";
import { RootState } from "../../types/types";

export default function Stats() {
  const stats = useSelector((state: RootState) => state.dashboard.stats)
  return (
    <div className="flex gap-4 flex-wrap">
      {stats.map(item => (
        <StatsCard title={item.title} data={item.data} />
      ))}
    </div>
  )
}
