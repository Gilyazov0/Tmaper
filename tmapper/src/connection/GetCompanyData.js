import { companiesData } from "./CompaniesDB";
import axios from "axios";
import addColors from "./addColor";

export default async function getCompanyData(companyId = 1) {
  const res = axios.get("http://xxxxxxx/companyId");
  addColors(companiesData.structure, {});
  return companiesData;
}
