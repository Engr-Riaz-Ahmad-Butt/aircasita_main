import MapComponent from "../components/home/Map";
import { PropertyCard } from "../components/home/PropertyCard";
import Main from "../layout/Main";
import PropertyImg from "../public/property.jpg";

export default function Home() {
  const propertyData = [
    {
      title: "Beautiful Beach House",
      image: PropertyImg, // Replace with the actual image path
      guests: 4,
      bedrooms: 2,
      beds: 3,
      baths: 2,
      price: 150,
      cancellation: "Free cancellation up to 7 days before check-in",
      distance: 4369, // Distance in kilometers
    },
    {
      title: "Cozy Mountain Cabin",
      image: PropertyImg, // Replace with the actual image path
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
      price: 100,
      cancellation: "Non-refundable",
      distance: 2500, // Distance in kilometers
    },
    {
      title: "Beautiful Beach House",
      image: PropertyImg, // Replace with the actual image path
      guests: 4,
      bedrooms: 2,
      beds: 3,
      baths: 2,
      price: 150,
      cancellation: "Free cancellation up to 7 days before check-in",
      distance: 4369, // Distance in kilometers
    },
    {
      title: "Cozy Mountain Cabin",
      image: PropertyImg, // Replace with the actual image path
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
      price: 100,
      cancellation: "Non-refundable",
      distance: 2500, // Distance in kilometers
    },
    {
      title: "Beautiful Beach House",
      image: PropertyImg, // Replace with the actual image path
      guests: 4,
      bedrooms: 2,
      beds: 3,
      baths: 2,
      price: 150,
      cancellation: "Free cancellation up to 7 days before check-in",
      distance: 4369, // Distance in kilometers
    },
    {
      title: "Cozy Mountain Cabin",
      image: PropertyImg, // Replace with the actual image path
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
      price: 100,
      cancellation: "Non-refundable",
      distance: 2500, // Distance in kilometers
    },
  ];

  return (
    <div
      className="px-8 grid grid-cols-12 gap-5 "
      style={{ overflow: "hidden" }}
    >
      <div className="col-span-8 grid grid-cols-3 gap-5">
        {propertyData.map((property, index) => (
          <div key={index} className="col-span-1">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
      <div className="col-span-4 grid grid-cols-1 mt-8">
        <MapComponent />
      </div>
    </div>
  );
}

Home.Layout = Main;
