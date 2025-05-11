import React from 'react';
import {rBasicLinkPropTypes,defaultRBasicLinkPropTypes} from '@common/PropTypes';
import { Link } from 'react-router-dom';

const RBasicLink = ({
  text='Pre-Link Text',
  linkText='Link',
  textClass='',
  linkClass='',
  linkRoute='',
}) => {

  return (
      <div>
              <p className={textClass}>
                {text} <Link to={linkRoute} className={linkClass}>{linkText}</Link>
              </p>
            </div>
  );
};

RBasicLink.propTypes = rBasicLinkPropTypes;
RBasicLink.defaultProps = defaultRBasicLinkPropTypes;


export default RBasicLink;
