import { configureStore } from "@reduxjs/toolkit"
import dashboardReducer from "./pages/dashboardSlice"


export default configureStore({
  reducer: {
    dashboard: dashboardReducer
  }
})
