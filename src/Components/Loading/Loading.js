import React from 'react';
import loadingGif from "../../images/travel.gif";


const Loading = () => {
    const loadingStyle = {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection: "column",
        height:"100vh"
    }
    return (
        <main className="loading" style={loadingStyle}>
            <img src={loadingGif} alt="" />
            <h2>loading...</h2>
        </main>
    );
};

export default Loading;