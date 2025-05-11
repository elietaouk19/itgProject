import React, { useState, useEffect } from 'react';
import { useAxios } from '@common/AxiosContext';
import { rGridPropTypes, defaultRGridPropTypes } from '@common/PropTypes';
import { downloadHTML } from '@assets/downloadableHtmlTemplate.js';
import { PlusCircle, Printer, Pencil, Trash2 } from 'lucide-react';

const RGrid = ({
  gridConfig = [],
  dataApi = '',
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  onPrint = () => {},
  primaryKey = 'id',
  valueToFilter = '',
  canPrint = true,
  printFileName = 'Grid Data'
}) => {
  const [dataJson, setJsonData] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataApi, { isAlert: false });
        let allData = response.data.data;
        if (valueToFilter && valueToFilter[primaryKey]) {
          allData = allData.filter(
            item => item[primaryKey] === valueToFilter[primaryKey]
          );
        }
        setJsonData(allData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataApi, valueToFilter]);

  const handleDelete = (id) => {
    const updatedData = dataJson.filter(item => item[primaryKey] !== id);
    setJsonData(updatedData);
    onDelete && onDelete(id);
  };

  const handleEdit = (id) => {
    onEdit && onEdit(id);
  };

  const handlePrint = (gridConfig, dataJson) => {
    let htmlTemplate = downloadHTML(gridConfig, dataJson);
    const blob = new Blob([htmlTemplate], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${printFileName}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onPrint();
  };

  return (
    <div className="w-full bg-white text-gray-800 rounded-xl p-6 h-full flex-grow overflow-auto">
      <div className="flex justify-end gap-2 mb-4">
        {onAdd && (
          <button
            onClick={onAdd}
            className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
          >
            <PlusCircle className="w-5 h-5" />
          </button>
        )}
        {canPrint && (
          <button
            onClick={() => handlePrint(gridConfig, dataJson)}
            className="flex items-center gap-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow"
          >
            <Printer className="w-5 h-5" />
          </button>
        )}
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
        <thead className="bg-gray-100">
          <tr>
            {gridConfig.map((col, index) => (
              <th key={index} className="text-center px-6 py-3 text-sm font-semibold text-gray-700 border-b">
                {col.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataJson.map((row, rowIndex) => (
            <tr key={row[primaryKey] || rowIndex} className="even:bg-gray-50">
              {gridConfig.map((col, colIndex) => (
                <td key={colIndex} className="text-center px-6 py-3 text-sm text-gray-800 border-b">
                  {col.isEdit ? (
                    <button
                      onClick={() => handleEdit(row[primaryKey])}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-1"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  ) : col.isDelete ? (
                    <button
                      onClick={() => handleDelete(row[primaryKey])}
                      className="bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  ) : (
                    row[col.field]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

RGrid.propTypes = rGridPropTypes;
RGrid.defaultProps = defaultRGridPropTypes;

export default RGrid;