import Wrapper from "@/layouts/Wrapper";
import AutoDetailingServiceDetails from "@/components/inner-pages/services/auto_detailing-details";

export const metadata = {
   title: "Auto Detailing | RanaMotorWorks - Premium Ceramic Coating Solutions",
};
const index = () => {
   return (
      <Wrapper>
         <AutoDetailingServiceDetails/>
      </Wrapper>
   )
}

export default index
