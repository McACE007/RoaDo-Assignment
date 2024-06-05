import VerticalSeparatorLong from "../icons/VerticalSeparatorLong";
import LabelImportant from "../icons/quickActions/LabelImportant";
import LocalShipping from "../icons/quickActions/LocalShipping";
import RVHookup from "../icons/quickActions/RVHookup";
import User from "../icons/quickActions/User";
import { Card } from "../ui/card";

export default function QuickActions() {
  return (
    < div >
      <h2 className="font-medium text-lg">Quick Actions</h2>
      <Card className="w-[820px] h-[80px] bg-[#FFFFFF] flex gap-10 justify-center items-center rounded-2xl mt-4">
        <button className="hover:bg-muted p-2 rounded-lg">
          <div className="flex flex-col w-fit h-fit items-center justify-center gap-[6px]">
            <LabelImportant />
            <h3 className="font-medium text-xs">Create Indents</h3>
          </div>
        </button>
        <VerticalSeparatorLong />


        <button className="hover:bg-muted p-2 rounded-lg">
          <div className="flex flex-col w-fit h-fit items-center justify-center gap-[6px]">
            <LocalShipping />
            <h3 className="font-medium text-xs">Add Vehicle</h3>
          </div>
        </button>
        <VerticalSeparatorLong />


        <button className="hover:bg-muted p-2 rounded-lg">
          <div className="flex flex-col w-fit h-fit items-center justify-center gap-[6px]">
            <RVHookup />
            <h3 className="font-medium text-xs">Add Trailer</h3>
          </div>
        </button>
        <VerticalSeparatorLong />

        <button className="hover:bg-muted p-2 rounded-lg">
          <div className="flex flex-col w-fit h-fit items-center justify-center gap-[6px]">
            <User />
            <h3 className="font-medium text-xs">Add Driver</h3>
          </div>
        </button>
        <VerticalSeparatorLong />


        <button className="hover:bg-muted p-2 rounded-lg">
          <div className="flex flex-col w-fit h-fit items-center justify-center gap-[6px]">
            <LocalShipping />
            <h3 className="font-medium text-xs">Add Indents</h3>
          </div>
        </button>
      </Card>
    </div>
  )
}
