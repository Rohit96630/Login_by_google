import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import SimpleMap from "./Map";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  console.log(selectedCity);

  useEffect(() => {
    axios
      .get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
        headers: {
          "X-RapidAPI-Key":
            "3629092d0emsheb6da0bac5500e4p191a0ajsn473d9b9acac7",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  function handleRoute() {
    navigate("/");
  }

  return (
    <>
      <div className="main_container">
        <div className="left_container">
          <h1>City name</h1>
          <ol className="Ol_contain">
            {data.map((item) => (
              <li key={item.id} onClick={() => handleCityClick(item)}>
                {item.city}
              </li>
            ))}
          </ol>
          <div className="LOgout_btn">
            <button onClick={handleRoute}>Logout</button>
          </div>
        </div>
        <div className="right_container">
          <SimpleMap key={selectedCity?.id} selectedCity={selectedCity} />
        </div>
      </div>
    </>
  );
};

export default Home;
