import { Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import JobsPage from "./pages/JobsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import WorkOrder from "./pages/WorkOrder/WorkOrder";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />

        <Route path="/work-order" element={<WorkOrder />} />
      </Routes>
    </PageLayout>
  );
}

export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import WorkOrder from "./pages/WorkOrder/WorkOrder"
// import Project from "./pages/Project/Project"
// import Home from "./pages/Home"
// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/work-order" element={<WorkOrder />} />
//         <Route path="/project" element={<Project />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App
