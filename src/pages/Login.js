import React from 'react';

import style from '../scss/style.module.scss';

//임시 로그인 계정
const userInfo = {
    id : 'mjcah2013',
    pw : '1234@'
}

const Login = () => {
    
    
    const useridRef = React.useRef();
    const userpwRef = React.useRef();
    
    

    const [userid, setUserid] = React.useState('');
    const [userpw, setUserpw] = React.useState(''); 
    const [idValid, setIdValid] = React.useState(false);

    const handleSubmit = ()=>{
        const idvalue = useridRef.current.value;
        const pwvalue = userpwRef.current.value;
        setUserid(idvalue);
        setUserpw(pwvalue);
        
        if(idvalue === userInfo.id && pwvalue === userInfo.pw){
            alert('로그인 성공')
            localStorage.setItem('id', idvalue);
            localStorage.setItem('pw', pwvalue);
        }
        else {
            alert('아이디와 비밀번호가 다릅니다.');
            idvalue.current.value = '';
            pwvalue.current.value = '';
        }
        
    }
console.log(idValid);
    //id 유효성 검사
    const checkId = (e)=>{
        let regExp = /^[a-zA-z0-9]{4,12}$/;
        const result = regExp.text(e.target.value);
        console.log(result);
        if(!regExp){
            alert('아이디는 영문대소문자와 4~12자리 숫자여야 합니다.')
            setIdValid(false);
        }else{
            setIdValid(true);
        }
        return result;
        
    }
    
    return (
        <div className={style.container}>
            <h1>instagram</h1>
            <form onSubmit={handleSubmit}>
                <section className={style.login_form}>
                    <input type="text" name="id" id="id" ref={useridRef}  required   placeholder="전화번호, 사용자 이름 또는 이메일"className={style.form_control}/>
                    <input type="password" name="password" id="password" ref={userpwRef}placeholder="비밀번호" required className={style.form_control}/>
              
                
                    <div>
                        <button type="submit" className={style.btn}>로그인</button>
                    </div>
                    <div className={style.box}>
                      <div className={style.line}>또는</div>
                      <a href="#" style={{marginTop : '10px'}}>Facebook으로 로그인</a>
                      <a href="#">비밀번호 찾기</a>
                    </div>
                </section>
            </form>
            <div className={style.box2}>
                <p>계정이 없으신가요?
                    <a href="#"><span>가입하기</span></a>
                </p>
            </div>
            <div>
                <p>앱을 다운로드 하세요</p>
                <div className={style.footer}>
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + '/assets/img/google.png'}></img>
                    </a>
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + '/assets/img/app.png'}></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;