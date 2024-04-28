import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadFiles from '../assets/upload_files_colour.webp';
import { DocumentContext } from './DocumentContext';

function DocumentUpload() {
  const { file, isAddressProvided, fileInputRef, handleFileChange, handleButtonClick } = useContext(DocumentContext);
  const navigate = useNavigate();

  // Function to navigate to next page
  const handleNext = () => {
    if (file && isAddressProvided) { // Check if file is selected and address is provided
      navigate('/printing-options');
    } else {
      alert('Please select a file and provide the address.');
    }
  };

  return (
    <div className='max'>
      {/* Main Content */}
      <div className='flex justify-center items-center p-10 mt-16 max-lg:mt-10 max-sm:p-3'>
        <div>
          {/* Document Upload Section */}
          <div className='flex flex-col gap-y-5 mb-10 text-center '>
            <h1 className='text-6xl font-bold font-sans max-sm:text-4xl'>Vendo print</h1>
            <p className='font-sans text-xl text-bold'>provides Safe & Secure printouts</p>
          </div>
          <div className='bg-gray-200 p-10 rounded-xl mb-5 max-sm:p-4 max-sm:py-10 '>
            <div>
              {/* Display upload section */}
              <div className='flex items-center justify-center mb-10 mx-5 gap-x-8 max-sm:hidden'>
                <img src={uploadFiles} className='w-[100px]' alt="Upload files"/>
                <div>
                  <h1 className='text-2xl mb-3 font-sans font-bold  max-sm:text-xl'>Upload your Files</h1>
                  <p><span>We support all popular formats like PDF,</span><br/> <span>JPG, PNG, JPEG etc</span></p>
                </div>
              </div>
              <div className='items-center flex-col justify-center mb-10 mx-5 gap-x-8 hidden max-sm:flex '>
                <div className='flex gap-3 justify-center items-center pb-5'>
                  <img src={uploadFiles} className='w-[100px]' alt="Upload files"/>
                  <h1 className='text-2xl mb-3 font-sans font-bold  max-sm:text-xl'>Upload your Files</h1>
                </div>
                <div>
                  <p><span>We support all popular formats like PDF,</span> <span>JPG, PNG, JPEG etc</span></p>
                </div>
              </div>
            </div>
            <div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              {/* Display button based on file and address availability */}
              {file ? (
                <button onClick={handleNext} disabled={!isAddressProvided} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded w-[80%]  mr-auto ml-auto block">
                  Next
                </button>
              ) : (
                <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded w-[80%]  mr-auto ml-auto block">Choose File</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentUpload;