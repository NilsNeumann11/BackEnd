import {
  filterCitiesByPopulationHigh,
  filterCitiesByPopulationLow,
} from "./function.js";
import { data } from "./data.js";

console.log(filterCitiesByPopulationHigh(data));

console.log(filterCitiesByPopulationLow(data));
