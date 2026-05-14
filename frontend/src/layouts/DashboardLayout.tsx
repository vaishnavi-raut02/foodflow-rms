import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-[#f4f6f8] p-5">

      <div className="flex bg-white rounded-[32px] overflow-hidden shadow-xl min-h-[95vh]">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN */}
        <div className="flex-1 flex flex-col">

          {/* NAVBAR */}
          <Navbar />

          {/* CONTENT */}
          <main className="p-6 bg-[#f7f8fa] flex-1 overflow-y-auto">
            {children}
          </main>

        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;
