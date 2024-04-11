import NiceSelect from "@/ui/NiceSelect";

const DropdownOne = ({ style }: any) => {

   const selectHandler = (e: any) => { };

   const searchHandler = () => {
      window.location.href = '/listing_0';
   };

   return (
      <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
         <div className="row gx-0 align-items-center">
            <div className="col-xl-3 col-lg-2">
            </div>
            <div className={`${style ? "col-xl-3" : "col-xl-4"} col-lg-4`}>
               <div className="input-box-one lg-mt-10">
                  <button className={`fw-500 tran3s ${style ? "w-100 tran3s search-btn-three" : "text-uppercase search-btn"}`}>{style ? "Get Quote" : "Get Quote"}</button>
               </div>
            </div>
            <div className="col-xl-3 col-lg-2">
               <div className="input-box-one lg-mt-10">
                  <button className={`fw-500 tran3s ${style ? "w-100 tran3s search-btn-three" : "text-uppercase search-btn"}`}>{style ? "Book Now" : "Book Now"}</button>
               </div>
            </div>
            <div className={`${style ? "col-xl-3" : "col-xl-2"}`}>
            </div>
         </div>
      </form>
   );
};

export default DropdownOne;
