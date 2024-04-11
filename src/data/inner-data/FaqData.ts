interface DataType {
   id: number;
   id_name: string;
   title: string;
   md_pt?:boolean;
   faq: {
      id: number;
      question: string;
      answer: string;
   }[];
}

const inner_faq_data:DataType[] = [
   {
      id: 1,
      id_name: "Ceramic Coating",
      title: "Ceramic Coating",
      md_pt:true,
      faq: [
         {
            id: 1,
            question: "What is ceramic coating?",
            answer: "Ceramic coating is a liquid polymer applied to the exterior of vehicles, surfaces, or objects to provide a protective layer that enhances their durability, appearance, and resistance to various environmental factors.",
         },
         {
            id: 2,
            question: "How does ceramic coating work?",
            answer: "Ceramic coating forms a chemical bond with the surface it's applied to, creating a protective layer that is highly hydrophobic and resistant to UV rays, chemicals, dirt, and minor scratches. This layer acts as a barrier, preventing contaminants from adhering directly to the surface.",
         },
         {
            id: 3,
            question: "What are the benefits of using ceramic coating?",
            answer: "Ceramic coating offers several benefits, including enhanced gloss and shine, increased resistance to scratches and chemical damage, easier cleaning due to reduced dirt adherence, and protection against UV fading and oxidation.",
         },
         {
            id: 4,
            question: "How long does ceramic coating last?",
            answer: "The longevity of ceramic coating can vary depending on the quality of the product, application method, and environmental conditions. Generally, it can last anywhere from 1 to 5 years, with some premium coatings lasting even longer.",
         },
         {
            id: 5,
            question: "Can anyone apply ceramic coating themselves?",
            answer: "While DIY ceramic coating kits are available, achieving professional-level results can be challenging. Proper surface preparation, application techniques, and environmental conditions are crucial for a successful application. Many people opt to have ceramic coating applied by trained professionals.",
         },
         {
            id: 6,
            question: "Is ceramic coating only used on cars?",
            answer: "No, ceramic coating can be applied to various surfaces, including cars, motorcycles, boats, RVs, Planes, household appliances, electronics and the list goes on.",
         },
         {
            id: 7,
            question: "Is ceramic coating a replacement for waxing or polishing?",
            answer: "Ceramic coating offers longer-lasting protection compared to traditional waxes and sealants. While it doesn't replace the need for occasional polishing to remove deeper imperfections, it significantly reduces the frequency of waxing and enhances the overall appearance.",
         },
         {
            id: 8,
            question: "Can ceramic coating prevent rock chips and heavy scratches?",
            answer: "Ceramic coating provides some level of protection against light scratches and rock chips due to its hardness and the hydrophobic barrier it creates. However, it's not a substitute for paint protection films (clear bras) or proper driving practices to avoid heavy impact damage.",
         },
         {
            id: 9,
            question: "Can ceramic coating be applied to damaged or repainted surfaces?",
            answer: "It's recommended to apply ceramic coating to surfaces in good condition. While it can improve the appearance of minor imperfections, it won't correct significant damage. For repainted surfaces, the paint should be fully cured and free from contaminants before applying ceramic coating.",
         },
         {
            id: 10,
            question: "Does ceramic coating eliminate the need for regular washing?",
            answer: "While ceramic coating makes cleaning easier and reduces the adherence of dirt, it doesn't eliminate the need for regular washing. Regular maintenance washes are still necessary to keep the coated surface looking its best and to prevent the buildup of contaminants.",
         },
         {
            id: 11,
            question: "Does ceramic coating improve the resale value of a vehicle?",
            answer: "Applying a ceramic coating can enhance the overall appearance and condition of a vehicle, which may contribute to a higher resale value. However, the actual impact on resale value can vary depending on other factors such as the vehicle's make, model, condition, and market demand.",
         },
         {
            id: 12,
            question: "Is ceramic coating resistant to water spotting?",
            answer: "Ceramic coatings' hydrophobic properties make them more resistant to water spotting compared to unprotected surfaces. Water beads up and rolls off more easily, reducing the chances of mineral deposits forming on the paint. However, water spots can still occur under certain conditions.",
         },
         {
            id: 13,
            question: "Can I apply ceramic coating on a matte or satin finish?",
            answer: "Yes, there are ceramic coatings designed specifically for matte and satin finishes. These coatings provide the protective benefits without altering the surface's appearance, sheen, or texture.",
         },
         {
            id: 14,
            question: "How do I maintain a vehicle with ceramic coating?",
            answer: "Regular maintenance involves using pH-neutral car wash soaps, microfiber wash mitts, and soft drying towels to avoid scratching the coated surface. Avoid automatic car washes with harsh chemicals and brushes. Periodic inspections and gentle decontamination processes may also be recommended.",
         },
         {
            id: 15,
            question: "Can ceramic coating be removed once applied?",
            answer: "Yes, ceramic coating can be removed, but the process is labor-intensive and often requires special polishing techniques. It's not a simple task and is best performed by professionals.",
         },
         {
            id: 16,
            question: "Can I wash my car immediately after applying ceramic coating?",
            answer: "Most ceramic coatings require a curing period, which can range from a few hours to a few days, during which the surface should not come into contact with water. It's important to follow the manufacturer's guidelines regarding curing times and post-application care.",
         },
         {
            id: 17,
            question: "Can I apply wax or sealant on top of ceramic coating?",
            answer: "It's generally not necessary to apply wax or sealant on top of ceramic coating, as the coating itself provides a durable protective layer. Wax and sealants may not adhere well to the ceramic coating's hydrophobic surface. However, some hybrid products exist that combine ceramic coating and traditional protection.",
         },
         {
            id: 18,
            question: "Is ceramic coating heat-resistant?",
            answer: "Ceramic coating can withstand moderate levels of heat, such as those generated by the sun or a hot engine. However, it's not intended as a heat-resistant solution for extremely high temperatures, such as those found in the engine bay. Specialized high-temperature coatings are designed for that purpose.",
         },
         {
            id: 19,
            question: "Does ceramic coating provide protection against bird droppings and tree sap?",
            answer: "Yes, ceramic coating forms a protective barrier that makes it harder for bird droppings, tree sap, and other contaminants to bond to the surface. This gives you more time to clean these substances without causing damage to the underlying paint.",
         },
         {
            id: 20,
            question: "Is ceramic coating safe for all types of paint and finishes?",
            answer: "Ceramic coating is generally safe for most factory paint finishes, including clear coats. However, it's recommended to perform a spot test on a small, inconspicuous area before applying it to the entire surface, especially if the paint is custom or aftermarket.",
         },
         {
            id: 21,
            question: "Can I apply ceramic coating to wheels and exhaust tips?",
            answer: "Yes, ceramic coating can be applied to wheels and exhaust tips to provide protection against brake dust, road grime, and heat. High-temperature-resistant ceramic coatings are available specifically for exhaust tips.",
         },
         {
            id: 22,
            question: "Can ceramic coating be applied to glass surfaces?",
            answer: "Yes, ceramic coating can be applied to glass surfaces to enhance their water repellency and improve visibility during rainy conditions. There are specific ceramic coatings formulated for glass that can also provide some resistance against mineral deposits and easier cleaning.",
         },
         {
            id: 23,
            question: "Can I apply multiple layers of ceramic coating for better protection?",
            answer: "Some ceramic coatings allow for layering to enhance the thickness and durability of the protective barrier. However, excessive layering might not necessarily provide significantly better results and could lead to uneven application.",
         },
         {
            id: 24,
            question: "Can I apply ceramic coating in extreme temperatures?",
            answer: "It's best to apply ceramic coating in moderate temperatures and controlled environments. Extreme heat or cold can affect the application and curing process. Ideally, the temperature should be around 50-85°F (10-30°C) with low humidity for optimal results.",
         },
      ]
   },
   // {
   //    id: 2,
   //    id_name: "Renting",
   //    title: "RENTING",
   //    faq: [
   //       {
   //          id: 5,
   //          question: "Can a home depreciate in value?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //       {
   //          id: 6,
   //          question: "Is an older home as good a value as a new home?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //       {
   //          id: 7,
   //          question: "What is a broker?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //       {
   //          id: 8,
   //          question: "Can I pay my own taxes and insurance?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //    ]
   // },
   // {
   //    id: 3,
   //    id_name: "Buying",
   //    title: "BUYING",
   //    faq: [
   //       {
   //          id: 9,
   //          question: "How does the free trial work?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //       {
   //          id: 10,
   //          question: "How do you weigh different criteria in your process?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //       {
   //          id: 11,
   //          question: "Refund & Frauds",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //    ]
   // },
   // {
   //    id: 4,
   //    id_name: "Payments",
   //    title: "PAYMENTS",
   //    faq: [
   //       {
   //          id: 12,
   //          question: "Which payment method is supported?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //       {
   //          id: 13,
   //          question: "Is my card is secure here?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //       {
   //          id: 14,
   //          question: "Can I provide cheque to my client for payment?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //    ]
   // },
   // {
   //    id: 5,
   //    id_name: "Terms",
   //    title: "TERMS & CONDITIONS",
   //    faq: [
   //       {
   //          id: 15,
   //          question: "How does the free trial work?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //       {
   //          id: 16,
   //          question: "How do you weigh different criteria in your process?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //    ]
   // },
   // {
   //    id: 6,
   //    id_name: "Account",
   //    title: "ACCOUNT",
   //    faq: [
   //       {
   //          id: 17,
   //          question: "Can a home depreciate in value?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //       {
   //          id: 18,
   //          question: "Is an older home as good a value as a new home?",
   //          answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
   //       },
   //    ]
   // },
]

export default inner_faq_data;
