import PropTypes from 'prop-types';

export const rInputPropTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  rules: PropTypes.object,              
  label: PropTypes.string,
  type: PropTypes.string,               
  readOnly: PropTypes.bool,
  form: PropTypes.object,               
  className: PropTypes.string,
  disabled:PropTypes.bool
};

export const defaultRInputPropTypes = {
  name: '',
  rules: {},             
  label: '',
  type: 'text',               
  readOnly: false,
  className: '',
  disabled:false
};

export const rButtonPropTypes = {
  name: PropTypes.string,
  type: PropTypes.string, 
  disabled: PropTypes.bool,
  className: PropTypes.string,
}; 

export const defaultRButtonPropTypes = {
  name: '',
  type: 'button',  
  disabled:false,
  className: '',           
};

export const rBasicLinkPropTypes = {
  text: PropTypes.string,
  textClass: PropTypes.string, 
  linkText:PropTypes.string,
  linkClass: PropTypes.string,
  linkRoute: PropTypes.string,
}; 

export const defaultRBasicLinkPropTypes = {
  text: 'Pre-Link Text',
  linkText:'Link',
  linkRoute:'',
  textClass:'' , 
  linkClass: '',
};


export const rComboPropTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  idCol: PropTypes.string,
  nameCol: PropTypes.string,
  updateTrigger: PropTypes.number,
  label: PropTypes.string,

}; 

export const defaultRComboPropTypes = {
  dataApi: '',
  placeholder: 'Select an option',
  onSelect:() => {},
  idCol: '',
  nameCol: '',
  updateTrigger: -1,
label:''
};


export const rGridPropTypes = {
  gridConfig: PropTypes.arrayOf(PropTypes.object),
  dataApi:PropTypes.string,
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  primaryKey: PropTypes.string,
  canPrint: PropTypes.boolean,
  onPrint: PropTypes.func,
  printFileName: PropTypes.string,

}; 

export const defaultRGridPropTypes = {
  gridConfig: [],
  dataApi: '',
  onAdd: () => {},      
  onEdit: () => {},
  onDelete: () => {},
  primaryKey: '',
  canPrint: true,
  onPrint: () => {},
  printFileName:'Grid Data'
};

export const rNavbarPropTypes = {
  navData: PropTypes.arrayOf(PropTypes.object),
}; 

export const defaultRNavbarPropTypes = {
  navData: [],
};


