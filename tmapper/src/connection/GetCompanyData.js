import { companiesData } from "./CompaniesDB";
import addColors from "./addColor";

export default async function getCompanyData(companyId = 1) {
  addColors(companiesData.structure, {});
  return companiesData;
}
