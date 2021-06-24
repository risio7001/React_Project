import React, { useEffect, useState } from 'react';
import {DB} from '../firebase';
import {Link, Redirect, useHistory} from 'react-router-dom'
import './signUp.css';

function Login(){
    const [test, setTest]=useState();
    const [id, setId]=useState();
    const [pass, setPass]=useState();

    let history = useHistory();
    function onSubmit(event){
        // DB.collection("users").add({
        //     ID: value,
        //     PASS: pass,
        //     born: 1815
        // })
        // .then((docRef) => {
        //     alert("완료");
        //     history.push("/");
        // })
        // .catch((error) => {
        //     alert("로그인에 실패하였습니다.");
        // });
        // console.log("Test 111 : " + value + "\n" + "Test222 : " + pass);
        DB.collection("users").get().then((doc) => {   // firebase에 접근
            let data = [];
            doc.forEach((item) =>{     // 각각의 결과값을 검색
                data.push(item.data());
                console.log(item.data());  // 출력
            })
        });
        event.preventDefault();
    }

    // function onChange(e){
    //     setValue(e.target.value);
    //     console.log("onChange Test : " + value);
    // }
    // useEffect(()=>{
    //     DB.collection("users").get().then((doc) => {   // firebase에 접근
    //         let data = [];
    //         doc.forEach((item) =>{     // 각각의 결과값을 검색
    //             data.push(item.data());
    //             console.log(item.data());  // 출력
    //         })
    //     });
    // },[]);

    return<>
        <div style={{width:"100vw", height:"100vh", display:'flex', justifyContent:"center", flexDirection:"column", color:"white"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{borderRadius:"10px", width:"400px", height:"70vh", backgroundColor:"white", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <h1 style={{color:"black"}}> Login </h1>
                <div>
                    <form onSubmit={onSubmit}>
                        <input
                            placeholder="ID"
                            type="text"
                            value={id}
                            onChange={(e)=>setId(e.target.value)}
                            className="inputId"
                        />
                        <input
                            placeholder="password"
                            type="password"
                            value={pass}
                            onChange={(e)=>setPass(e.target.value)}
                            className="inputPass"
                        />
                        <br/>
                        <button value="Submit" style={{width:"80%", height:"50px", marginTop:"50px"}}>Login</button>
                        <Link to="/SignUp">
                            <button value="button" style={{width:"80%", height:"50px", marginTop:"50px"}}>SignUp</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Login;