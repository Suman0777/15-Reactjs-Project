import { useState } from "react";
import data from "./data";
import "./styles.css";
export default function Accordion() {
    
    const [selected , setSelected] = useState(null);

    function handleClickDelection(getcurrentid){
        setSelected(getcurrentid === selected ? null : getcurrentid);
    }
    return (
    <div className="Wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataItem=> <div className="item">
                    <div onClick={() => handleClickDelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>  
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ? 
                        <div className="content"> {dataItem.answer}</div>
                        : null
                    }
                </div>)
                : <div> No Data found</div>
            }
        </div>
    </div>
  ) 

}
