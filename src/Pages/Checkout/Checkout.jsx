import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthProviders";

const Checkout = () => {
    const {user} = useContext(AuthContext); 

    const service = useLoaderData(); 
    const {_id, title, price, img} = service; 
    const handleCheckout = e => {
        e.preventDefault(); 

        const form = e.target; 

        const name = form.name.value; 
        const date = form.date.value; 
        const email = form.email.value; 
         

        const order = {
            customerName : name,
            date : date,
            email : email,
            price : price,
            img : img,
            title: title
        }
        console.log(order)
        fetch('http://localhost:5000/bookings', {
            method : "POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Order Cofirm Success')
            }
        })
    }

    return (
        <div className="my-8">
            <h2 className="text-4xl">Checkout <span className="font-bold">{title}</span> </h2>
            <div>
                <form onSubmit={handleCheckout}>
                    <div className="grid my-4 grid-cols-2 gap-8">

                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" className="w-full border rounded-md p-4 " placeholder="name" defaultValue={user?.displayName} name="name" />
                        </div>
                        <div>
                            <label htmlFor="name">Date</label>
                            <input type="date" className="w-full border rounded-md p-4 " name="date" />
                        </div>
                        <div>
                            <label htmlFor="name">Email</label>
                            <input type="email" className="w-full border rounded-md p-4 " placeholder="email" name="email" defaultValue={user?.email} />
                        </div>
                        <div>
                            <label htmlFor="name">Due Ammount</label>
                            <input type="text" className="w-full border rounded-md p-4 " placeholder="due ammount" readOnly defaultValue={'$ '+price} name="price" />
                        </div>
                        <div className="col-span-2">
                            
                            <input type="submit" className="btn btn-block bg-[#FF3811] py-2 text-white" value={'Order Confirm'} />
                        </div>



                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;