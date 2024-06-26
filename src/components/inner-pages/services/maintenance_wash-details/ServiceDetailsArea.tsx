import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import seviceDetailsThumb_1 from "@/assets/images/media/twins.jpg";
import seviceDetailsThumb_2 from "@/assets/images/media/lexus.jpg";

import seviceDetailsIcon_1 from "@/assets/images/icon/car.png";
import seviceDetailsIcon_2 from "@/assets/images/icon/spray.png";
import seviceDetailsIcon_3 from "@/assets/images/icon/towels.png";

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
   title_1: "Maintenance Wash Services",
   title_2: "Our Wash Services",
   title_3: "Benefit you will get.",
   desc_1: (<>Introducing our Maintenance Wash service – the ultimate solution for both ceramic-coated and non-ceramic-coated cars. Our quick and efficient exterior wash is designed to enhance your vehicle&apos;s appearance and protect it from the elements. We offer added protection sealants and collaborate with top-tier chemical companies like Koch-Chemi to ensure your car receives the best care possible. Elevate your ride with our premium maintenance wash today!</>),
   desc_2: (<>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects. We work collaboratively with organizations to identify & leverage the potential within their risk and compliance functions, enabling them to thrive in ever-changing business landscape.</>),
   desc_3: (<>Your leading real estate advocate, transforming houses into dreams. Trust us to expertly guide you home.</>),
   desc_4: (<>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects.</>),
   service_features: [
      {
         icon: seviceDetailsIcon_1,
         title: "Stage 1: Maintenance Wash",
         desc: "Our Maintenance Wash includes an exterior pre-foam, contact wash, wheel and tire cleaning, wheel well cleaning, door jamb cleaning, non-sling tire shine, and foam wax, starting at $100 for sedans and $150 for SUVs/trucks, with a 25% upcharge for larger vehicles."
      },
      {
         icon: seviceDetailsIcon_2,
         title: "Stage 2: Advanced Wash",
         desc: "Our Advanced Wash includes everything in Stage One, plus ceramic sealant, plastic trim protection, basic interior vacuuming (excluding pet hair removal), inside window cleaning, and RMW Signature Interior Scent, starting at $150 for sedans and $200 for SUVs/trucks, with a 25% upcharge for larger vehicles. Optional add-ons include $75 for rubber mat cleaning and protection, $100 for carpet mat blowout, and $300 for full interior cleaning and protection."
      },
      {
         icon: seviceDetailsIcon_3,
         title: "Stage 3: Ceramic Coating Wash",
         desc: "Our Ceramic Coating Maintenance Wash includes an exterior pre-foam, contact wash, wheel and tire cleaning, wheel well cleaning, door jamb cleaning, non-sling tire shine, basic interior vacuuming (excluding pet hair removal), inside window cleaning, ceramic coating topper, and RMW Signature Interior Scent, offered at a flat rate of $150 for all vehicle sizes."
      },

   ],
   service_list: ["Loan & low Interest facility", "100k+ Property Listing added & updated", "Exert Agents for any help", "Priority Access of exclusive sale",],
   sidebar_list: ["Maintenance Wash", "Paint Protection", "Auto Detailing",],
}

const { title_1, title_2, title_3, desc_1, desc_2, desc_3, desc_4, service_features, service_list, sidebar_list } = content_data;

const ServiceDetailsArea = () => {
   return (
      <div className="service-details mt-150 xl-mt-100 mb-150 xl-mb-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="service-post">
                     <div className="btn-line fw-500 text-uppercase">Maintenance Wash</div>
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
                     {/*<p className="fs-24">{desc_3}</p>*/}

                     <div className="feature-wrapper mt-60 lg-mt-40 mb-65 lg-mb-40">
                        <div className="bg-wrapper">
                           <div className="row">
                              {service_features.map((item, index) => (
                                 <div key={index} className="col-xl-4 col-lg-6 col-md-4">
                                    <div className="card-style-eleven mt-30">
                                       <div style={{width: "50%"}}><Image src={item.icon} alt="" className="lazy-img" /></div>
                                       <h5 className="mt-30 mb-20">{item.title}</h5>
                                       <p>{item.desc}</p>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/*<h4 className="mb-30">{title_3}</h4>*/}
                     {/*<p className="fs-20 lh-lg pb-25">{desc_4}</p>*/}
                     {/*<ul className="list-style-one fs-22 color-dark style-none">*/}
                     {/*   {service_list.map((list, i) => <li key={i}>{list}</li>)}*/}
                     {/*</ul>*/}
                     <Link href="/contact" className="btn-two mt-30">Book Now</Link>
                  </div>
               </div>
               
               <div className="col-lg-4">
                  <div className="ms-xl-5">
                     <div className="service-sidebar md-mt-80">
                        <div className="service-category">
                           <ul className="style-none">
                              <li><Link href="/ceramic_coating" >Ceramic Coating</Link></li>
                              <li><Link href="/maintenance_wash" className="active">Maintenance Wash</Link></li>
                              <li><Link href="/paint_protection" >Paint Protection</Link></li>
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
