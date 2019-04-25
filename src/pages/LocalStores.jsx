import React from "react";
import PageBanner from '../components/PageBanner';

export default function LocalStores() {
  return (
    <div>
      <PageBanner title={<><b>Local</b> stores</>} subtitle="Find a store near you"/>
      <h2>Local stores</h2>
    </div>
  );
}
