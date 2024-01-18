import { DashboardCard } from "../../components/DashboardCard";

const index = (props) => {
  return (
    <div className="container m-auto my-5">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/3 px-4">
            <DashboardCard totalOrder="Total Orders"  numberOfOrders="25"/>
          </div>
          <div className="w-full sm:w-1/3 px-4">
            <DashboardCard totalOrder="Orders to Review"  numberOfOrders="05" />
          </div>
          <div className="w-full sm:w-1/3 px-4">
            <DashboardCard totalOrder="Amount spent"  numberOfOrders="$5000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
