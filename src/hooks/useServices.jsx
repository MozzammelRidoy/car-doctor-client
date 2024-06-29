import { useEffect, useState } from "react";
import { axiosPower } from "./useAxiosPower";

const useServices = (asc, search) => {
   
    const [services, setServices] = useState([]); 

    useEffect(()=>{
        axiosPower(`/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        .then(res => setServices(res.data))
        // fetch('http://localhost:5000/services?sort=${asc ? 'asc' : 'desc'}&search=${search}')
        // .then(res => res.json())
        // .then(data => setServices(data)); 

    },[asc, search])

    return services; 

};

export default useServices;