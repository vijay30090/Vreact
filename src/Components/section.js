import { autocompleteClasses } from '@mui/material';
import './App.css';
import ActionAreaCard from "./popup";
import DataTable from "./Table"
function Section() {
    return (
        <header className='section'>
            <h1>middle section</h1>
            <div style={{width:"800px", margin:"0 auto"}}>
            <DataTable/>
            </div>
            <ActionAreaCard/>
        </header>
    )
};

export default Section;