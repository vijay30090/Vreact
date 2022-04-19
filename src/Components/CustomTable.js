
// since it's functional component to fetch the API data/ get the api data we need to use HOOKs 

import { useEffect, useState } from "react";

// useEffect - we can make our api call 
function CustomTable() {

    let [items, setItems] = useState([]);

    useEffect(()=>{
        //fetch - get method 
        // fetch(url). then().then()
        fetch("https://www.w3schools.com/angular/customers.php").then(res=>res.json()).then(
            (success)=>{ 
                console.log(success);
                setItems(success);
            }, 
            (error)=>{console.log(error);}
            
            )
    }, []);

    return (
        <>
        <header>
            <h1>Custom Table</h1>

        </header>
        <section style={{margin:"0 auto", width:"50%",backgroundColor:"red"}}>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                {items && 
                    items?.records?.map((item)=>{
                        return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.City}</td>
                                <td>{item.Country}</td>
                            </tr>
                        )
                    })
                }
                <tr></tr>
            </table>
        </section>
        </>
    )
};

export default CustomTable;
