import FooterFour from '@/layouts/footers/FooterFour'
import HeaderOne from '@/layouts/headers/HeaderOne'
import ContactArea from './ContactArea'
import BookArea from "@/components/inner-pages/contact/BookArea";

const Contact = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ContactArea />
         <FooterFour />
      </>
   )
}

export default Contact
