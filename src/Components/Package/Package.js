import React from 'react';
import { useState } from 'react/cjs/react.development';
import "./Package.css";

const Package = ( {packageInfo,removePackage} ) => {
    const  { id,image, info, name, price } = packageInfo;

    const [ readmore, setReadMore ] = useState(false);

 
    return (
        <>
            <div className="card">
                <img src={image} />

                <div className="package-info">
                    <h4>{name}</h4>
                    <h5>$ {price}</h5>
                </div>

                <div className="package-details">
                    <p>{
                      readmore ? info : `${info.slice(0,125)}...`
                    }
                    <small>
                        <span 
                        onClick={()=> setReadMore(!readmore)}
                        >
                            {readmore ? "Show less" : "Read more"}
                        </span>
                    </small>
                    </p>
                </div>
                <center>
                  <button onClick={()=>removePackage(id)}>Not Interested</button>
                </center>
            </div>
        </>
    );
};

export default Package;