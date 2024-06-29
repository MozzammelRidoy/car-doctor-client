import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/AuthProviders";
import BookingsRow from "./BookingsRow";
// import axios from "axios";
import useAxiosPower from "../../hooks/useAxiosPower";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const axiosPower = useAxiosPower(); 


  const [bookings, setBookings] = useState([]);
  // const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {

    axiosPower(url)
    .then(res => {
      setBookings(res.data);
    })

    // axios.get(url, {withCredentials : true})
    // .then(res => {
    //   setBookings(res.data)
    // })

    // fetch(url, {credentials : 'include'})
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = _id => {
    const proceed = confirm('Are You Sure'); 
    if(proceed){
        fetch(`http://localhost:5000/bookings/${_id}`, {method: "DELETE"})
        .then(res => res.json())
        .then(data => {
            console.log(data); 

            if(data.deletedCount > 0){
                alert('Deleted Success')
                const remaining = bookings.filter(booking => booking._id !== _id); 
                setBookings(remaining); 
            }
        })
    }
  }
  const status = {status : 'confirm'}; 

  const handleConfirm = _id => {
    fetch(`http://localhost:5000/bookings/${_id}`, {
        method : 'PATCH', 
        headers: {'content-type' :'application/json'},
        body : JSON.stringify(status)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data); 
        if(data.matchedCount > 0){
            alert('order confirmed'); 

            const remaining = bookings.filter(booking => booking._id !== _id); 

            const updated = bookings.find(booking => booking._id === _id); 
            updated.status = 'confirm'; 
            
            const newBooking = [updated, ...remaining]; 
            setBookings(newBooking); 
        }

    })
  }

  return (
    <div>
      <h2 className="text-4xl">My Bookings {bookings.length}</h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl font-bold">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Service Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                bookings.map(booking => <BookingsRow key={booking._id} handleConfirm={handleConfirm} handleDelete={handleDelete} booking={booking}></BookingsRow>)
              }
             
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
