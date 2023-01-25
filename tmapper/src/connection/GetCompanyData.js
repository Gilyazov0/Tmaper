import { companiesData } from "./CompaniesDB";
import addColors from "./addColor";
import getCultureData from "./firebase";

export default async function getCompanyData(clustersNum = 6) {
  const culture = await getCultureData(clustersNum);
  addColors(companiesData.structure, culture);
  return companiesData;
}
