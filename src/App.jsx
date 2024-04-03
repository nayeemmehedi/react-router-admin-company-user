// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./routes/PrivateRoute";
// import PublicRoute from "./routes/PublicRoute";
// import Layout from "./components/layouts/MainLayout";
// import { AuthProvider } from "./contexts/AuthContext";
// import HomePage from "./components/pages/HomePage.jsx";
// import LoginPage from "./components/pages/LoginPage.jsx";
// import DashboardPage from "./components/pages/DashboardPage.jsx";
// import NotFoundPage from "./components/pages/NotFoundPage.jsx";
// import AdminPage from "./components/pages/AdminPage.jsx";
// import ComapanyDash from "./components/pages/ComapanyDash.jsx";

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route element={<Layout />}>
//             <Route path="/" element={<PublicRoute />}>
//               <Route index element={<HomePage />} />
//             </Route>
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="*" element={<NotFoundPage />} />
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute allowedRoles={["company"]}>
//                   <DashboardPage />
//                   <Route path="company" element={<ComapanyDash />} />

//                 </PrivateRoute>
//               }
//             />
            
//             <Route
//               path="/admin"
//               element={
//                 <PrivateRoute allowedRoles={["admin"]}>
//                   <AdminPage />
//                 </PrivateRoute>
//               }
//             />
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Layout from "./components/layouts/MainLayout";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./components/pages/HomePage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import DashboardPage from "./components/pages/DashboardPage.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import AdminPage from "./components/pages/AdminPage.jsx";
import ComapanyDash from "./components/pages/ComapanyDash.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute allowedRoles={["company"]}>
                  <DashboardPage />
                </PrivateRoute>
              }
            >
              <Route path="company" element={<ComapanyDash />} />
            </Route>
            <Route
              path="/admin"
              element={
                <PrivateRoute allowedRoles={["admin"]}>
                  <AdminPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
