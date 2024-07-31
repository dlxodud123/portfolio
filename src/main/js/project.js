import { forwardRef } from 'react';
import './../css/project.css';

const Project = forwardRef((props, ref) => {
    return(
        <>
            <div ref={ref} style={{background:'#1d809f', height:'1500px'}}>
                <div style={{width:"500px", margin:"auto"}}>
                    <div style={{textAlign:'center',fontSize:'55px',paddingTop:'30px',borderBottom:'1px solid gray',width:'300px', margin:'auto', fontWeight:"bold", height:"90px", color:"white"}}>PROJECTS</div>
                </div>
                <div style={{display:"flex", margin:"auto", width:"1280px"}}>

                    <div style={{textAlign:'center', width:"1280px"}}>
                        <div style={{backgroundColor:'#ffffff',width:'1280px',height:'1000px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
});

export default Project;