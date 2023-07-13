import React, {useState} from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';


function App() {

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1542442828-287217bfb87f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1559221940-a998d3eb9f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&w=1000&q=80',
    },
    {
      url: 'https://images4.alphacoders.com/273/273256.jpg',
    },

    {
      url: 'https://images.unsplash.com/photo-1595123550441-d377e017de6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwYm9va3N8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    {
      url: 'https://png.pngtree.com/background/20230425/original/pngtree-autumn-paths-in-kyoto-fhd-44-picture-image_2471080.jpg',
    },
  ];

  const [index, setIndex] = useState(0);

  function prevSlide(){
    const isFirstSlide = index === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : index - 1;
    setIndex(newSlide);
  }

  function nextSlide(){
    const isLastSlide = index === slides.length - 1;
    const newSlide = isLastSlide ? 0 : index + 1;
    setIndex(newSlide);
  }

  function goToSlide(index){
    setIndex(index);
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
       <div className='font-bold text-center text-4xl pb-5'><h1>React Slider App</h1></div>
       <div 
       style={{backgroundImage:`url(${slides[index].url})`}} 
       className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
       </div>
        {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
          <BsChevronCompactLeft 
          onClick={prevSlide}
          size={30}/>
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
          <BsChevronCompactRight 
          onClick={nextSlide}
          size={30}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide,index) => {
            return <div 
            key={index}
            onClick={()=> goToSlide(index)}
            className='text-2xl cursor-pointer' 
            >
              <RxDotFilled/>
            </div>
          })}
        </div>
        <div className='foot' >
          <p>Made By Vamsidhar Gokavarapu</p>
        </div>
    </div>
  );
}

export default App;
