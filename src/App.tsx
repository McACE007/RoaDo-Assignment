import AppLayout from "./components/layouts/AppLayout"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <div className="w-screen h-screen">
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </div>
  )
}

export default App
