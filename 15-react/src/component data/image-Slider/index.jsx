import React, { useEffect, useState } from 'react'
import "./style.css";
import data from "./main";

export default function ImageSlider({url , limit=5, page= 1}) {

    const [images, setImages] = useState([]);
    const [currrentslide, setcurrentslide] = useState(0);
    const [errorMng, setErrorMessage] = useState(null);
    const [loading, setloading] = useState(0);

    async function fetchImages(geturl){
        try{
            setloading(true);
            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
            const data = await response.json();


            if(data) {
                setImages(data)
                setloading(false);
            }
        }
        catch(e){
            setErrorMessage(e.message);
            setloading(false);
        }
    }

    useEffect(()=>{
        if(url !== ''){
            fetchImages(url)
        }
    },[url]);

    if(loading) {
        return <div>Loading data Please wait</div>
    }

    if(errorMng !== null) {
        return <div>Error Occured {errorMng}</div>
    }
    return (
        <div>
        
        </div>
    )
}
