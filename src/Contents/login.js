import React, { useEffect, useState } from 'react';
import {DB, Auth} from '../firebase';
import {Link, Redirect, useHistory} from 'react-router-dom'
import './signUp.css';

function Login(props){
    const [id, setId]=useState("");
    const [pass, setPass]=useState("");

    let history = useHistory();
    function onSubmit(event){
        if(id === ""){
            alert("이메일을 입력해주세요.");
        }
        else if(pass === ""){
            alert("비밀번호를 입력해주세요.");
        }
        else if(pass.length <= 5){
            alert("비밀번호를 6자리 이상 입력해주세요.");
        }
        Auth.signInWithEmailAndPassword(id, pass)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                sendName(user);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("아이디 비밀번호를 확인해 주세요");
            });
        // Auth.onAuthStateChanged((user) => {
        //     if (user) {
        //       // User is signed in, see docs for a list of available properties
        //       // https://firebase.google.com/docs/reference/js/firebase.User
        //       var uid = user.uid;
        //       // ...
        //     } else {
        //       // User is signed out
        //       // ...
        //     }
        //   })
        //   .catch((error) => {
        //       console.log(error);
        //     // ..
        //   });
        // ;
        
        event.preventDefault();
    }

    function sendName (user){
        console.log("user Info : " + user)
        DB.collection("u_info").doc(user.uid).get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data().name);
                props.setLogin(doc.data().name);
                alert("로그인 성공 ");
                history.push("/");
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        // setSend_name;
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
                                type="email"
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
                        <button value="Submit" style={{width:"80%", height:"50px", marginTop:"50px",border:"solid 1px grey", borderRadius:"10px"}}>Login</button>
                        <Link to="/SignUp">
                            <button value="button" style={{width:"80%", height:"50px", marginTop:"50px",border:"solid 1px grey", borderRadius:"10px"}}>SignUp</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Login;