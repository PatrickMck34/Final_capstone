import React from 'react';

const Splash = () => {
    return (
    <div className="bg-gray-100">
    <div className="w-full h-8 bg-gray-800 flex flex-col">
      <div className="text-white justify-center items-center mt-1  flex">
        <button className=" px-8 ">All</button>
        <button className="ml-auto  px-6">Computers</button>
        <button className="pr-6">Desk Chairs</button>
        <button className="mr-auto">Accessories</button>

      </div>

    </div>
    <div className="h-72 w-full  ">
      <img className="w-[95%] mx-auto h-72 shadow-2xl "  src="https://i.postimg.cc/4y0118np/clone-Banner.jpg" alt="banner"></img>

    </div>
    <div className=" bg-gradient-to-t shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  from-slate-300  via-slate-200 via-40% to-stone-900/75  to-90% w-[95%] h-72 text-black flex flex-row justify-center mx-auto mt-[-2.5em]">
       
    
      <div className="w-[23%]  bg-white ml-3">
     
       <div className="text-xl ml-2 font-semibold font-serif">Latest Computers</div>
        <div className="flex flex-row justify-between mx-5 p-2">
          <div>
          <img className="h-20 " src={'https://m.media-amazon.com/images/I/71Lczneb0VL._AC_SL1500_.jpg'} alt="" />
          <p className="text-xs font-serif">iBUYPOWER Pro </p>
          </div>
          <div>
          <img className="h-20" src={'https://m.media-amazon.com/images/I/713XHpvZRML._AC_SL1500_.jpg'} alt="" />
          <p className="text-xs font-serif">CyberpowerPC</p>
          </div>
        
     
    
          </div>
          <div>
          <img className="h-20 mx-5" src={'https://m.media-amazon.com/images/I/81YUHsnzj1L._AC_SL1500_.jpg'} alt="" />
          <p className="text-xs mx-5 font-serif">Alienware Aurora</p>
       
        
        </div>
      </div> 
      <div className="w-[23%]  bg-white ml-3">
        <div className="text-xl ml-2 font-semibold font-serif">Elite Gaming Chairs</div>
        <div className="flex flex-row justify-between mx-5 p-2">
          <div>
          <img className="h-20" src={"https://m.media-amazon.com/images/I/61OvRdy6n1L._AC_SL1080_.jpg"} alt="" />
          <p className="text-xs font-serif">Fly YUTING</p>
          </div>
          <div>
          <img className="h-20" src={"https://m.media-amazon.com/images/I/61SZuCXn5hL._AC_SL1200_.jpg"} alt="" />
          <p className="text-xs font-serif">YUYTIN Super</p>
          </div>
        </div>
        
     
      <div className="flex flex-row justify-between p-6 mt-16">
          <div>left</div>
          <div>right</div>
        </div>
      </div>
      <div className="w-[23%]  bg-white ml-3">
        <div className="text-xl ml-2 font-semibold font-serif">Must have Accessories</div>
        <div className="flex flex-row justify-between mx-5 p-2">
          <div>
          <img className="h-20" src={"https://i.postimg.cc/bNzvkCD4/monitor.jpg"} alt="" />
          <p className="text-xs font-serif">Odyssey Ark 55</p>
          </div>
          <div>right</div>
        </div>
        
     
      <div className="flex flex-row justify-between p-6 mt-16">
          <div>
          </div>
          <div>right</div>
        </div>
      </div>
      <div className="  mx-6 flex flex-col  w-72">

      <div className="bg-white  flex flex-col  mr-[-26em] w-[105%] h-28">
        
        <div className="flex flex-row ">Upgrade your lifestyle with GNC
          <img className="ml-auto mt-[-1] " src="https://i.postimg.cc/PqM8hMD1/gnc.jpg" alt="Vitamins Loading"></img>
        </div>
      </div>

        <div className="bg-transparent mt-6 w-72 ml-2 mx-auto h-60  ">
          <img className="h-[90%] mx-auto"  src="https://i.postimg.cc/7LxNqLBR/Amzn-Fallback-300x250.jpg"></img>
        </div>
    </div>
      </div>
  </div>
)
}

export default Splash