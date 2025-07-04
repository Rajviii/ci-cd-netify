import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WorkOrder from "./pages/WorkOrder/WorkOrder"
import Project from "./pages/Project/Project"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/work-order" element={<WorkOrder />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App
