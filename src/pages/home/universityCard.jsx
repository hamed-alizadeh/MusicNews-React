import React from "react";

function UniversityCard({ name, program, website, imageSrc }) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <img className="circle-img" src={imageSrc} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{program}</p>
        <a href={website}>{name} website</a>
      </div>
    </div>
  );
}

export default UniversityCard;
