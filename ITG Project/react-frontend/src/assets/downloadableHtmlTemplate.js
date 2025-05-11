export function downloadHTML(gridConfig,dataJson) {
  const fieldToHeaderMap = {};
  console.log(dataJson);

  gridConfig.forEach(col => {
    if (col.field) {
      fieldToHeaderMap[col.field] = col.headerName;
    }
  });
  const alteredData = dataJson.map(item => {
    const newItem = {};
   for (let key in item) {
    const newKey = fieldToHeaderMap[key] || key; 
   newItem[newKey] = item[key];
    }
    return newItem;
  });

  const headers = Object.keys(alteredData[0]);


  let html = `
    <html>
  <head>
    <meta charset="UTF-8">
    <title>Data Table</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Inter', sans-serif;
        background-color: #f9fafb;
        margin: 0;
        padding: 2rem;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        background-color: white;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }

      thead {
        background-color: #ef4444; /* red-500 */
        color: white;
      }

      th, td {
        padding: 1rem;
        text-align: left;
      }

      th {
        font-weight: 600;
        font-size: 0.95rem;
      }

      tbody tr {
        border-top: 1px solid #f3f4f6; /* gray-100 */
        transition: background-color 0.2s ease;
      }

      tbody tr:hover {
        background-color: #fef2f2; /* red-50 */
      }

      td {
        font-size: 0.9rem;
        color: #374151; /* gray-700 */
      }

      /* Responsive tweaks */
      @media (max-width: 768px) {
        table, thead, tbody, th, td, tr {
          display: block;
        }

        thead {
          display: none;
        }

        tr {
          margin-bottom: 1rem;
          border-radius: 8px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
          background-color: white;
        }

        td {
          padding: 0.75rem 1rem;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #f3f4f6;
        }

        td::before {
          content: attr(data-label);
          font-weight: 600;
          color: #6b7280; /* gray-500 */
        }

        td:last-child {
          border-bottom: none;
        }
      }
    </style>
  </head>
  <body>
    <table>
      <thead>
        <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${alteredData.map(obj => `
          <tr>
            ${headers.map(h => `<td data-label="${h}">${obj[h] ?? ''}</td>`).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  </body>
</html>
  `;
  return html;
            }  
