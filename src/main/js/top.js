import './../css/top.css';

const Top = () => {
    return(
        <>
            <div className='top_container'>
            <p 
          style={{
            zIndex:'1',
            fontSize: '150px',
            color: 'white',
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: 0,
            animation: 'fadeIn 3s ease-in-out'
          }}
        >
          자기소개 글 짧게 한줄로!
        </p>
            </div>
        </>
    )
}

export default Top;