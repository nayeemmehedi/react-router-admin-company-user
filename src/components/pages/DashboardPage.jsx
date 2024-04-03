import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Other content for the DashboardPage */}
      <Outlet />
    </div>
  );
};

export default DashboardPage;