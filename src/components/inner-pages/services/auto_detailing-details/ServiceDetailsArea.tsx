import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import seviceDetailsThumb_1 from "@/assets/images/media/g80.jpg";
import seviceDetailsThumb_2 from "@/assets/images/media/wheel.jpg";

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
   title_1: "Experience the Ultimate Shine With Our Expert Detailing Team",
   title_2: "Unmatched Expertise",
   title_3: "Attention to Detail",
   desc_1: (<>At RanaMotorWorks in Powder Springs, GA, we take auto detailing seriously. Our team is dedicated to providing top-notch vehicle detailing services that will leave your ride looking like it just rolled off the assembly line.</>),
   desc_2: (<>We believe that every car deserves royal treatment, which is why we use only the finest products and techniques to achieve showroom-quality results. Our ceramic coating services are second to none, providing long-lasting protection against the elements and preserving your car&apos;s immaculate finish. From exterior washes and waxes to interior detailing and leather conditioning, we offer a wide range of services to suit your needs. Whether you&apos;re looking to spruce up your daily driver or get your prized possession ready for the next car show, we&apos;ve got you covered.</>),
   desc_3: (<>At RanaMotorWorks, we understand that your car is not just a way to transport yourself. It&apos;s a part of your personality and a reflection of your style. That&apos;s why we take the time to get to know our customers and their vehicles so we can offer personalized service tailored to your unique needs. We know that there are plenty of auto detailing shops out there to choose from, but we&apos;re confident that we&apos;re the best in the business. Our commitment to quality, craftsmanship, and customer satisfaction is unwavering, and we won&apos;t rest until you&apos;re 100% happy with the results.</>),
   desc_4: (<>Our detailing experts at RanaMotorWorks have years of experience and extensive training in the latest techniques and products. We believe that every vehicle deserves to look its best, no matter the make or model. That&apos;s why we offer a range of detailing services to suit every need and budget.

      ​

      If you&apos;re looking for top-tier auto detailing services in Powder Springs, GA, look no further than RanaMotorWorks. Book an appointment with us today and experience the difference for yourself!</>),
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
                     <div className="btn-line fw-500 text-uppercase">Auto Detailing</div>
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
                              <li><Link href="/maintenance_wash" >Maintenance Wash</Link></li>
                              <li><Link href="/paint_protection" >Paint Protection</Link></li>
                              <li><Link href="/auto_detailing" className="active">Auto Detailing</Link></li>
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
