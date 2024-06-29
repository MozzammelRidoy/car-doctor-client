const BookingsRow = ({ booking, handleDelete, handleConfirm }) => {
  const {_id, img, title, price, email, date, status } = booking;

  
  return (
    <tr>
      <th>
        <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="w-24 rounded">
          <img src={img} alt="" />
        </div>
      </td>
      <td>{title}</td>
      <td>{email}</td>

      <td>$ {price}</td>
      <td>{date}</td>
      <th>
        {
            status === 'confirm' ? <span className="text-green-500 font-bold">Confirmed</span> :
        <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm Request</button>
        }
      </th>
    </tr>
  );
};

export default BookingsRow;
