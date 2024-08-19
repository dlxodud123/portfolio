import './../css/aboutme.css';
import React, { forwardRef } from 'react';
import { IoPerson } from "react-icons/io5";
import { IoCalendarClear } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";

// const Aboutme = forwardRef((props, ref) => {
//   return (
//     <div ref={ref} id="aboutme-section" style={{ height: '550px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//       <div style={{ width: '500px', textAlign: 'center' }}>
//         <div style={{ fontWeight: 'bold', fontSize: '55px', borderBottom: '2px solid gray', height:"90px" }}>ABOUT ME</div>
//       </div>

//       <div className='gr' style={{ paddingTop: '50px'}}>
//         <div style={{display:"flex"}}>
//           <div style={{width:"110px"}}>
//             <IoPerson size={50} />
//           </div>
//           <div> 
//             <div style={{ fontSize: '35px', fontWeight:"bold", width:"300px", height:"60px"}}>이름</div>
//             <div style={{height:"50px", fontSize:"25px"}}>홍길동</div>
//           </div>
//         </div>

//         <div style={{display:"flex"}}>
//           <div style={{width:"110px"}}>
//             <IoCalendarClear size={50} />
//           </div>
//           <div> 
//             <div style={{ fontSize: '35px', fontWeight:"bold", width:"300px", height:"60px"}}>생년월일</div>
//             <div style={{height:"50px", fontSize:"25px"}}>00.11.22</div>
//           </div>
//         </div>

//         <div style={{display:"flex"}}>
//           <div style={{width:"110px"}}>
//             <FaMapMarkerAlt size={50} />
//           </div>
//           <div> 
//             <div style={{ fontSize: '35px', fontWeight:"bold", width:"300px", height:"60px"}}>주소지</div>
//             <div style={{height:"50px", fontSize:"25px"}}>서울특별시 강남구</div>
//           </div>
//         </div>

//         <div style={{display:"flex"}}>
//           <div style={{width:"110px"}}>
//             <IoCall size={50} />
//           </div>
//           <div>
//             <div style={{ fontSize: '35px', fontWeight:"bold", width:"300px", height:"60px"}}>연락처</div>
//             <div style={{height:"50px", fontSize:"25px"}}>010-1234-5678</div>
//           </div>
//         </div>

//         <div style={{display:"flex"}}>
//           <div style={{width:"110px"}}>
//             <MdEmail size={50} />
//           </div>
//           <div> 
//             <div style={{ fontSize: '35px', fontWeight:"bold", width:"300px", height:"60px"}}>이메일</div>
//             <div style={{height:"50px", fontSize:"25px"}}>qwer@naver.com</div>
//           </div>
//         </div>

//         <div style={{display:"flex"}}>
//           <div style={{width:"110px"}}>
//             <BsFillPencilFill size={50} />
//           </div>
//           <div> 
//             <div style={{ fontSize: '35px', fontWeight:"bold", width:"300px", height:"60px"}}>학력</div>
//             <div style={{height:"35px", fontSize:"25px"}}>서울대학교</div>
//             <div style={{fontSize:"25px"}}>(컴퓨터공학부)</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Aboutme;
const Aboutme = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="aboutme-section" className="aboutme-container">
      <div className="aboutme-title">
        <div>ABOUT ME</div>
      </div>

      <div className='aboutme-grid'>
        <div className="aboutme-item">
          <div className="icon"><IoPerson size={50} /></div>
          <div> 
            <div className="label">이름</div>
            <div className="value">이태영</div>
          </div>
        </div>

        <div className="aboutme-item">
          <div className="icon"><IoCalendarClear size={50} /></div>
          <div> 
            <div className="label">생년월일</div>
            <div className="value">01.12.13</div>
          </div>
        </div>

        <div className="aboutme-item">
          <div className="icon"><FaMapMarkerAlt size={50} /></div>
          <div> 
            <div className="label">주소지</div>
            <div className="value">서울특별시 도봉구 쌍문동</div>
          </div>
        </div>

        <div className="aboutme-item">
          <div className="icon"><IoCall size={50} /></div>
          <div>
            <div className="label">연락처</div>
            <div className="value">010-3858-5430</div>
          </div>
        </div>

        <div className="aboutme-item">
          <div className="icon"><MdEmail size={50} /></div>
          <div> 
            <div className="label">이메일</div>
            <div className="value">xodud5080@naver.com</div>
          </div>
        </div>

        <div className="aboutme-item">
          <div className="icon"><BsFillPencilFill size={50} /></div>
          <div> 
            <div className="label">학력</div>
            <div className="value" style={{height:"40px"}}>명지전문대학교</div>
            <div className="value">(기계공학과)</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Aboutme;