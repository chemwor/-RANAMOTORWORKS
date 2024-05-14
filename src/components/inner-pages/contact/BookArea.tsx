import Link from "next/link"
import Image from "next/image"

import circleImg from "@/assets/images/icon/icon_39.svg"
import ContactForm from "@/components/forms/ContactForm";
import BookForm from "@/components/forms/BookForm";

interface DataType {
   id: number;
   class_name?: string;
   title: string;
   address_1: string;
   address_2?: string;
}

const address_data: DataType[] = [
   {
      id: 1,
      title: "Email Us",
      address_1: "info@rmwna.com"
   },
   {
      id: 2,
      class_name: "skew-line",
      title: "Call Us",
      address_1: "+1 404 337-6017",
   },
   {
      id: 3,
      title: "Visit Us",
      address_1: "3180 Florence Rd bldg 100 suite 103"
   },
]

const ContactArea = () => {
   return (
      <div className="contact-us border-top mt-130 xl-mt-100 pt-80 lg-pt-60">
         <div className="container">
            <div className="row">
               <div className="col-xxl-9 col-xl-8 col-lg-10 m-auto">
                  <div className="title-one text-center wow fadeInUp">
                     <h3>Questions? Feel Free to Reach Out</h3>
                  </div>
               </div>
            </div>
         </div>

         <div className="address-banner wow fadeInUp mt-60 lg-mt-40">
            <div className="container">
               <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
                  {address_data.map((item) => (
                     <div key={item.id} className={`block position-relative ${item.class_name} z-1 mt-25`}>
                        <div className="d-xl-flex align-items-center">
                           <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                              <Image src={circleImg} alt="" className="lazy-img" /></div>
                           <div className="text">
                              <p className="fs-22">{item.title}</p>
                              <Link href="#" className="tran3s">{item.address_1}</Link>
                              {item.address_2 && <> { " " } <Link href="#" className="tran3s">{item.address_2}</Link></>}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-pink mt-150 xl-mt-120 md-mt-80">
            <div className="row">
               <div className="col-xl-7 col-lg-6">
                  <div className="form-style-one wow fadeInUp">

                     <BookForm />
                  </div>
               </div>
               <div className="col-xl-5 col-lg-6 d-flex order-lg-first">
                  <div className="contact-map-banner w-100">
                     <div className="gmap_canvas h-100 w-100">
                        <iframe className="gmap_iframe h-100 w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13249.512849064577!2d-84.705512!3d33.879912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f53bc7190ddda1%3A0x133343c78c3f430f!2sRanaMotorWorks%20LLC!5e0!3m2!1sen!2sus!4v1712798592392!5m2!1sen!2sus"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactArea
