import React from "react";
import PageBanner from '../components/PageBanner';

export default function Brand() {
  return (
    <div>
      <PageBanner title={<><b>the</b> brand</>} subtitle="company slogan goes here"/>
      <p>Brand page content ...</p>
    </div>
  );
}
