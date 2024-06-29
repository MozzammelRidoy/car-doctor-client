import { useState } from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "../Home/Services/ServiceCard";

const Service = () => {
    const [asc, setAsc] = useState(false); 
    const [search, setSearch] = useState(''); 

    const service = useServices(asc, search); 
    console.log(service); 


    const handleSearch = e => {
        e.preventDefault(); 

        const searchText  = e.target.search.value;
        console.log(searchText)
        setSearch(searchText);
    }


    return (
        <div>
            <div className="text-center w-1/2 mx-auto my-4">
            <h2 className="text-[#FF3811] text-xl font-bold">Services</h2>
            <h3 className="text-4xl font-bold">Our Service Area</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. </p> 
            <form onSubmit={handleSearch}>
                <input type="text" name="search" id="" className="border-2 p-2" />
                <input type="submit" value="search" className="btn bg-[#FF3811] mt-5 text-white" />
            </form>
            <button onClick={()=> setAsc(!asc)} className="uppercase btn bg-[#FF3811] mt-5 text-white">
               {asc ? 'Price : High to Low' : 'Price : Low to High'}
            </button>
            </div>

           

            <div className="grid grid-cols-3 gap-6">
                {
                    service.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Service;