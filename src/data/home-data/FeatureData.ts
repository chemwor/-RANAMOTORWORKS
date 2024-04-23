import { StaticImageData } from "next/image";

import featureIcon_1 from "@/assets/images/icon/safety.png";
import featureIcon_2 from "@/assets/images/icon/car-wash.png";
import featureIcon_3 from "@/assets/images/icon/car-painting.png";

import feature3Icon_1 from "@/assets/images/icon/car.png";
import feature3Icon_2 from "@/assets/images/icon/car-painting.png";
import feature3Icon_3 from "@/assets/images/icon/towels.png";
import feature3Icon_4 from "@/assets/images/icon/icon_26.svg";
import feature3Icon_5 from "@/assets/images/icon/icon_27.svg";
import feature3Icon_6 from "@/assets/images/icon/icon_28.svg";

import feature4Icon_1 from "@/assets/images/icon/icon_11.svg";
import feature4Icon_2 from "@/assets/images/icon/icon_12.svg";
import feature4Icon_3 from "@/assets/images/icon/icon_13.svg";

import feature5Icon_1 from "@/assets/images/icon/icon_23.svg";
import feature5Icon_2 from "@/assets/images/icon/icon_24.svg";
import feature5Icon_3 from "@/assets/images/icon/icon_25.svg";

import feature6Icon_1 from "@/assets/images/icon/icon_35.svg";
import feature6Icon_2 from "@/assets/images/icon/icon_36.svg";
import feature6Icon_3 from "@/assets/images/icon/icon_37.svg";

import feature7Icon_1 from "@/assets/images/icon/icon_40.svg";
import feature7Icon_2 from "@/assets/images/icon/icon_41.svg";
import feature7Icon_3 from "@/assets/images/icon/icon_42.svg";

import featureImg_1 from "@/assets/images/media/img_19.jpg";
import featureImg_2 from "@/assets/images/media/img_20.jpg";
import featureImg_3 from "@/assets/images/media/img_21.jpg";

interface DataType {
   id: number;
   page: string;
   item_bg?: string;
   img?: StaticImageData;
   icon?: StaticImageData;
   title: string;
   desc?: string;
   tag?: string;
   data_delay_time?: string;
   btn?: string;
   class_name?:string;
   link_name:string;
}

const feature_data: DataType[] = [
   {
      id: 0,
      page: "home_1_feature_1",
      link_name: "ceramic_coating",
      icon: featureIcon_1,
      title: "Ceramic Coating",
      btn:"Learn more",
      desc: "Elevate your vehicle's protection and aesthetics with RanaMotorWorks' Ceramic Coating service, fortified by XPEL™ Fusion Plus technology, and expert paint correction techniques, surpassing 'factory new' standards.",
   },
   {
      id: 1,
      page: "home_1_feature_1",
      link_name: "maintenance_wash",
      icon: featureIcon_2,
      title: "Maintenance Wash",
      btn:"Learn more",
      desc: "Our commitment to your vehicle's excellence goes beyond just ceramic coating, with top-quality care including thorough washes and added protection, partnering with brands like Koch-Chemi to ensure lasting quality and maintain your vehicle's pristine condition.",
   },
   {
      id: 2,
      page: "home_1_feature_1",
      link_name: "paint_protection",
      icon: featureIcon_3,
      title: "Paint Correction",
      btn:"Learn more",
      desc: "With our precision paint correction services, we specialize in elevating your vehicle's appearance to new heights, ensuring flawless results and restoring its original glory, so your car shines like new with meticulous attention to detail and industry-leading techniques.",
   },

   // home_1_feature_2

   // {
   //    id: 1,
   //    page: "home_1_feature_2",
   //    item_bg: "card-1",
   //    title: "Kelowna",
   //    desc: "1,230 Properties",
   // },
   // {
   //    id: 2,
   //    page: "home_1_feature_2",
   //    item_bg: "card-2",
   //    title: "California",
   //    desc: "1190 Properties",
   // },
   // {
   //    id: 3,
   //    page: "home_1_feature_2",
   //    item_bg: "card-3",
   //    title: "New York",
   //    desc: "1710 Properties",
   // },
   // {
   //    id: 4,
   //    page: "home_1_feature_2",
   //    item_bg: "card-5",
   //    title: "Miami",
   //    desc: "670 Properties",
   // },
   // {
   //    id: 5,
   //    page: "home_1_feature_2",
   //    item_bg: "card-5",
   //    title: "Dhaka",
   //    desc: "1670 Properties",
   // },

   // home_1_feature_3

   {
      id: 1,
      page: "home_1_feature_3",
      link_name: "ceramic_coating",
      icon: feature3Icon_1,
      title: "Ceramic Coating",
      desc: "Experience top-tier automotive care at RanaMotorWorks with XPEL™ Fusion Plus Ceramic Coatings, elevating your vehicle's appearance and durability - choose RMW for the best Ceramic Coating in Atlanta.",
   },
   {
      id: 2,
      page: "home_1_feature_3",
      link_name: "ceramic_coating",
      class_name:"arrow position-relative",
      icon: feature3Icon_2,
      title: "Maintenance Wash",
      desc: "From ceramic coating upkeep to thorough washes, our commitment to your vehicle's pristine condition stands strong with top-quality care and partnerships with brands like Koch-Chemi - trust us to keep your car looking its best, always.",
   },
   {
      id: 3,
      page: "home_1_feature_3",
      link_name: "ceramic_coating",
      icon: feature3Icon_3,
      title: "Detailing Products",
      desc: "Our detailing and ceramic maintenance products redefine excellence, embodying shared values with partners Kosh-Chemi and XPEL, offering a blend of craftsmanship and innovation in automotive care.",
   },

   // home_two_feature_1

   // {
   //    id: 1,
   //    page: "home_2_feature_1",
   //    item_bg: "location-card-1",
   //    title: "Kelowna",
   // },
   // {
   //    id: 2,
   //    page: "home_2_feature_1",
   //    item_bg: "location-card-2",
   //    title: "West Kelowna",
   //    data_delay_time: "0.1s",
   // },
   // {
   //    id: 3,
   //    page: "home_2_feature_1",
   //    item_bg: "location-card-3",
   //    title: "Lake Country",
   //    data_delay_time: "0.2s",
   // },
   // {
   //    id: 4,
   //    page: "home_2_feature_1",
   //    item_bg: "location-card-4",
   //    title: "Vernon",
   // },
   // {
   //    id: 5,
   //    page: "home_2_feature_1",
   //    item_bg: "location-card-5",
   //    title: "Peachland",
   //    data_delay_time: "0.1s",
   // },
   // {
   //    id: 6,
   //    page: "home_2_feature_1",
   //    item_bg: "location-card-6",
   //    title: "Penticton",
   //    data_delay_time: "0.2s",
   // },

   // home_two_feature_2

   // {
   //    id: 1,
   //    page: "home_two_feature_2",
   //    img: featureImg_1,
   //    title: "Explore & buy Home",
   //    tag: "BUY HOME",
   //    data_delay_time: "0.2s",
   // },
   // {
   //    id: 2,
   //    page: "home_two_feature_2",
   //    img: featureImg_2,
   //    title: "List & Sell quickly",
   //    tag: "Sell Now",
   //    data_delay_time: "0.1s",
   // },
   // {
   //    id: 3,
   //    page: "home_two_feature_2",
   //    img: featureImg_3,
   //    title: "Discover & get Rental",
   //    tag: "RENT NOW",
   //    data_delay_time: "0.2s",
   // },

   // home_two_feature_3

   // {
   //    id: 1,
   //    page: "home_two_feature_3",
   //    icon: feature4Icon_1,
   //    title: "Property Insurance",
   //    desc: "Elit esse cillum dolo fugiat nulla tur nos ullamo.",
   // },
   // {
   //    id: 2,
   //    page: "home_two_feature_3",
   //    icon: feature4Icon_2,
   //    title: "Easy Payments",
   //    desc: "quis nostrud exerct ullamo sucirity finibus ne derived.",
   // },
   // {
   //    id: 3,
   //    page: "home_two_feature_3",
   //    icon: feature4Icon_3,
   //    title: "Quick Process",
   //    desc: "Duis aute irure dolor reprehe de Cicero's voluptat velit.",
   // },

   // home_3_feature_1

   // {
   //    id: 1,
   //    page: "home_3_feature_1",
   //    icon: feature5Icon_1,
   //    title: "Buy a hom",
   //    btn: "Find Home",
   //    desc: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
   // },
   // {
   //    id: 2,
   //    page: "home_3_feature_1",
   //    icon: feature5Icon_2,
   //    title: "Buy a home",
   //    btn: "Rent Home",
   //    desc: "Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.",
   //    data_delay_time: "0.1s",
   // },
   // {
   //    id: 3,
   //    page: "home_3_feature_1",
   //    icon: feature5Icon_3,
   //    title: "Buy a home",
   //    btn: "Sell Property",
   //    desc: "List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.",
   //    data_delay_time: "0.2s",
   // },
   

   // home_three_feature_2

   // {
   //    id: 1,
   //    page: "home_three_feature_2",
   //    icon: feature3Icon_4,
   //    title: "Property Insurance",
   //    desc: "Elit esse cillum dolo fugiat nulla tur nos ullamo.",
   // },
   // {
   //    id: 2,
   //    page: "home_three_feature_2",
   //    icon: feature3Icon_5,
   //    title: "Easy Payments",
   //    desc: "quis nostrud exerct ullamo sucirity finibus ne derived.",
   // },
   // {
   //    id: 3,
   //    page: "home_three_feature_2",
   //    icon: feature3Icon_6,
   //    title: "Quick Process",
   //    desc: "Duis aute irure dolor reprehe de Cicero's voluptat velit.",
   // },

   // home_4_feature_1

   // {
   //    id: 1,
   //    page: "home_4_feature_1",
   //    icon: feature6Icon_1,
   //    title: "Buy a home",
   //    btn: "Find Home",
   //    desc: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
   // },
   // {
   //    id: 2,
   //    page: "home_4_feature_1",
   //    icon: feature6Icon_2,
   //    title: "Rent a home",
   //    btn: "Rent Home",
   //    desc: "Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.",
   //    data_delay_time: "0.1s",
   // },
   // {
   //    id: 3,
   //    page: "home_4_feature_1",
   //    icon: feature6Icon_3,
   //    title: "Sell a home",
   //    btn: "Sell Property",
   //    desc: "List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.",
   //    data_delay_time: "0.2s",
   // },

   // home_5_feature_1

   // {
   //    id: 1,
   //    page: "home_5_feature_1",
   //    item_bg: "home-5-feature-item-1",
   //    title: "California",
   //    desc: "1,230 Listing",
   // },
   // {
   //    id: 2,
   //    page: "home_5_feature_1",
   //    item_bg: "home-5-feature-item-2",
   //    title: "Miami",
   //    desc: "1,140 Listing",
   //    data_delay_time: "0.1s",
   // },
   // {
   //    id: 3,
   //    page: "home_5_feature_1",
   //    item_bg: "home-5-feature-item-3",
   //    title: "New York",
   //    desc: "1,740 Listing",
   //    data_delay_time: "0.2s",
   // },
   // {
   //    id: 4,
   //    page: "home_5_feature_1",
   //    item_bg: "home-5-feature-item-4",
   //    title: "Washington DC",
   //    desc: "720 Listing",
   //    data_delay_time: "0.3s",
   // },

   // home_6_feature_1
   
   // {
   //    id: 1,
   //    page: "home_6_feature_1",
   //    icon:feature7Icon_1,
   //    title: "Property Insurance",
   //    desc: "Elit esse cillum dol fug nulla tur nos ullamo.",
   // },
   // {
   //    id: 2,
   //    page: "home_6_feature_1",
   //    icon:feature7Icon_2,
   //    title: "Easy Payments",
   //    desc: "quis nostrud exerct ulla security finibus ne derived.",
   // },
   // {
   //    id: 3,
   //    page: "home_6_feature_1",
   //    icon:feature7Icon_3,
   //    title: "Quick Process",
   //    desc: "Duis aute irure do reprehe de Cicero's voluptat velit.",
   // },
]

export default feature_data;
