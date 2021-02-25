import React from "react";

export default function Root(props) {
  return (
    <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        <img
          style={{ width: "100%" }}
          src="https://www.delltechnologies.com/uploads/2018/02/Dell-EMC-City-Night-1000x500.jpg"
        />
      </div>
      <h1 className="cover-heading">Contact Us</h1>
      <p className="lead">
        Hey, what's up?
        <br />
        This is a page to contact us.
      </p>
    </section>
  );
}
