# 인스타그램 클론코딩

### 프로젝트 구조
```
public
├── assets
│   ├── img
├── data
│   └── user.json
├── logo192.png
├── logo512.png
├── index.html
src
├── Components
│   ├── FeedLis.js
│   └── Top.js
├── pages
│   ├── Feed.js
│   └── Login.js
├── App.js
├── scss
│   ├──style.module.scss
└── index.js
```

### 로그인 기능
useRef()속성으로 input 값의 접근, 임시 로그인 계정정보와 input값의 value가 일치한다면 localStorage에 id,pw 등록한 뒤 useNavigate()속성으로 Feed페이지로 이동하게 하였습니다.
-----------
```
//임시 로그인 계정정보
const userInfo = {
    id : 'mjcah2013',
    pw : '1234@'
}
```

```
const login () =>{


const [userid, setUserid] = React.useState('');
const [userpw, setUserpw] = React.useState(''); 

const useridRef = React.useRef();
const userpwRef = React.useRef();

const handleSubmit = ()=>{
        const idvalue = useridRef.current.value;
        const pwvalue = userpwRef.current.value;
        setUserid(idvalue);
        setUserpw(pwvalue);
        
        if(idvalue === userInfo.id && pwvalue === userInfo.pw){
            alert('로그인 성공')
            localStorage.setItem('id', idvalue);
            localStorage.setItem('pw', pwvalue);
            navigate('/feed');
        }
        else {
            alert('아이디와 비밀번호가 다릅니다.');
            idvalue.current.value = '';
            pwvalue.current.value = '';
        }
        
    }
}
```
### 로그아웃 기능
로그아웃 버튼 클릭시 localStorage에 등록했던 id,pw를 지우고 로그인 페이지로 이동하게 하였습니다.
---------
```
 const onDelete = ()=>{
        localStorage.removeItem('id');
        localStorage.removeItem('pw');
        navigate('/login');
    }
```

### 피드
useEffect()로 페이지가 열리자마자 axios로 user.json데이터를 받아온 뒤 props로 FeedList에 받은 데이터를 보내줍니다.
------
```
const Feed = () => {
    const [data, setData] = React.useState([]);
   
       React.useEffect(()=>{
        axios.get(`${process.env.PUBLIC_URL}/data/user.json`)
            .then((response) =>{
                setData(response.data);
            })
       }, [])

       return (
        <div>
            <Top />
            <FeedList user={data.user}/>
        </div>
    );
```

### 피드리스트
Feed.js에서 props로 받아온 데이터를 map()함수를 사용하여 출력
--------
```

```



