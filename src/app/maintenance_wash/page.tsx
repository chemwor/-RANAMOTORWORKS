import ServiceDetails from "@/components/inner-pages/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import MaintenanceWashServiceDetails from "@/components/inner-pages/services/maintenance_wash-details";

export const metadata = {
   title: "Maintenance Wash | RanaMotorWorks - Premium Ceramic Coating Solutions",
};
const index = () => {
   return (
      <Wrapper>
         <MaintenanceWashServiceDetails/>
      </Wrapper>
   )
}

export default index
