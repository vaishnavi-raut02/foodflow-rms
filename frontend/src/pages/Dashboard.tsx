import AnalyticsCard from "../components/dashboard/AnalyticsCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>

      {/* TITLE */}
      <div className="mb-8">

        <h1 className="text-2xl font-bold text-gray-800">
          Analytics Overview
        </h1>

        <p className="text-gray-400 mt-1">
          Real-time restaurant performance metrics
        </p>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

        <AnalyticsCard
          title="Revenue"
          value="$42,850"
          growth="+12.5%"
        />

        <AnalyticsCard
          title="Avg Check Size"
          value="$64.20"
          growth="+2.3%"
        />

        <AnalyticsCard
          title="Table Turnover"
          value="1.4h"
          growth="-4.1%"
        />

        <AnalyticsCard
          title="Satisfaction"
          value="4.9/5"
          growth="+0.8%"
        />

      </div>

      {/* CHART SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* CHART */}
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        {/* BEST SELLERS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Best Sellers
          </h2>

          <div className="space-y-6">

            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Truffle Ribeye</span>
                <span className="font-semibold">142 orders</span>
              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-[#0f8b5f] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Atlantic Salmon</span>
                <span className="font-semibold">118 orders</span>
              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-[#0f8b5f] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Gnocchi Al Tartufo</span>
                <span className="font-semibold">95 orders</span>
              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[55%] bg-[#0f8b5f] rounded-full" />
              </div>
            </div>

            <button className="w-full border border-gray-200 rounded-2xl py-4 mt-8 font-medium hover:bg-gray-50 transition">
              View All Menu Data
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;
