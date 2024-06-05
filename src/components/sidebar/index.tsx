import Logo from "../icons/Logo"
import { sidebarOptions } from "../../lib/constants"

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-[65px] h-full p-4 flex flex-col gap-y-7 shadow">
      <Logo />
      <div className="flex flex-col justify-center items-center gap-y-7">
        {sidebarOptions.map(sidebarOption => (
          <a key={sidebarOption.name} href={sidebarOption.link}>
            <sidebarOption.iconPath />
          </a>
        ))}
      </div>
    </aside>
  )
}
