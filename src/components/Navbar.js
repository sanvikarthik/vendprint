import React, { useState, useContext } from 'react';
import { DocumentContext } from './DocumentContext';
import GetLocation from './GetLocation';
import menu from '../assets/menu_FILL0_wght400_GRAD0_opsz24 (1).png';
import close from '../assets/close_FILL0_wght400_GRAD0_opsz24 (1).png';

const Navbar = () => {
  const { getLocation, isAddressProvided, renderOnce, location } = useContext(DocumentContext);
  const [toggle, setToggle] = useState(true);

  const renderLocation = () => {
    return (
      <span className='text-white'>
        {!isAddressProvided
          ? " Select Location"
          : location && location.address && location.address.length > 50
            ? location.address.slice(0, 50) + '...'
            : location && location.address
        }
      </span>
    );
  };

  return (
    <>
      {!isAddressProvided && !renderOnce && <GetLocation getLocation={getLocation} />}
      {/* Header */}
      <div className='flex justify-center items-center mt-6 font-sans'>
        <div className='flex justify-between items-center px-10 py-5 bg-blue-400 max-sm:px-5 w-[90%] rounded-xl relative max-md:w-[95%]'>
          <h1 className='font-bold text-white text-3xl max-sm:text-sm '>VENDO PRINT</h1>
          <div className='max-md:hidden'>
            {renderLocation()}
          </div>

          <div className='hidden max-md:block'>
            {toggle ? <img src={close} onClick={() => setToggle(false)} className='cursor-pointer' alt='Close menu button' /> : <img src={menu} onClick={() => setToggle(true)} className='cursor-pointer' alt='Open menu button' />}
            {toggle &&
              <div className='bg-blue-400 w-[100%] left-0 flex justify-start items-center flex-col p-10 rounded-b-xl absolute'>
                <li className='list-none text-white cursor-pointer'>
                  <ul className='text-xl mb-4'>Student</ul>
                  <ul className='text-xl mb-4'>Teacher</ul>
                </li>
                {renderLocation()}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;