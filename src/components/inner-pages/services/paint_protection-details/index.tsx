import FooterFour from "@/layouts/footers/FooterFour"
import ServiceDetailsArea from "./ServiceDetailsArea"
import FancyBanner from "@/components/common/FancyBanner"
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const PaintProtectionServiceDetails = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Service Details" link="#" link_title="Service" sub_title="Paint Protection" style={true} />
         <ServiceDetailsArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default PaintProtectionServiceDetails;
