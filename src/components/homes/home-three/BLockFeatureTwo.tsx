import Image from "next/image"
import Link from "next/link"
import Count from "@/components/common/Count"
import CardStyleTwo from "@/components/common/CardStyleTwo"

import featureimg_1 from "@/assets/images/shape/shape_37.svg"
import featureimg_2 from "@/assets/images/media/shadowcar.jpg"
import featureimg_3 from "@/assets/images/assets/screen_03.jpg"
import featureimg_4 from "@/assets/images/shape/shape_40.svg"
import featureimg_5 from "@/assets/images/media/fr50.jpg"
import featureimg_6 from "@/assets/images/assets/screen_04.png"

const BLockFeatureTwo = () => {
   return (
      <div className="block-feature-eight position-relative z-1 mt-170 xl-mt-140 lg-mt-120">
         <div className="container container-large">
            <div className="position-relative">
               <div className="row align-items-xl-end">
                  <div className="col-xl-7 col-lg-6">
                     <div className="pe-xl-5 me-xxl-3 wow fadeInLeft">
                        <div className="title-one pe-xl-5">
                           <h2 className="font-garamond">Excellence Through <em></em> Innovation <span className="star-shape"></span></h2>
                        </div>

                        <div className="row gx-xl-4 align-items-end">
                           <div className="col-7">
                              <div className="media-block position-relative z-1">
                                 <Image src={featureimg_2} alt="" className="lazy-img main-img w-100" />
                                 {/*<Image src={featureimg_3} alt="" className="lazy-img shapes screen_01" />*/}
                                 {/*<Image src={featureimg_4} alt="" className="lazy-img shapes shape_01" />*/}
                              </div>
                           </div>
                           <div className="col-5">
                              <div className="media-block position-relative z-1">
                                 <Image src={featureimg_5} alt="" className="lazy-img main-img w-100" />
                                 {/*<Image src={featureimg_6} alt="" className="lazy-img shapes screen_02" />*/}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="col-xl-5 col-lg-6">
                     <div className="block-two ps-xxl-5 md-mt-100">
                        <div className="bg-wrapper wow fadeInRight">
                           <p className="fs-24 fst-italic pe-xl-5">“Consider RanaMotorWorks more than a service, where meticulous craftsmanship and boundless passion intertwine to elevate every drive, fulfilling your automotive aspirations.”</p>
                           <div className="counter-wrapper pb-40 mt-45 lg-mt-20 mb-60 lg-mb-20">
                              <div className="row">
                                 <div className="col-6">
                                    <div className="counter-block-one mt-20">
                                       <div className="main-count fw-500 color-dark"><span className="counter"><Count number={150} /></span>+</div>
                                       <span>Customers</span>
                                    </div>
                                 </div>
                                 <div className="col-6">
                                    <div className="counter-block-one mt-20">
                                       <div className="main-count fw-500 color-dark"><span className="counter"><Count number={20} /></span></div>
                                       <span>Five Star Reviews</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <ul className="list-style-one fs-22 color-dark style-none">
                              <li>Passion-infused protection transcending the ordinary.</li>
                              <li>Meticulous craftsmanship ensuring flawless results.</li>
                              <li>An unparalleled experience elevating every drive into cherished memories.</li>
                           </ul>
                           <div className="mt-70 lg-mt-50">
                              <Link href="/about_us_02" className="btn-five md"><span>Learn More</span> <i className="bi bi-arrow-up-right"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/*<CardStyleTwo />*/}
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureTwo
