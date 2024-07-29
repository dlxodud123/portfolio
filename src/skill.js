import skillimg from './img/img1.png'
import skillimg2 from './img/skillimg2.png'
import skillimg3 from './img/skillimg3.png'
import skillimg4 from './img/skillimg4.png'

function Skill(){
    return(
        <>
        <div style={{background:'#ffc107', height:'1280px'}}>
        <div>
        <p style={{textAlign:'center',fontSize:'60px',paddingTop:'30px',borderBottom:'1px solid gray',width:'300px',marginLeft:'30px'}}>SKILLS</p>
        </div>
        <div style={{textAlign:'center',marginLeft:'50px'}}>
            <div style={{backgroundColor:'#ffffff',width:'500px',height:'1000px',boxShadow:'1rem 1rem 1rem 0 rgb(68 68 68 / 20%)',borderRadius:'1rem'}}>
                <div style={{borderBottom:'1px solid gray'}}>
                <p style={{fontSize:'30px',paddingTop:'20px'}}>FrontEnd</p>
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                <div style={{borderRadius:'1rem',border:'1px solid gray',backgroundColor:'white',width:'130px',marginLeft:'20px',padding:'7px'}}>
                <img style={{width:'100px',height:'120px'}} src={skillimg2} alt='css'></img>
                </div>
                <div style={{backgroundColor:'gray',width:'130px', marginLeft:'20px',marginRight:'20px'}}>
                <img style={{width:'100px',height:'120px'}} src={skillimg} alt='css'></img>
                </div>
                <div style={{backgroundColor:'gray',width:'130px'}}>
                <img style={{width:'100px',height:'120px'}} src={skillimg3} alt='css'></img>
                </div>
                </div>
                <div style={{marginTop:'20px'}}>
                    <img style={{width:'400px'}} src={skillimg4} alt=""></img>
                </div>
                </div>
        </div>
        </div>
     
        </>
    )
}

export default Skill;