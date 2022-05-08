import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { autocompleteClasses } from '@mui/material';

/*const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130, sortable: false },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
    sortable: false,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];
*/

/*const rows = [
{ id: 0, lastName: 'Doe', firstName: 'John', age: 25 },
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
*/
export default function DataTable() {

  let [rows, setrows] = useState([]);
  let [columns, setcolumns] = useState([]);

  const prepareCoumRow = (data)=>{
    let columns = [];
    let coum = data.records[0];

    for(let a in coum){
      columns.push({ field: a, headerName: a })
    }

    setcolumns(columns);

 let rows =data.records.map((item, i)=> {
   item['id']=i;
   return item;
  });
 console.log(rows);
    setrows(rows);


  }
  useEffect(()=>{
    //fetch - get method 
    // fetch(url). then().then()
    fetch("https://www.w3schools.com/angular/customers.php").then(res=>res.json()).then(
        (success)=>{ 
            console.log(success);
            prepareCoumRow(success);
            //setItems(success);
        }, 
        (error)=>{console.log(error);}
        
        )
}, []);
  return (
    <div style={{ color:"red", height: 400, width: '50%', margin:"0 auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
