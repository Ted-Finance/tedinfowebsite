import React from 'react'
import productList from './menuList.json'
import { Img } from "../Img";
import { Link } from 'react-router-dom';

const HambugerMenu = ({ toggleMenu }) => {
  return (
    <div className='relative flex flex-col items-center w-[399px] h-[411px] rounded-[30px] bg-white-A700'>
      <div className='absolute flex flex-col items-start rounded-lg p-2 w-full'>
        <div className='m-2 flex w-full rounded-lg items-start justify-between' onClick={toggleMenu}>
          <div className="mr-9 cursor-pointer" onClick={toggleMenu}>
            <Img src="images/small-logo.svg" alt="icon" />
          </div>
          <div className="mr-9 cursor-pointer" onClick={toggleMenu}>
            <Img src="images/Hambuger-Button-x.svg" alt="icon" />
          </div>
        </div>
        {productList.map((product, i) => {
          return (
            <Link to={`/${product.path}`} key={i}>
              <div className='flex w-full p-6 cursor-pointer rounded-lg hover:bg-purple-400' key={i}>
                <div>
                  {<Img src={product.icon} alt="icon" />}
                </div>
                <div className="ml-9">
                  <p>{product.name}</p>
                  <p className="text-xs">{product.sunName}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { HambugerMenu };