import Image from "next/image"
export default function Home(){
  return(
   
   <div className="parent">
    <div className="child">
      <h1>I, Maha Aleem</h1>
      <p>This is the website where I formally display my skills and work history.</p>
      
      <button>Download CV</button>
      </div>

      {/* div for imagess */}

      <div className="images">
<img src="https://img.freepik.com/premium-photo/web-dev-design-3d-vector-illustration-laptop-phone-coding-tools_1178440-14996.jpg" className="girl" />
<img src="" className="shape" />        

      </div>
</div>

  )
};