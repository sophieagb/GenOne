"use client";

import { useEffect, useState } from "react";


export default function Pdfuploader() {



  const [selectedImage, setSelectedImage] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleImage(file);
  };

  const handleImage = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageUrl = reader.result;
        setSelectedImage(imageUrl);
      };

      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  };
    

    return(

        <div>
        
            {selectedImage ? (
        <div className="bg-white flex w-[560px] max-w-full flex-col items-stretch mt-7 px-20 py-9 rounded-[30px] self-start max-md:px-5">
          <img src={selectedImage} alt="Selected" className="max-w-full mb-4 rounded-md" />
          <button className="text-white text-3xl font-semibold whitespace-nowrap bg-sky-700 justify-center items-stretch px-14 py-5 rounded-[30px] max-md:mx-1.5 max-md:px-5" onClick={() => console.log("converting image")}>
                    Convert
                  </button>
        </div>
      ) : ( <div className="bg-white flex w-[560px] max-w-full flex-col items-stretch mt-7 px-20 py-9 rounded-[30px] self-start max-md:px-5" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e)}>
                  <button className="text-white text-3xl font-semibold whitespace-nowrap bg-sky-700 place-content-center items-stretch px-14 py-5 rounded-[30px] max-md:mx-1.5 max-md:px-5">
                    <label className="cursor-pointer"><input type="file" className="hidden" accept="image/*" onChange={handleFileInputChange} />Upload Document </label>
                  </button>
                  <div className="text-neutral-600 text-center text-3xl font-semibold mt-5">
                    <span className="text-neutral-600" >or drop a file</span>{" "}
                  </div></div>)}
        
        
       </div>

    );
}


