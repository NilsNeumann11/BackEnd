export function filterCitiesByPopulationHigh(paramArray) {
  // Verwende die filter-Methode, um ein Array mit Städten zu erstellen, die mehr als 900.000 Einwohner haben
  const filteredCities = paramArray.filter((city) => city.population > 100000);

  return filteredCities;
}
export function filterCitiesByPopulationLow(paramArray) {
  // Verwende die filter-Methode, um ein Array mit Städten zu erstellen, die weniger als 100.000 Einwohner haben
  const filteredCities = paramArray.filter((city) => city.population < 100000);

  return filteredCities;
}
