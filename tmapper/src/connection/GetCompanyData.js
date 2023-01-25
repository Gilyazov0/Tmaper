import { companiesData } from "./CompaniesDB";
import axios from "axios";

export default async function getCompanyData(companyId = 1) {
  const res = axios.get("http://xxxxxxx/companyId");

  return companiesData;
}
