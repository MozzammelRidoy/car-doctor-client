import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col  lg:flex-row">
        <div className="w-1/2 relative">
        <img
          src={person}
          className="w-3/4 h-[350px] rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 absolute h-64 right-5 top-1/2 rounded-md border-8 border-white shadow-2xl"
        />
        </div>
        <div className="w-1/2 space-y-6 p-4">
        <h2 className='text-xl text-[#FF3811] font-bold'>About us</h2>
          <h1 className="text-5xl font-bold w-3/4">We are qualified & of experience in this field</h1>
          <p className="w-3/4">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. 
          </p>
          <p className="w-3/4">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. 
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
