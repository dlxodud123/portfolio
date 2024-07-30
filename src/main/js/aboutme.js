import React, { forwardRef } from 'react';
import { IoPerson } from "react-icons/io5";
import { IoCalendarClear } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";

const Aboutme = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="aboutme-section" style={{ height: '500px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '500px', textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold', fontSize: '40px', borderBottom: '2px solid gray' }}>ABOUT ME</p>
      </div>
      <div style={{ display: 'flex', marginTop: '40px', textAlign: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 50px', textAlign: 'center', marginLeft: '115px' }}>
          <IoPerson />
          <p  style={{ fontSize: '25px', borderBottom: '1px solid gray' }}>이름</p>
          <p>김재환</p>
          <MdEmail />
          <p style={{ fontSize: '25px', borderBottom: '1px solid gray' }}>연락처</p>
          <p>010-8587-9302</p>
        </div>
        <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 50px', textAlign: 'center', marginLeft: '270px', marginRight: '270px' }}>
          <IoCalendarClear />
          <p style={{ fontSize: '25px', borderBottom: '1px solid gray' }}>생년월일</p>
          <p>1998.09.21</p>
          <IoCall />
          <p style={{ fontSize: '25px', borderBottom: '1px solid gray' }}>이메일</p>
          <p>jawhan98@naver.com</p>
        </div>
        <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 50px', textAlign: 'center' }}>
          <FaMapMarkerAlt />
          <p  style={{ fontSize: '25px', borderBottom: '1px solid gray' }}>주소지</p>
          <p>서울</p>
          <BsFillPencilFill />
          <p style={{ fontSize: '25px', borderBottom: '1px solid gray' }}>학력</p>
          <p>서울대학교</p>
        </div>
      </div>
    </div>
  );
});

export default Aboutme;
