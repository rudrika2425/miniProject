import React from "react";
import Heading from "../common/Heading";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <section className="featured bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <Heading title="Featured Property Types" subtitle="Find All Type of Property." />
        <FeaturedCard />
      </div>
    </section>
  );
};

export default Featured;
