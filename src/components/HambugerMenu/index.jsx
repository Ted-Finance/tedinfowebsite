import React, { useState, useEffect } from 'react'
import productList from './menuList.json'
import { Img } from "../Img";
import { Link } from 'react-router-dom';

const Accordion = ({ main, items, toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [companyLink, setCompanyLink] = useState('');
  const [learnLink, setlearnLink] = useState('');

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Set companyLink based on items when main is "company"
  useEffect(() => {
    if (main === "Company") {
      const links = items.map((item) => `/${item.path}`);
      setCompanyLink(links);
    }
  }, [main, items]);

  useEffect(() => {
    if (main === "Learn") {
      const links = items.map((item) => `/${item.path}`);
      setlearnLink(links);
    }
  }, [main, items]);

  return (
    <div>
      <div className="m-2 flex w-full rounded-lg items-start justify-between mt-9">
        {main === "Company" ? (
          <a href={companyLink}>
            <p className="ml-1 cursor-pointer mt-1">{main}</p>
          </a>
        ) : main === "Learn" ? (
          <a href={learnLink}>
            <p className="ml-1 cursor-pointer mt-1">{main}</p>
          </a>
        ) :
          main === "Log In" ? (
            <button className="bg-light_blue-300 w-[95%] text-white py-5 rounded-[10px]">
              <div className="flex justify-between items-center">
                <span className="ml-[1rem]">{main}</span>
                <Img src='images/arrow-p-tray.svg' alt='icon' className="mr-[1.5rem]" />
              </div>
            </button>

          ) : main === "Get Started" ? (
            <button className="bg-purple-400 0 w-[95%] text-white py-5 rounded-[10px]">
              <div className="flex justify-between items-center">
                <span className="ml-[1rem]">{main}</span>
                <Img src='images/arrow-up-tray.svg' alt='icon' className="mr-[1.5rem]" />
              </div>
            </button>
          ) : main === "Products" ? (
            <p className="ml-1 cursor-pointer mt-1" onClick={toggleAccordion}>{main}</p>
          ) : (
            <p className="ml-1 cursor-pointer mt-1">{main}</p>
          )}

        {main !== "Log In" && main !== "Get Started" && (
          isOpen ? (
            <Img src="/images/closeUp.svg" alt="icon" className="mr-9 cursor-pointer" onClick={toggleAccordion} />
          ) : (
            <Img src="/images/closeDown.svg" alt="icon" className="mr-9 cursor-pointer" onClick={toggleAccordion} />
          )
        )}
      </div>

      {isOpen && (
        <div>
          {items.map((product, i) => (
            <Link to={`/${product.path}`} key={i}>
              <div className="flex w-full p-6 cursor-pointer rounded-lg hover:bg-purple-400">
                {product.icon && (
                  <div>
                    <img src={product.icon} alt="icon" />
                  </div>
                )}
                <div className="ml-9">
                  <p>{product.name}</p>
                  <p className="text-xs">{product.sunName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};

const HambugerMenu = ({ toggleMenu }) => {
  return (
    <>
      <div className='m-2 flex w-full rounded-lg items-start justify-between mt-9' onClick={toggleMenu}>
        <div className="mr-9 cursor-pointer">
          <Link to="/">
            <Img src="images/small-logo.svg" alt="icon" />
          </Link>
        </div>
        <div className="mr-9 cursor-pointer" onClick={toggleMenu}>
          <Img src="images/Hambuger-Button-x.svg" alt="icon" />
        </div>
      </div>
      <div>
        {productList.map((group, i) => (
          <Accordion key={i} main={group.main} items={group.items} />
        ))}
      </div>
    </>
  );
};


export { HambugerMenu };

