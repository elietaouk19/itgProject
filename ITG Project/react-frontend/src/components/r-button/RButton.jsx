import React from 'react';
import {rButtonPropTypes,defaultRButtonPropTypes} from '@common/PropTypes';


const RButton = ({
  name='',
  type='button',
  disabled=false,
  onActivate = () => {},
  className = 'w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-150 mt-4',
  ...rest
}) => {
  return (
    <div className="mb-5">
                  {type==='button' ? (
                    <button
                    type={type}
                    disabled={disabled}
                    className={className}
                    onClick={onActivate}>
                      {name}
                    </button>
                  ):(
                       <input
                        type={type}
                        disabled={disabled}
                        className={className}
                        {...rest}
                      />
                  )} 
            
           
    </div>
  );
};


RButton.propTypes = rButtonPropTypes;
RButton.defaultProps = defaultRButtonPropTypes;

export default RButton;
