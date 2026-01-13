import React from "react";

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="page-header container" aria-labelledby="page-title">
      <div className="page-header__inner">
        <h1 id="page-title" className="page-header__title">
          {title}
        </h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}
