import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import seviceDetailsThumb_1 from "@/assets/images/media/benz.jpg";
import seviceDetailsThumb_2 from "@/assets/images/media/corvet.jpg";

import seviceDetailsIcon_1 from "@/assets/images/icon/icon_72.svg";
import seviceDetailsIcon_2 from "@/assets/images/icon/icon_73.svg";
import seviceDetailsIcon_3 from "@/assets/images/icon/icon_74.svg";

interface ContentType {
   title_1: string;
   title_2: string;
   title_3: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   desc_4: JSX.Element;
   service_features: {
      icon: StaticImageData;
      title: string;
      desc: string
   }[];
   service_list: string[];
   sidebar_list: string[];
}[];

const content_data: ContentType = {
   title_1: "Vehicle Paint Protection",
   title_2: "The Importance of a Ceramic Coating",
   title_3: "Precision and Perfection",
   desc_1: (<>At RanaMotorWorks, we understand that your vehicle, whether it&apos;s a family van for daily errands or a cherished sports car for weekend drives, is more than just a means of transportation. It&apos;s an investment, a statement, an essential part of your lifestyle. That&apos;s why paint protection for your vehicle is not only a need; it&apos;s a must-have, particularly for those residing in Powder Springs, GA.
      With our high-quality ceramic coating services, we offer robust protection against harsh weather conditions, road debris, and everyday wear and tear.</>),
   desc_2: (<>
      Our vehicle paint protection coatings, sourced from trusted suppliers like Xpel and KochChemie, ensure that your vehicle&apos;s paintwork retains its luster and vibrancy for years. Let our team of experienced professionals safeguard your investment and keep your vehicle looking immaculate. Trust RanaMotorWorks. We&apos;re not just about cars. We&apos;re about delivering exceptional customer experience through expertise and passion.</>),
   desc_3: (<>Let our team of experienced professionals safeguard your investment and keep your vehicle looking immaculate. Trust RanaMotorWorks. We&apos;re not just about cars. We&apos;re about delivering exceptional customer experience through expertise and passion.</>),
   desc_4: (<>A ceramic coating shields your vehicle&apos;s paint, repelling water and reducing water spots and oxide deposits, while its hardness prevents scratches and enhances aesthetic appeal. It safeguards your car against the elements, maintaining its look and value. At RanaMotorWorks, ceramic coating is essential vehicle maintenance. Don&apos;t wait - give your vehicle the protection it deserves today. Call +1 (404) 882-8523 to schedule an appointment or fill out our online form for a quote.</>),
   service_features: [
      {
         icon: seviceDetailsIcon_1,
         title: "Property Insurance",
         desc: "Elit esse cillum dol fu nulla tur nos ullamo."
      },
      {
         icon: seviceDetailsIcon_2,
         title: "Easy Payments",
         desc: "quis nostr exerct ull security finibus ne derived."
      },
      {
         icon: seviceDetailsIcon_3,
         title: "Quick Process",
         desc: "Duis aute irure do reprehe Cicero voluptat velit."
      },
   ],
   service_list: ["Loan & low Interest facility", "100k+ Property Listing added & updated", "Exert Agents for any help", "Priority Access of exclusive sale",],
   sidebar_list: ["Property & Loan", "Sell Home", "Consulting Service", "Rent Home", "Mortgage",],
}

const { title_1, title_2, title_3, desc_1, desc_2, desc_3, desc_4, service_features, service_list, sidebar_list } = content_data;

const ServiceDetailsArea = () => {
   return (
      <div className="service-details mt-150 xl-mt-100 mb-150 xl-mb-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="service-post">
                     <div className="btn-line fw-500 text-uppercase">Paint Protection</div>
                     <h3 className="mb-30">{title_1}</h3>
                     <p className="fs-20 lh-lg pb-25">{desc_1}</p>
                     <p className="fs-20 lh-lg">{desc_2}</p>
                     <div className="img-gallery pt-15 pb-70 lg-pb-50">
                        <div className="row">
                           <div className="col-8">
                              <Image src={seviceDetailsThumb_1} alt="" className="lazy-img w-100 mt-20" />
                           </div>
                           <div className="col-4">
                              <Image src={seviceDetailsThumb_2} alt="" className="lazy-img w-100 mt-20" />
                           </div>
                        </div>
                     </div>
                     <h4 className="mb-30">{title_2}</h4>
                     <p className="fs-24">{desc_3}</p>

                     {/*<div className="feature-wrapper mt-60 lg-mt-40 mb-65 lg-mb-40">*/}
                     {/*   <div className="bg-wrapper">*/}
                     {/*      <div className="row">*/}
                     {/*         {service_features.map((item, index) => (*/}
                     {/*            <div key={index} className="col-xl-4 col-lg-6 col-md-4">*/}
                     {/*               <div className="card-style-eleven mt-30">*/}
                     {/*                  <div className="icon"><Image src={item.icon} alt="" className="lazy-img" /></div>*/}
                     {/*                  <h5 className="mt-30 mb-20">{item.title}</h5>*/}
                     {/*                  <p>{item.desc}</p>*/}
                     {/*               </div>*/}
                     {/*            </div>*/}
                     {/*         ))}*/}
                     {/*      </div>*/}
                     {/*   </div>*/}
                     {/*</div>*/}

                     <h4 className="mb-30">{title_3}</h4>
                     <p className="fs-20 lh-lg pb-25">{desc_4}</p>
                     <Link href="/contact" className="btn-two mt-30">Book Now</Link>
                  </div>
               </div>
               
               <div className="col-lg-4">
                  <div className="ms-xl-5">
                     <div className="service-sidebar md-mt-80">
                        <div className="service-category">
                           <ul className="style-none">
                              <li><Link href="/ceramic_coating" >Ceramic Coating</Link></li>
                              <li><Link href="/maintenance_wash" >Maintenance Wash</Link></li>
                              <li><Link href="/paint_protection" className="active" >Paint Protection</Link></li>
                              <li><Link href="/auto_detailing" >Auto Detailing</Link></li>
                           </ul>
                        </div>
                        <div className="contact-banner text-center mt-45">
                           <h4 className="mb-35 text-white">Any Questions? <br />Let’s talk</h4>
                           <Link href="/contact" className="btn-two">Let’s Talk</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceDetailsArea
