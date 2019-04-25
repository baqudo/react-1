import React from "react";
import "../sass/components/page-banner.sass";

export default function PageBanner({ title, subtitle }) {
  return (
    <div className="page-banner">
        <div className="page-banner__content">
            <h1 className="page-banner__title">{title}</h1>
            <p className="page-banner__subtitle">{subtitle}</p>
        </div>
    </div>
  );
}
