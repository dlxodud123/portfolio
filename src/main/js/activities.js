import { Navigate, useNavigate } from 'react-router-dom';
import './../css/activities.css';
import { forwardRef } from 'react';

const Activities = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="activities-container">
            <div className="activities-header">
                <div>ACTIVITIES</div>
            </div>
            <div className="activities-content">
                <div className="activities-card" onClick={() => { window.location.href = 'http://www.kgitbank.kr/' }}>
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/itbank.png`} alt='itbank' />
                    </div>
                    <div className="activities-description">
                        KG IT뱅크 부트 캠프 수료<br /><label>2024.01.31 ~ 2024.08.02</label>
                    </div>
                </div>
                <div className="activities-card" onClick={() => { window.location.href = 'https://www.inflearn.com/search?s=%EA%B9%80%EC%98%81%ED%95%9C/' }}>
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/인프런.jpeg`} alt='coding apple typescript' />
                    </div>
                    <div className="activities-description">
                        인프런 Spring DB, Spring Boot, JPA, Spring Data JPA, Querydsl 강의 수료
                    </div>
                </div>
                <div className="activities-card" onClick={() => { window.location.href = 'https://codingapple.com/course/react-basic/' }}>
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/코딩애플.png`} alt='coding apple typescript' />
                    </div>
                    <div className="activities-description">
                        코딩 애플 React, TypeScript 강의 수료
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Activities;
