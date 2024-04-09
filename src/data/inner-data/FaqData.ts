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
      id_name: "Selling",
      title: "SELLING",
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
      ]
   },
   {
      id: 2,
      id_name: "Renting",
      title: "RENTING",
      faq: [
         {
            id: 5,
            question: "Can a home depreciate in value?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 6,
            question: "Is an older home as good a value as a new home?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 7,
            question: "What is a broker?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 8,
            question: "Can I pay my own taxes and insurance?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
      ]
   },
   {
      id: 3,
      id_name: "Buying",
      title: "BUYING",
      faq: [
         {
            id: 9,
            question: "How does the free trial work?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 10,
            question: "How do you weigh different criteria in your process?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 11,
            question: "Refund & Frauds",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
      ]
   },
   {
      id: 4,
      id_name: "Payments",
      title: "PAYMENTS",
      faq: [
         {
            id: 12,
            question: "Which payment method is supported?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 13,
            question: "Is my card is secure here?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 14,
            question: "Can I provide cheque to my client for payment?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
      ]
   },
   {
      id: 5,
      id_name: "Terms",
      title: "TERMS & CONDITIONS",
      faq: [
         {
            id: 15,
            question: "How does the free trial work?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 16,
            question: "How do you weigh different criteria in your process?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
      ]
   },
   {
      id: 6,
      id_name: "Account",
      title: "ACCOUNT",
      faq: [
         {
            id: 17,
            question: "Can a home depreciate in value?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 18,
            question: "Is an older home as good a value as a new home?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
      ]
   },
]

export default inner_faq_data;
