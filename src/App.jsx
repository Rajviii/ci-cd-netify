import PageLayout from "./components/layout/PageLayout";
import JobsPage from "./pages/JobsPage";

function App() {
  return (
    <PageLayout>
      <JobsPage />
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
