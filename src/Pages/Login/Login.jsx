import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import useAuth from '../../hooks/useAuth';
// import { useContext } from 'react';
// import { AuthContext } from '../../Routes/AuthProviders';
const Login = () => {
    // const {userLogin} = useContext(AuthContext) ;
    
    const {userLogin} = useAuth();

    const handleLogin = e => {
        e.preventDefault(); 

        const form = e.target; 
        const email = form.email.value; 
        const password = form.password.value; 

        console.log(email, password); 
        userLogin(email, password)
        .then(result => {
            console.log(result.user); 
            alert('login success')
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

          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-3xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                defaultValue={'garir@chaka.com'}
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
                defaultValue={'zxcv22'}
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Login" className='w-full border bg-[#FF3811] text-white py-2 rounded-md btn
                ' />
            </div>
            <p className='text-center mb-3'>
            New to Car Doctor ? <Link to={'/signup'}><span className='text-[#FF3811] font-bold'>Sign Up</span></Link>
          </p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
