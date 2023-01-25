import CompaniesData from "./CompaniesDB"; 


     console.log(CompaniesData);
export default async function getCompanyData(companyId =1 ) {

     const companyStructure = CompaniesData.companyId[companyId];
     const res = await axios.get("something/companyId");
     

     return companyStructure
}
