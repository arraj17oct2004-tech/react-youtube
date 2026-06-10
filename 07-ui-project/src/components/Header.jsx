

const Header = () => {
  return (
    <div className="h-16 w-screen p-3 flex justify-between ">
         <div className="p-5 font-bold bg-black h-2 w-50 flex justify-center items-center rounded-3xl text-white">
            Target Audience
         </div>

         <div className=" w-100 px-10  flex  justify-around items-center text-black font-medium">
               <span>
                  ⤷
               </span>
               <span>
                  Digital
               </span>
               <span>
                  Banking
               </span>
               <span>
                  Platform
               </span>
         </div>
    </div>
  )
}

export default Header
