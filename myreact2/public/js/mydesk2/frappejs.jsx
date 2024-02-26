// // import React, { useState, useEffect } from 'react';
// // import { FrappeApp } from 'frappe-js-sdk';

// // const FrappeJs = () => {
// //   const [documentData, setDocumentData] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const frappe = new FrappeApp('https://harsha.erpgulf.com:8666');
// //       const auth = frappe.auth();

// //       try {
// //         // Log in
// //         await auth.loginWithUsernamePassword({ username: 'Administrator', password: 'Friday2000@T' });
// //         console.log('Logged in');

// //         // Fetch document
// //         const db = frappe.db();
// //         const doc = await db.getDoc('DocType', 'Customer');
// //         setDocumentData(doc);
// //       } catch (error) {
// //         console.error(error);
// //         // Handle authentication or data fetching error appropriately
// //       }
// //     };

// //     fetchData(); // Call the async function within useEffect
// //   }, []); // Empty dependency array means this effect runs once on mount

// //   if (!documentData) {
// //     return <div>Loading...</div>;
// //   }

// //   // Render your table based on the structure of your document
// //   // This example assumes 'documentData' is an object with keys you want to display
// //   return (
// //     <table>
// //       <thead>
// //         <tr>
// //           {Object.keys(documentData).map((key) => (
// //             <th key={key}>{key}</th>
// //           ))}
// //         </tr>
// //       </thead>
// //       <tbody>
// //         <tr>
// //           {Object.values(documentData).map((value, index) => (
// //             <td key={index}>{value.toString()}</td>
// //           ))}
// //         </tr>
// //       </tbody>
// //     </table>
// //   );
// // };

// // export default FrappeJs;



// // import React, { useState, useEffect } from 'react';
// // import { DataGrid } from '@mui/x-data-grid'; // Import DataGrid from Material-UI

// // import { FrappeApp } from 'frappe-js-sdk';

// // const FrappeJs = () => {
// //   const [documentData, setDocumentData] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const frappe = new FrappeApp('https://harsha.erpgulf.com:8666');
// //       const auth = frappe.auth();

// //       try {
// //         // Log in
// //         await auth.loginWithUsernamePassword({ username: 'Administrator', password: 'Friday2000@T' });
// //         console.log('Logged in');

// //         // Fetch document
// //         const db = frappe.db();
// //         const doc = await db.getDoc('DocType', 'Customer');
// //         setDocumentData(doc);
// //       } catch (error) {
// //         console.error(error);
// //         // Handle authentication or data fetching error appropriately
// //       }
// //     };

// //     fetchData(); // Call the async function within useEffect
// //   }, []); // Empty dependency array means this effect runs once on mount

// //   if (!documentData) {
// //     return <div>Loading...</div>;
// //   }

// //   // Define columns for the DataGrid
// //   const columns = Object.keys(documentData).map((key) => ({ field: key, headerName: key }));

// // // Define rows for the DataGrid
// // const rows = [Object.values(documentData)];

// // // Generate a unique id for each row (replace 'idField' with the actual field from your data)
// // const idField = 'customerId';
// // const rowsWithId = rows.map((row, index) => ({ id: row[idField] || index, ...row }));

// // return (
// //   <div style={{ height: 400, width: '100%' }}>
// //     <DataGrid
// //       rows={rowsWithId}
// //       columns={columns}
// //       pageSize={5}
// //       rowsPerPageOptions={[5]}
// //       checkboxSelection={false}
// //     />
// //   </div>
// // );
// // };

// // export default FrappeJs;

// //********************************************** */

// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { FrappeApp } from 'frappe-js-sdk';

// const FrappeJs = () => {
//   const [documentData, setDocumentData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const frappe = new FrappeApp('https://harsha.erpgulf.com:8666');
//       const auth = frappe.auth();

//       try {
//         // Log in
//         await auth.loginWithUsernamePassword({ username: 'Administrator', password: 'Friday2000@T' });
//         console.log('Logged in');

//         // Fetch document
//         const db = frappe.db();
//         const doc = await db.getDoc('DocType', 'Item');
//         setDocumentData(doc);
//       } catch (error) {
//         console.error(error);
//         // Handle authentication or data fetching error appropriately
//       }
//     };

//     fetchData(); // Call the async function within useEffect
//   }, []); // Empty dependency array means this effect runs once on mount

//   if (!documentData) {
//     return <div>Loading...</div>;
//   }

//   // Define columns for the DataGrid
//   const columns = Object.keys(documentData).map((key) => ({ field: key, headerName: key }));

//   // Define rows for the DataGrid
//   const rows = [documentData]; // Assuming documentData is an object

//   // Generate a unique id for each row
//   const idField = 'itemCode'; 
//   const rowsWithId = rows.map((row, index) => ({ id: row[idField] || index, ...row }));

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rowsWithId}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection={false}
//       />
//     </div>
//   );
// };

// export default FrappeJs;



//harsha_training.harsha_training.test.get_items

// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { FrappeApp } from 'frappe-js-sdk';

// const FrappeJs = () => {
//   const [documentData, setDocumentData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const frappe = new FrappeApp('https://harsha.erpgulf.com:8666');
//       const auth = frappe.auth();

//       try {
//         await auth.loginWithUsernamePassword({ username: 'Administrator', password: 'Friday2000@T' });
//         console.log('Logged in');

//         // const items = await frappe.call('https://harsha.erpgulf.com:8666/api/method/harsha_training.test.get_items');
//         const items = await frappe.call('harsha_training.harsha_training.test.get_items')
//         setDocumentData(items.message);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []); 

//   if (!documentData) {
//     return <div>Loading...</div>;
//   }

//   const columns = Object.keys(documentData[0]).map((key) => ({ field: key, headerName: key }));

//   const idField = 'item_name'; 
//   const rowsWithId = documentData.map((row, index) => ({ id: row[idField] || index, ...row }));

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rowsWithId}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection={false}
//       />
//     </div>
//   );
// };

// export default FrappeJs;

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FrappeApp } from 'frappe-js-sdk';

const FrappeJs = () => {
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const frappe = new FrappeApp('https://harsha.erpgulf.com:8666');
      const auth = frappe.auth();

      try {
        // await auth.loginWithUsernamePassword({ username: 'Administrator', password: 'Friday2000@T' });
        // console.log('Logged in');

        const response = await frappe.call({
          method: 'harsha_training.harsha_training.test.get_items',
          type: 'GET',
        });

        // Log the received items
        console.log('Received items:', response);

        setDocumentData(response.message);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!documentData) {
    return <div>Loading...</div>;
  }

  const columns = Object.keys(documentData[0]).map((key) => ({ field: key, headerName: key }));

  const idField = 'item_name';
  const rowsWithId = documentData.map((row, index) => ({ id: row[idField] || index, ...row }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowsWithId}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
      />
    </div>
  );
};

export default FrappeJs;


