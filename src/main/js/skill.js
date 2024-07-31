import { forwardRef } from 'react';
import './../css/skill.css';
import SkillBar from './skillbar';

const skills = [
    { skill: 'HTML5', level: 80 },
    { skill: 'CSS3', level: 80 },
    { skill: 'JavaScript', level: 60 },
    { skill: 'TypeScript', level: 30 },
    { skill: 'jQuery', level: 30 },
    { skill: 'React', level: 70 },
    { skill: 'React Query', level: 30 },
    { skill: 'Bootstrap', level: 60 },
    { skill: 'JAVA', level: 50 },
    { skill: 'Spring', level: 40 },
    { skill: 'node.js', level: 50 },
    { skill: 'Oracle', level: 30 },
    { skill: 'Git', level: 40 },
    { skill: 'Github', level: 40 },
  ];

const Skill = forwardRef((props, ref) => {

    return(
        <>
            <div ref={ref} style={{background:'#ffc107', height:'2100px'}}>
                <div style={{width:"500px", margin:"auto"}}>
                    <div style={{textAlign:'center',fontSize:'55px',paddingTop:'30px',borderBottom:'1px solid gray',width:'300px', margin:'auto', fontWeight:"bold", height:"90px"}}>SKILLS</div>
                </div>
                <div style={{display:"flex", margin:"auto", width:"1750px"}}>
                    <div style={{textAlign:'center', width:"550px"}}>
                        <div style={{backgroundColor:'#ffffff',width:'550px',height:'1000px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
                            <div style={{borderBottom:'1px solid rgba(0,0,0,0.2)', height:"100px", width:"420px", margin:"auto", overflow:"hidden"}}>
                                <div style={{fontSize:'35px',paddingTop:'40px', color:"#F4623A", fontWeight:"bold", textAlign:"left"}}>FrontEnd</div>
                            </div>
                            <div style={{display:'flex',margin:'30px auto auto auto', width:"420px"}}>
                                <div className='skill_img' style={{backgroundColor:'white',width:'130px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                    <img style={{width:'130px',height:'120px', marginTop:"10px"}} src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_html.png`} alt='html'></img>
                                </div>
                                <div style={{width:"10px"}}></div>
                                <div className='skill_img' style={{backgroundColor:'white',width:'130px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                    <img style={{width:'100px',height:'120px', marginTop:"10px"}} src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_css.png`} alt='css'></img>
                                </div>
                                <div style={{width:"10px"}}></div>
                                <div className='skill_img' style={{backgroundColor:'white',width:'130px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                    <img style={{width:'100px',height:'120px', marginTop:"10px"}} src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_javascript.png`} alt='javascript'></img>
                                </div>
                            </div>
                            <div style={{display:'flex',margin:'20px auto auto auto', width:"420px"}}>
                                <div className='skill_img' style={{backgroundColor:'white',width:'130px', height:"120px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                    <img style={{width:'100px',height:'100px', marginTop:"10px"}} src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_typescript.png`} alt='typescipt'></img>
                                </div>
                                <div style={{width:"10px"}}></div>
                                <div className='skill_img' style={{backgroundColor:'white',width:'280px', height:"120px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                    <img style={{width:'270px',height:'120px'}} src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_jquery.png`} alt='jquery'></img>
                                </div>
                            </div>
                            <div className='skill_img' style={{margin:"20px auto auto auto", backgroundColor:'white', width:'420px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                <img style={{width:"300px", height:"120px", marginTop:"20px"}} src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_react.png`} alt="react"></img>
                            </div>
                            <div className='skill_img' style={{margin:"20px auto auto auto", backgroundColor:'white', width:'420px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                <img style={{width:"300px", height:"120px", marginTop:"20px"}} src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_reactquery.png`} alt="reactquery"></img>
                            </div>
                            <div className='skill_img' style={{margin:"20px auto auto auto", backgroundColor:'white', width:'420px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                <img style={{width:"300px", height:"120px", marginTop:"20px"}} src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_bootstrap.png`} alt="bootstrap"></img>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"50px"}}></div>
                    <div style={{textAlign:'center', width:"550px"}}>
                        <div style={{backgroundColor:'#ffffff',width:'550px',height:'840px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
                            <div style={{borderBottom:'1px solid rgba(0,0,0,0.2)', height:"100px", width:"420px", margin:"auto", overflow:"hidden"}}>
                                <div style={{fontSize:'35px',paddingTop:'40px', color:"#F4623A", fontWeight:"bold", textAlign:"left"}}>Backend</div>
                            </div>
                            <div className='skill_img' style={{margin:"20px auto auto auto", backgroundColor:'white', width:'420px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                <img style={{width:"300px", height:"120px", marginTop:"20px"}} src={`${process.env.PUBLIC_URL}/img/backend/skillimg_java.png`} alt="java"></img>
                            </div>
                            <div className='skill_img' style={{margin:"20px auto auto auto", backgroundColor:'white', width:'420px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                <img style={{width:"300px", height:"100px", marginTop:"25px"}} src={`${process.env.PUBLIC_URL}/img/backend/skillimg_spring.png`} alt="spring"></img>
                            </div>
                            <div className='skill_img' style={{margin:"20px auto auto auto", backgroundColor:'white', width:'420px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                <img style={{width:"300px", height:"120px", marginTop:"15px"}} src={`${process.env.PUBLIC_URL}/img/backend/skillimg_node.png`} alt="node"></img>
                            </div>
                            <div className='skill_img' style={{margin:"20px auto auto auto", backgroundColor:'white', width:'420px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                <img style={{width:"300px", height:"120px", marginTop:"20px"}} src={`${process.env.PUBLIC_URL}/img/backend/skillimg_oracle.png`} alt="oracle"></img>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"50px"}}></div>
                    <div>
                        <div>
                            <div style={{textAlign:'center', width:"550px"}}>
                                <div style={{backgroundColor:'#ffffff',width:'550px',height:'500px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
                                    <div style={{borderBottom:'1px solid rgba(0,0,0,0.2)', height:"100px", width:"420px", margin:"auto", overflow:"hidden"}}>
                                        <div style={{fontSize:'35px',paddingTop:'40px', color:"#F4623A", fontWeight:"bold", textAlign:"left"}}>Version Control</div>
                                    </div>
                                    <div className='skill_img' style={{margin:"20px auto auto auto", backgroundColor:'white', width:'420px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                        <img style={{width:"250px", height:"80px", marginTop:"32px"}} src={`${process.env.PUBLIC_URL}/img/version_control/git.png`} alt="git"></img>
                                    </div>
                                    <div className='skill_img' style={{margin:"20px auto auto auto", backgroundColor:'white', width:'420px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                        <img style={{width:"320px", height:"120px", marginTop:"17px"}} src={`${process.env.PUBLIC_URL}/img/version_control/github.png`} alt="github"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{textAlign:'center', width:"550px"}}>
                                <div style={{backgroundColor:'#ffffff',width:'550px',height:'340px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
                                    <div style={{borderBottom:'1px solid rgba(0,0,0,0.2)', height:"100px", width:"420px", margin:"auto", overflow:"hidden"}}>
                                        <div style={{fontSize:'35px',paddingTop:'40px', color:"#F4623A", fontWeight:"bold", textAlign:"left"}}>Certificate</div>
                                    </div>
                                    <div className='skill_img' style={{margin:"20px auto auto auto", backgroundColor:'white', width:'420px', height:"150px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:"15px"}}>
                                        <img style={{width:"270px", height:"100px", marginTop:"32px"}} src={`${process.env.PUBLIC_URL}/img/certificate/qq.png`} alt="qnet"></img>
                                    </div>
                                    <div style={{width:"420px", fontSize:"25px", fontWeight:"bold", margin:"auto", textAlign:"left", marginTop:"8px"}}>
                                        정보처리산업기사 (필기 + 실기)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{margin:"auto", width:"1750px"}}>
                    <div className="skill-chart">
                        {skills.map((skillObj, index) => (
                            <SkillBar key={index} skill={skillObj.skill} level={skillObj.level} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
});

export default Skill;