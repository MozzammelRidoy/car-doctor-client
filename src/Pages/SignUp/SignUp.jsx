import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Routes/AuthProviders';
const SignUp = () => {
    const {createUser} = useContext(AuthContext); 

    const handleSignUp = e => {
        e.preventDefault(); 

        const form = e.target; 
        const name = form.name.value; 
        const email = form.email.value; 
        const password = form.password.value; 

        console.log(name, email, password); 
        createUser(email, password)
        .then(result => {
            console.log(result.user); 
            alert('register success')
        })
        .catch(err => console.log(err)); 

    }
    return (
        <div className="hero min-h-screen mb-8">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full ms-16 max-w-sm shadow-2xl bg-base-100">
  
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name='name'
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                  <input type="submit" value="Sign Up" className='w-full border bg-[#FF3811] text-white py-2 rounded-md btn
                  ' />
              </div>
              <p className='text-center mb-3'>
              Have an Account ? <Link to={'/login'}><span className='text-[#FF3811] font-bold'>Login</span></Link>
            </p>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default SignUp;