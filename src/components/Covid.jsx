import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import CovidMap from "./CovidMap";
import LoadCountriesTask from "../tasks/LoadCountriesTask";
import NumberOfCases from "./NumberOfCases";
import legendItems from "../entities/LegendItems";

const Covid19 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();


  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <NumberOfCases legendItems={legendItemsReverse} />
          <CovidMap countries={countries} />
        </div>
      )}
    </div>
  );
};

export default Covid19;
