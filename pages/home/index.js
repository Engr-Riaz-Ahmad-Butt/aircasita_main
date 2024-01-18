import MapComponent from "../../components/home/Map";
import NavBar from "../../components/home/NavBar";
import { PropertyCard } from "../../components/home/PropertyCard";
import Main from "../../layout/Main";
import PropertyImg from "../../public/property.jpg";
import { Card } from "../../components/propertyCard";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const cardDetails = [
    {
      id: 1,
      title: "Joshua Tree",
      description:
        "Stunning newly upgraded four bedroom apartment centrally located in the Dubai Marina.",
      viewed: "Viewed 20 time last week",
      date: "Jan 20 - Feb 04",
      price: "$2345 night",
      slider: [
        "https://images.unsplash.com/photo-1520330979108-7d66e04b35e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png",
      ],
    },
    {
      id: 2,
      title: "Joshua Tree",
      description:
        "Stunning newly upgraded four bedroom apartment centrally located in the Dubai Marina.",
      viewed: "Viewed 200 time last week",
      date: "Jan 20 - Feb 04",
      price: "$2345 night",
      slider: [
        "https://plus.unsplash.com/premium_photo-1679916744942-089b32c2f9cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png",
      ],
    },
    {
      id: 3,
      title: "Joshua Tree",
      description:
        "Stunning newly upgraded four bedroom apartment centrally located in the Dubai Marina.",
      viewed: "Viewed 10 time last week",
      date: "Jan 20 - Feb 04",
      price: "$2345 night",
      slider: [
        "https://images.unsplash.com/photo-1580895456895-cfdf02e4c23f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVpbGRpbmdzJTIwYXQlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png",
      ],
    },
    {
      id: 4,
      title: "Joshua Tree",
      description:
        "Stunning newly upgraded four bedroom apartment centrally located in the Dubai Marina.",
      viewed: "Viewed 40 time last week",
      date: "Jan 20 - Feb 04",
      price: "$2345 night",
      slider: [
        "https://images.unsplash.com/photo-1524282592407-25bf4101ac81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1aWxkaW5ncyUyMGF0JTIwbmlnaHR8ZW58MHx8MHx8fDA%3D",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png",
      ],
    },
    {
      id: 5,
      title: "Joshua Tree",
      description:
        "Stunning newly upgraded four bedroom apartment centrally located in the Dubai Marina.",
      viewed: "Viewed 23 time last week",
      date: "Jan 20 - Feb 04",
      price: "$2345 night",
      slider: [
        "https://i.ibb.co/ncrXc2V/1.png",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png",
      ],
    },
    {
      id: 6,
      title: "Joshua Tree",
      description:
        "Stunning newly upgraded four bedroom apartment centrally located in the Dubai Marina.",
      viewed: "Viewed 23 time last week",
      date: "Jan 20 - Feb 04",
      price: "$2345 night",
      slider: [
        "https://i.ibb.co/ncrXc2V/1.png",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png",
      ],
    },
    {
      id: 7,
      title: "Joshua Tree",
      description:
        "Stunning newly upgraded four bedroom apartment centrally located in the Dubai Marina.",
      viewed: "Viewed 45 time last week",
      date: "Jan 20 - Feb 04",
      price: "$2345 night",
      slider: [
        "https://i.ibb.co/ncrXc2V/1.png",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png",
      ],
    },
    {
      id: 7,
      title: "Joshua Tree",
      description:
        "Stunning newly upgraded four bedroom apartment centrally located in the Dubai Marina.",
      viewed: "Viewed 96 time last week",
      date: "Jan 20 - Feb 04",
      price: "$2345 night",
      slider: [
        "https://i.ibb.co/ncrXc2V/1.png",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png",
      ],
    },
  ];

  return (
    <>
      <NavBar />
      <div className="container m-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-5 overflow-auto">
        <div className="col-span-12 md:col-span-7 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 tablet-col gap-5">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className="col-span-1  md:col-span-1/3"
              onClick={() => {
                router.push({
                  pathname: `${`public/properties/${encodeURIComponent(
                    card.id
                  )}`}`,
                });
              }}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
        <div className="col-span-12 md:col-span-5 mt-8">
          <MapComponent />
        </div>
      </div>
    </>
  );
}

Home.Layout = Main;
