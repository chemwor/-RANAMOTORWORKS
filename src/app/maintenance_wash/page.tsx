import ServiceDetails from "@/components/inner-pages/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import MaintenanceWashServiceDetails from "@/components/inner-pages/services/maintenance_wash-details";

export const metadata = {
   title: "Service Details Homy - Real Estate React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <MaintenanceWashServiceDetails/>
      </Wrapper>
   )
}

export default index
