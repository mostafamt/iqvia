import React from "react";
import PrimaryAppBar from "../components/AppBars/PrimaryAppBar";
import SmartPicker from "../containers/SmartPicker";
import { data } from "../data";

function Home() {
  return (
    <>
      <PrimaryAppBar />
      <SmartPicker data={data} />
    </>
  );
}

export default Home;
