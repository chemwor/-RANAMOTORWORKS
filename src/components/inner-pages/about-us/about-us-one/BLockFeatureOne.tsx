import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_06.svg";
import Count from "@/components/common/Count";

interface ContentType {
   sub_title: string;
   desc_1: JSX.Element;
   title_1: string;
   title_2: string;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
}

const feature_content: ContentType = {
   sub_title: "About us",
   desc_1: (<>Elevate your vehicle's allure - book now to experience our range of exceptional services!</>),
   title_1: "Who we are?",
   title_2: "Our Mission",
   desc_2: (<>We understand your car is more than just transportation; it embodies your hard work and pride. That's why at RananMotorWorks, we elevate your driving experience through expert paint protection, delivering an experience that speaks to the essence of your automotive journey where passion meets protection.</>),
   desc_3: (<>At RanaMotorWorks, we're dedicated to redefining automotive paint protection with passion, uncompromising excellence, and top-tier customer satisfaction. Our goal is to set a new industry standard, prioritizing deep bonds with customers and delivering unmatched quality and craftsmanship.</>),
}

const { sub_title, desc_1, title_1, title_2, desc_2, desc_3 } = feature_content;

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-two mt-150 xl-mt-100">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-lg-6 wow fadeInLeft">
                  <div className="me-xxl-4">
                     <div className="title-one mb-60 lg-mb-40">
                        <div className="upper-title">{sub_title}</div>
                        <h3>Protect Your <span>Investment</span></h3>
                        <p className="fs-22">{desc_1}</p>
                     </div>
                     <Link href="/contact" className="btn-two">Book Now</Link>
                     <div className="counter-wrapper border-top pt-40 md-pt-10 mt-65 md-mt-40">
                        <div className="row">
                           <div className="col-xxl-6 col-sm-5">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark"><span className="counter"><Count number={150} /></span>+</div>
                                 <span>Customers</span>
                              </div>
                           </div>
                           <div className="col-xxl-6 col-sm-7">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark"><span className="counter"><Count number={20} /></span></div>
                                 <span>Five Star Reviews</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-6 wow fadeInRight">
                  <div className="block-two md-mt-40">
                     <div className="bg-wrapper">
                        <h5>{title_1}</h5>
                        <p className="fs-22 lh-lg mt-20">{desc_2}</p>
                        <h5 className="top-line">{title_2} </h5>
                        <p className="fs-22 lh-lg mt-20">{desc_3}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
