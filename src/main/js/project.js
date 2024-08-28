import { forwardRef } from 'react';
import './../css/project.css';

const Project = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="project-container">
            <div className="project-header">
                <div>PROJECTS</div>
            </div>
            <div className="project-content">
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={`${process.env.PUBLIC_URL}/img/project/project2.png`} alt='project1' />
                    </div>
                    <div className="project-card-desc">
                       코인 모의 투자 사이트 프로젝트<br />
                        <label>2024.04.11 ~ 2024.04.26</label>
                        <p>업비트 사이트를 벤치마킹하여 진행하였습니다.(node.js)</p>
                        <p>업비트 웹 사이트 : </p>
                        <a className='address' href='https://upbit.com/home' >https://upbit.com/</a>
                        <p>깃허브 소스 코드 : </p>
                        <a className='address' href='https://github.com/youngho3358/coin_investment' >https://github.com/youngho3358/coin_investment</a>
                        <p>ppt : </p>
                        <a className='address' href='https://docs.google.com/presentation/d/1-Rrq_4OcEt8OrCvBSL9ozBoFl_NhuiCjA3takDTA0nM/edit?usp=sharing' >coin_investment ppt</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={`${process.env.PUBLIC_URL}/img/project/project1.png`} alt='project1' />
                    </div>
                    <div className="project-card-desc">
                        KREAM 웹 사이트 클론 프로젝트<br />
                        <label>2024.06.02 ~ 2024.08.02</label>
                        <p>KREAM 웹 사이트 클론 프로젝트를 진행하였습니다.(React)<br/></p>
                        <p>크림 웹 사이트 : </p>
                        <a className='address' href='https://kream.co.kr/' >https://kream.co.kr/</a>
                        <br/>
                        <p>깃허브 소스 코드 : </p>
                        <a className='address' href='https://github.com/dlxodud123/fream_front' >https://github.com/dlxodud123/fream_front</a>
                        <p>ppt : </p>
                        <a className='address' href='https://docs.google.com/presentation/d/1bSQ0nhEOJSQMB99D6ybtWT4B_U0mZoaWheh7HPIXlRw/edit?usp=sharing' >Kream clone project ppt</a>
                    </div>
                </div>
                
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={`${process.env.PUBLIC_URL}/img/project/project3.png`} alt='project1' />
                    </div>
                    <div className="project-card-desc">
                        포트폴리오 프로젝트<br />
                        <label>2024.08.05 ~ 2024.08.12</label>
                        <p>웹 포트폴리오 제작 프로젝트 진행하였습니다.(React)</p>
                        <p>깃허브 소스 코드 : </p>
                        <a className='address' href='https://github.com/dlxodud123/portfolio' >https://github.com/dlxodud123/portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Project;