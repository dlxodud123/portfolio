import React, { forwardRef } from 'react';

const Aboutme = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="aboutme-section" style={{ height: '350px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '500px', textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold', fontSize: '40px', borderBottom: '2px solid gray' }}>ABOUT ME</p>
      </div>
      <div style={{ display: 'flex', marginTop: '40px', textAlign: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 50px', textAlign: 'center', marginLeft: '115px' }}>
          <p  style={{ fontSize: '25px', borderBottom: '1px solid gray' }}>이름</p>
          <p>김재환</p>
        </div>
        <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 50px', textAlign: 'center', marginLeft: '270px', marginRight: '270px' }}>
          <p style={{ fontSize: '25px', borderBottom: '1px solid gray' }}>생년월일</p>
          <p>1998.09.21</p>
        </div>
        <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 50px', textAlign: 'center' }}>
          <p style={{ fontSize: '25px', borderBottom: '1px solid gray' }}>연락처</p>
          <p>010-8587-9302</p>
          <p>jawhan98@naver.com</p>
        </div>
      </div>
    </div>
  );
});

export default Aboutme;
