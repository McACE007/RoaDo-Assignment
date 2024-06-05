import { ReactNode } from "react"
import Sidebar from "../sidebar";
import { Provider } from "react-redux"
import store from "../../store";

type Props = {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <Provider store={store}>
      <Sidebar />
      <div className="ml-[65px] w-[calc(100%-65px)]">
        {children}
      </div>
    </Provider>
  )
}
