import React, { useEffect, useState } from 'react';
import './signUp.css';
import {Auth, DB} from '../firebase'
import { Redirect, useHistory } from 'react-router-dom';

function SignUp(){
    const [name, setName]= useState("");
    const [id, setId]= useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    let history = useHistory();



    function onSubmit(event) {
        console.log("11111111111");
        if(name === ""){
            alert("이름을 입력해주세요");
        }
        else if(id === ""){
            alert("이메일을 입력해주세요");
        }
        else if(pass === ""){
            alert("비밀번호를 입력해주세요");
        }
        else if(pass2 === ""){
            alert("비밀번호 확인란을 입력해주세요");
        }
        else if(pass.length < 6){
            alert("비밀번호를 6자리 이상 입력해주세요.");
        }
        else if(pass !== pass2){
            alert("비밀번호가 일치하지 않습니다.");
        }
        else{
            Auth.createUserWithEmailAndPassword(id, pass)
            .then((userCredential) => {
                var user = userCredential.user;
                let docRef = DB.collection("u_info").doc(user.uid);
                docRef.set({
                    uid : user.uid,
                    name : name,
                    email : user.email
                });
                // console.log("3333333333333333333 : "  + docRef.id);
                // console.log(user);
                history.push("/Login");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("222222222222222 : " + errorMessage);
                console.log("44444444444444444 : " + errorCode);
                // ..
            });
        alert("NAME : " + name + "\n" +
            "ID : " + id + "\n" +
            "PASS : " + pass + "\n" +
            "PASS2 : " + pass2);
        }
        event.preventDefault();
    }


    return<>
    <div style={{width:"100vw", height:"100vh", display:'flex', justifyContent:"center", flexDirection:"column", color:"white"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{borderRadius:"10px", width:"400px", height:"70vh", backgroundColor:"white", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <h1 style={{color:"black"}}> SignUp </h1>
                <div>
                    <form onSubmit={onSubmit}>
                        <input
                            placeholder="name"
                            type="name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="inputName"
                        />
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
                        <input
                            placeholder="password2"
                            type="password"
                            value={pass2}
                            onChange={(e)=>setPass2(e.target.value)}
                            className="inputPass2"
                        />
                        <br/>
                        <button value="Submit" style={{width:"80%", height:"50px", marginTop:"50px",border:"solid 1px grey", borderRadius:"10px"}}>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default SignUp;