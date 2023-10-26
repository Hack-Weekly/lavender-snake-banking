import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-[100vh] p-6 bg-darkest flex">
      <div className="max-h-[100vh] w-48 flex flex-col p-4 bg-accent/25 text-accent rounded-xl">
        <div className="text-center">LOGO</div>
        <div className="h-36 flex items-center justify-center border mx-4 mt-12 mb-2">
          Profile Image
        </div>
        <div className="text-center">user</div>
        <nav className="mt-12 flex flex-col items-center flex-auto">
          <ul className="flex flex-col items-start text-lg text-lightest">
            <li>Dashboard</li>
            <li>Analytics</li>
            <li>Payments</li>
            <li>Invoices</li>
            <li>Account</li>
            <li>Settings</li>
          </ul>

          <ul className="text-lg text-lightest mt-auto">
            <li>Help</li>
          </ul>
        </nav>
      </div>
      <div className="ml-10 text-lightest flex-auto">
        <header className="mb-6 font-semibold text-2xl">Dashboard</header>
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
