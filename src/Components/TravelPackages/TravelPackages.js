import React from 'react';
import Package from '../Package/Package';
import "./TravelPackages.css";


const TravelPackages = ({ packages,removePackage }) => {
    return (
        <section className="packages-section">
            <div className="heading-box">
                <h2>Welcome Our Travel Agency</h2>
                <hr className="underline"></hr>
            </div>

            <div className="packages-boxes">
                {
                  packages.map((packageInfo) =>{
                      return(
                          <Package packageInfo={packageInfo} removePackage={removePackage} />
                      )
                  })
                }
            </div>
        </section>
    );
};

export default TravelPackages;