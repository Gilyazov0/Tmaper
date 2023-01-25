import CompaniesData from "./CompaniesDB";

export default async function getCompanyData(companyId = 1) {
  console.log(CompaniesData);
  return CompaniesData;
}
