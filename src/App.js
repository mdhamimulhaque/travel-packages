import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Components/Loading/Loading';
import TravelPackages from "./Components/TravelPackages/TravelPackages";


function App() {
  const [loading, setLoading] = useState(true);
  const [packages, setPackages] = useState([]);

  const travelURL = "https://course-api.com/react-tours-project";

  //--------------- fetch data from api ---------------------
  useEffect(() => {
    fetchTravelInfo();
  }, []);

  const fetchTravelInfo = async () => {
    setLoading(true);

    try {
      const response = await fetch(travelURL);
      const travelData = await response.json();
      setLoading(false);
      setPackages(travelData);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }

  };

  //------------- remove item -----------------

  const removePackage = (id) => {
    const newPackage = packages.filter((data) => data.id !== id);
    setPackages(newPackage);
  }

  // --------------- loading page setup ------------------
  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    )
  }
  if (packages.length === 0) {
    return (
      <main >
        <h2 style={{ textAlign: "center" }}>There is no Travel package available now</h2>
        <center>
          <button onClick={fetchTravelInfo}>
            Refresh
          </button>
        </center>
      </main>
    )
  }
  return (
    <main>
      <TravelPackages packages={packages} removePackage={removePackage}></TravelPackages>
    </main>
  );
}

export default App;
