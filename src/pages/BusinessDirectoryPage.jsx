import { useParams } from "react-router-dom";
import BussnisesDetail from "../components/bussnisesDetail/BussnisesDetail";
// import { mockBusinesses } from "../data/bussnises";
import businesses from "../data/data.json";

const BusinessDirectoryPage = () => {
  const { id, slug } = useParams();

  // find business by id
  const business = [...businesses].find((b) => String(b.id) === id);

  // optional safety
  if (!business) {
    return <div className="p-10">Business not found</div>;
  }

  return (
    <BussnisesDetail
      category={business.category}
      name={business.name}
      phone={business.phone}
      img={business.image}
      rating={business.rating}
      hours={business.hours}
      description={business.description}
      address={business.address}
      features={business.features}
    />
  );
};

export default BusinessDirectoryPage;
