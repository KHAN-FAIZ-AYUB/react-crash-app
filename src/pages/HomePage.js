import React from "react";
import Hero from "../components/Hero";
import HomCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
