interface DataType {
   id: number;
   page: string;
   widget_title: string;
   widget_class?: string;
   widget_class2?: string;
   footer_link: {
      link: string;
      link_title: string;
   }[];

}

const footer_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      widget_class: "xs-mt-50",
      widget_title: "Links",
      footer_link: [{ link: "/home-three", link_title: "Home" }, { link: "/about_us_01", link_title: "About Company" }, { link: "/contact", link_title: "Book Now" }, { link: "/get_quote", link_title: "Get Quote" },]
   },
   {
      id: 2,
      widget_class: "xs-mt-30",
      page: "home_1",
      widget_title: "Legal",
      footer_link: [ { link: "/faq", link_title: "Faq’s" },]
   },

   // home two

   {
      id: 1,
      page: "home_3",
      widget_title: "Links",
      footer_link: [{ link: "/home-three", link_title: "Home" }, { link: "/about_us_01", link_title: "About Company" }, { link: "/contact", link_title: "Book Now" }, { link: "/get_quote", link_title: "Get Quote" },]
   },
   {
      id: 2,
      widget_class: "col-xxl-3 col-xl-4",
      page: "home_3",
      widget_title: "Legal",
      footer_link: [{ link: "/faq", link_title: "Faq’s" },]
   },


   // home four

   {
      id: 1,
      page: "home_4",
      widget_class: "col-lg-2",
      widget_title: "Links",
      footer_link: [{ link: "/home-three", link_title: "Home" }, { link: "/about_us_01", link_title: "About Company" }, { link: "/contact", link_title: "Book Now" }, { link: "/get_quote", link_title: "Get Quote" },]
   },
   {
      id: 2,
      widget_class: "col-xl-2 col-lg-3",
      page: "home_4",
      widget_title: "Legal",
      footer_link: [{ link: "/faq", link_title: "Faq’s" },]
   },

   // home five

   {
      id: 1,
      page: "home_5",
      widget_class: "col-lg-3 ms-auto",
      widget_class2: "ps-xl-5",
      widget_title: "Links",
      footer_link: [{ link: "/home-three", link_title: "Home" }, { link: "/about_us_01", link_title: "About Company" }, { link: "/contact", link_title: "Book Now" }, { link: "/get_quote", link_title: "Get Quote" },]
   },
   {
      id: 2,
      widget_class: "col-lg-3",
      page: "home_5",
      widget_title: "Legal",
      footer_link: [{ link: "/faq", link_title: "Faq’s" },]
   },

]

export default footer_data;
