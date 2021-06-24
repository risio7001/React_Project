import React, { useEffect, useState } from 'react';
import {DB} from '../firebase';
import {Link, Redirect, useHistory} from 'react-router-dom'

function Login(){
    const [value ,setValue] = useState({name:"11"});
    const [pass, setPass] = useState({pass:""});
    const [test, setTest]=useState();
    let history = useHistory();
    function onSubmit(event){
        DB.collection("users").add({
            ID: value,
            PASS: pass,
            born: 1815
        })
        .then((docRef) => {
            alert("완료");
            history.push("/");
            
        })
        .catch((error) => {
            alert("로그인에 실패하였습니다.");
        });

        console.log("Test 111 : " + value + "\n" + "Test222 : " + pass);
        event.preventDefault();
    }

    function onChange(e){
        setValue(e.target.value);
        console.log("onChange Test : " + value);
    }
    useEffect(()=>{
        DB.collection("users").get().then((doc) => {   // firebase에 접근
            let data = [];
            doc.forEach((item) =>{     // 각각의 결과값을 검색
                data.push(item.data());
                console.log(item.data());  // 출력
            })
        });
    },[]);

    function signUp(){
        
    }
    return<>
        <div style={{width:"100vw", height:"100vh", backgroundColor:"rgb(32, 35, 55)", display:'flex', justifyContent:"center"}}>
            <div style={{backgroundColor:"black", width:"500px", height:"80vh", marginTop:"52px", display:"flex", justifyContent:"center"}}>
                <div style={{backgroundColor:"white", width:"400px", height:"70vh", marginTop:"52px"}}>
                   <form onSubmit={onSubmit}>
                       <div style={{width:"100%"}}>
                        <input
                            type="text"
                            placeholder="name"
                            value={value.name}
                            onChange={(e)=>setValue(e.target.value)}
                            style={{width:"80%", height:"30px"}}
                        /></div><br/>
                        <div>
                        <input
                            type="password"
                            placeholder="password"
                            value={pass}
                            onChange={(e)=>setPass(e.target.value)}
                            style={{width:"80%", height:"30px"}}
                            />
                        </div>
                        <br/>
                        <button value="Submit" style={{width:"200px", height:"40px", color:"white", backgroundColor:"rgb(16,74,130)"}}>submit</button>
                   </form>
                   <br/>
                   <Link to="/SignUp">
                   <button>SignUp</button>
                   </Link>
                </div>
            </div>
        </div>
    </>
}
export default Login;