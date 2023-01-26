import React from "react";
import "./RankComponent.css";

function RankComponent(props) {
  return (
    <div className="rankListMainContainer">
      <div className="rankContainerHeader">
        <div className="companyHeader"></div>
        <div className="companyText">
          <div className="companyHeader">Company</div>
          <h4 className="companyTitle">{""}</h4>
          <p className="descText"></p>
        </div>
        <div className="countryTextHeader">Country</div>
        <div className="websiteLinkHeader">Link</div>
      </div>
      {props.data.map((x) => {
        return (
          <div className="rankContainer">
            <img src={x.logo} alt="" className="companyLogo" />
            <div className="companyText">
              <h4 className="companyTitle">{x.name}</h4>
              <p className="descText">{x.desc}</p>
            </div>
            <div className="countryText">{x.country}</div>
            <a href={x.link} className="websiteLink">
              {x.link}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default RankComponent;
