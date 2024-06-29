import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  const bannerIamges = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];
  return (
    <div className="carousel w-full h-[600px]">
      {bannerIamges.map((img, index) => (
        <div
          key={index}
          id={`slider${index}`}
          className="carousel-item relative w-full"
        >
          <img src={img.img} className="w-full rounded-lg" />
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slider${index - 1}`} className="btn bg-white bg-opacity-30 text-white hover:bg-[#FF3811] btn-circle">
              ❮
            </a>
            <a href={`#slider${index + 1}`} className="btn bg-white bg-opacity-30 text-white hover:bg-[#FF3811] btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center gap-4 transform h-full ps-16 rounded-lg ">
            <div className="text-white w-1/2 space-y-4">
                <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-4">
                    <button className="btn bg-white bg-opacity-30 text-white rounded-md hover:bg-[#FF3811] ">Discover More</button>
                    <button className="btn bg-white bg-opacity-30 text-white rounded-md hover:bg-[#FF3811] ">Latest Project</button>
                </div>
            </div>
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default Banner;
