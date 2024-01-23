import { DashboardCard } from "../../components/DashboardCard";
import TabbedTable from "../../components/DashboardTable";
import { GrCompliance, GrInProgress } from "react-icons/gr";

const index = () => {
  return (
    <div className="container m-auto my-5">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="mt-5 flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <DashboardCard status="Completed" numberOfOrders="0" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <DashboardCard status="In progress" numberOfOrders="05" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <DashboardCard status="Total Booking" numberOfOrders="$5000" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <DashboardCard status="Disputes" numberOfOrders="00" />
        </div>
        {/* <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
          <DashboardCard status="Future Booking" numberOfOrders="01" />
        </div> */}
      </div>
      <TabbedTable />
    </div>
  );
};

export default index;
