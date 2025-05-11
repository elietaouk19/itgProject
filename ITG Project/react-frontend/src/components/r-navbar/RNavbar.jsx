import React from 'react';
import { rNavbarPropTypes, defaultRNavbarPropTypes } from '@common/PropTypes';
import { Link } from 'react-router-dom';

const RNavbar = ({
  navData = [],
}) => {
  return (
    <nav className="bg-[#008080] text-white  shadow-md">
      <div className="container flex justify-between items-center">
        <img 
          src="/src/assets/itgLogoNoBackgroud.png" 
          alt="ITG Logo" 
          className="h-13 object-contain pl-7"
        />
        <div className="space-x-4 !pr-10">
          {navData.map((item, index) => (
            <Link key={index} to={item.linkTo} className="hover:underline">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

RNavbar.propTypes = rNavbarPropTypes;
RNavbar.defaultProps = defaultRNavbarPropTypes;

export default RNavbar;
