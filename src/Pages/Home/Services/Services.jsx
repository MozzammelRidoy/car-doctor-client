// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const services = useServices();

    // const [services, setServices] = useState([]); 
    // console.log(services)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // },[])
    return (
        <div>
            <div className="text-center w-1/2 mx-auto my-4">
            <h2 className="text-[#FF3811] text-xl font-bold">Services</h2>
            <h3 className="text-4xl font-bold">Our Service Area</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;