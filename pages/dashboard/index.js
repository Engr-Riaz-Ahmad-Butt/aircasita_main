import Calander from "../../components/Calander";
import { DashboardCard } from "../../components/DashboardCard";
import TabbedTable from "../../components/DashboardTable";
import { GrCompliance, GrInProgress } from "react-icons/gr";

const index = () => {
  return (
    <div className="container mx-auto my-5 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="w-full">
          <DashboardCard status="Completed" numberOfOrders="0" />
        </div>
        <div className="w-full">
          <DashboardCard status="In progress" numberOfOrders="05" />
        </div>
        <div className="w-full">
          <DashboardCard status="Total Booking" numberOfOrders="$5000" />
        </div>
        <div className="w-full">
          <DashboardCard status="Disputes" numberOfOrders="00" />
        </div>
      </div>
      <div className="mt-6">
        <TabbedTable />
      </div>
    </div>
  );
};

export default index;
