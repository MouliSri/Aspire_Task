
import { useState ,useEffect} from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import cloths from "../images/cloths.jpg"
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"

import $ from "jquery";


export default function Poster( ) {


  useEffect(() => {
   

    $(".cloths").click(()=>{
        $(".cloth-img").fadeToggle(1000)
      
        // $(".brands").scrollLeft(500)

    })
}, []);
    
    const images=[cloths,pic3,pic1,pic2];
   

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative  py-20">
    <h1 className=" cloths text-3xl text-gray-600 text-center uppercase font-semibold mb-7">Quality Cloths</h1>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className=" cloth-img w-full   h-[30vh] sm:h-[80vh]  flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <img
                  key={image.id}
                  src={image}
                
                  fill
                 
                  className="animate-fadeIn  object-fill   duration-500"
                  alt="Images"
                

                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-black rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}