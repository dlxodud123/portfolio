import { forwardRef } from 'react';
import './../css/archiving.css';

const Archiving = forwardRef((props, ref) => {
    return(
        <div ref={ref} className="archiving-container">
            <div className="archiving-header">
                <div>ARCHIVING</div>
            </div>
            <div className="archiving-content">
                <div className='archive-card'>
                    <div className="archive-img" style={{marginLeft:"10px"}}>
                        <img src={`${process.env.PUBLIC_URL}/img/version_control/github.png`} alt='github' />
                    </div>
                    <div className="archive-link">
                        <a className='address' href='https://github.com/dlxodud123' >https://github.com/dlxodud123</a>
                    </div>
                    <div className="archive-desc">
                        <label className='no-hover'>소스 코드 저장소</label>입니다.
                    </div>
                    <ul className="archive-list">
                        <li>과거 프로젝트, 프로그램, 앱의 소스 코드</li>
                        <li>혼자서 코딩 연습을 위해 끄적이던 소스 코드</li>
                        <li>학부 시절 수강한 수업들의 코딩 과제 소스 코드</li>
                    </ul>
                </div>

                <div className='archive-card'>
                    <div className="archive-img">
                        <img src={`${process.env.PUBLIC_URL}/img/archiving/tstory.png`} alt='tistory' />
                    </div>
                    <div className="archive-link">
                        <a className='address' href='https://xodud5080.tistory.com' >https://xodud5080.tistory.com</a>    
                    </div>
                    <div className="archive-desc">
                        <label className='no-hover'>공부 및 지식 공유 목적의 블로그</label>입니다.
                    </div>
                    <ul className="archive-list">
                        <li>공부한 것을 진정한 나의 것으로 만들기 위한 기록</li>
                        <li>개발자의 길을 걸으며 공부한 개발 관련 지식 정리</li>
                        <li>학부 시절 배운 전공 수업들의 내용 복습 및 정리</li>
                        <li>지식 공유를 통한 선한 영향력 행사</li>
                    </ul>
                </div>
            </div>
        </div>
    )
});

export default Archiving;