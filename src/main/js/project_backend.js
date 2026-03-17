import { forwardRef } from 'react';
import './../css/project.css';

const Project_backend = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="project-backend-container">
            <div className="project-header">
                <div>BACKEND PROJECTS</div>
            </div>
            <div className="project-content">
                
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={`${process.env.PUBLIC_URL}/img/project/mealhub.png`} alt='project1' />
                    </div>
                    <div className="project-card-desc">
                        한끼식사 사이트 프로젝트<br />
                        <label>2025.10.05 ~ 2026.02.25</label>
                        <p>만개의레시피 사이트를 벤치마킹하여 진행하였습니다.<br />(spring, react)</p>

                        <p>만개의 레시피 웹 사이트 : </p>
                        <a className='address' href='https://www.10000recipe.com/' >10000recipe.com/</a>
                        <p>깃허브 소스 코드 : </p>
                        <a className='address' href='https://github.com/dlxodud123/recipe-backend' >github.com/dlxodud123/recipe-backend</a>
                        <p>ppt : </p>
                        <a className='address' href='https://docs.google.com/presentation/d/1D3yxSzIk0LFxntSI0_tRor5ApjAuxsKl48olgPKjJtc/edit' >
                            mealhub ppt
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Project_backend;