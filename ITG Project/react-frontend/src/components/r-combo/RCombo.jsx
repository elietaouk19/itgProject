import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, XCircle } from 'lucide-react'; 
import { useAxios } from '@common/AxiosContext'; 
import { rComboPropTypes, defaultRComboPropTypes } from '@common/PropTypes';
 
const RCombo = ({ dataApi='', onSelect=() => {}, placeholder='Select an option', idCol='id', nameCol='name' ,updateTrigger=-1,label='' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const dropdownRef = useRef();
  const axios = useAxios();

  useEffect(() => {
    const fetchData = async () => {
          try {
        const response = await axios.get(dataApi, { isAlert: false });
        console.log('API Response:', response.data.data);

        if (Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          console.error('API data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 setSearchTerm(''); 
    onSelect && onSelect(null);
    setSelected(null);
    fetchData();
   
  }, [updateTrigger]); 

  useEffect(() => {
    if (Array.isArray(data)) {
      setFilteredData(
        data.filter((item) =>
          item[nameCol].toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, data]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
    onSelect && onSelect(item);
  };

  return (
    <div className="relative w-64 pl-6" ref={dropdownRef}>
      {label && (
          <label
            htmlFor={name}
            className="w-32  font-medium text-gray-700"
          >
            {label}
          </label>
        )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm text-sm text-gray-700 hover:border-blue-400"
      >
        <span className="truncate">
          {selected ? selected[nameCol] : placeholder}
        </span>
        <div className="flex items-center gap-2">
          {selected && (
            <div
              onClick={(e) => {
                e.stopPropagation(); 
                setSelected(null); 
                setSearchTerm(''); 
                onSelect && onSelect(null); 
              }}
              className="text-gray-400 hover:text-red-500"
              title="Clear selection"
            >
              <XCircle className="h-5 w-5" /> 
            </div>
          )}
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 text-sm border-b border-gray-200 focus:outline-none"
            placeholder="Search..."
          />
          <ul className="max-h-40 overflow-y-auto">
            {filteredData.length === 0 ? (
              <li className="px-4 py-2 text-sm text-gray-500">No results found</li>
            ) : (
              filteredData.map((item) => (
                <li
                  key={item[idCol] || item[nameCol]}
                  onClick={() => handleSelect(item)}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm"
                >
                  {item[nameCol]}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

RCombo.propTypes = rComboPropTypes;
RCombo.defaultProps = defaultRComboPropTypes;

export default RCombo;
