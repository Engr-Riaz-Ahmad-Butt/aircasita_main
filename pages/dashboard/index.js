import { DashboardCard } from "../../components/DashboardCard";

const index = (props) => {
  return (
    <div className="container m-auto my-5">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="mt-5">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
            <DashboardCard totalOrder="Completed"  numberOfOrders="0"/>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
            <DashboardCard totalOrder="Inprogres"  numberOfOrders="05" />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
            <DashboardCard totalOrder="Amount spent"  numberOfOrders="$5000" />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
            <DashboardCard totalOrder="Amount spent"  numberOfOrders="$5000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
