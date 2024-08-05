import { forwardRef } from 'react';
import './../css/project.css';

// const Project = forwardRef((props, ref) => {
//     return(
//         <>
//             <div ref={ref} style={{background:'#1d809f', height:'1500px'}}>
//                 <div style={{width:"500px", margin:"auto"}}>
//                     <div style={{textAlign:'center',fontSize:'55px',paddingTop:'30px',borderBottom:'1px solid gray',width:'300px', margin:'auto', fontWeight:"bold", height:"90px", color:"white"}}>PROJECTS</div>
//                 </div>
//                 <div style={{display:"flex", margin:"auto", width:"1280px"}}>
//                     <div style={{textAlign:'center', width:"1280px"}}>

                        
//                         <div style={{backgroundColor:'#ffffff',width:'1280px',height:'550px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
//                         <div style={{display:"flex"}}>
//                                     <div style={{textAlign:"left", marginLeft:"20px",marginTop:'20px'}}>
//                                         <img style={{width:'550px',height:'400px', marginTop:"50px",marginLeft:'60px',border:'2px solid black',borderRadius:'10px'}} src={`${process.env.PUBLIC_URL}/img/project/project1.png`} alt='itbank'></img>
//                                     </div>
//                                     <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"80px", marginTop:"80px", textAlign:"left"}}>
//                                         KREAM 웹 사이트 클론 프로젝트<br></br><label style={{fontWeight:"lighter"}}>2024.01.31 ~ 2024.08.02</label>
//                                         <p style={{fontWeight:"lighter"}}>sdasdasd</p>
//                                     </div>
//                                 </div>
//                         </div>


//                         <div style={{backgroundColor:'#ffffff',width:'1280px',height:'550px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
//                         <div style={{display:"flex"}}>
//                                     <div style={{textAlign:"left", marginLeft:"20px",marginTop:'20px'}}>
//                                         <img style={{width:'550px',height:'400px', marginTop:"50px",marginLeft:'60px',border:'2px solid black',borderRadius:'10px'}} src={`${process.env.PUBLIC_URL}/img/project/project1.png`} alt='itbank'></img>
//                                     </div>
//                                     <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"80px", marginTop:"80px", textAlign:"left"}}>
//                                         KREAM 웹 사이트 클론 프로젝트<br></br><label style={{fontWeight:"lighter"}}>2024.01.31 ~ 2024.08.02</label>
//                                         <p style={{fontWeight:"lighter"}}>sdasdasd</p>
//                                     </div>
//                                 </div>
                                
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// });

// export default Project;
const Project = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="project-container">
            <div className="project-header">
                <div>PROJECTS</div>
            </div>
            <div className="project-content">
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={`${process.env.PUBLIC_URL}/img/project/project1.png`} alt='project1' />
                    </div>
                    <div className="project-card-desc">
                        KREAM 웹 사이트 클론 프로젝트<br />
                        <label>2024.06.02 ~ 2024.08.02</label>
                        <p>KREAM 웹 사이트 클론 프로젝트를 진행하였습니다.</p>
                
                        <p>소스코드 깃허브 주소 : https://github.com/dlxodud123/fream_front</p>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={`${process.env.PUBLIC_URL}/img/project/project1.png`} alt='project1' />
                    </div>
                    <div className="project-card-desc">
                        KREAM 웹 사이트 클론 프로젝트<br />
                        <label>2024.01.31 ~ 2024.08.02</label>
                        <p>sdasdasd</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Project;