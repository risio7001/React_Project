import React, { useEffect, useState } from 'react';
import './signUp.css';

function SignUp(){
    const [name, setName]= useState();
    const [id, setId]= useState();
    const [pass, setPass]= useState();
    const [pass2, setPass2]= useState();
    const [click, setClick] = useState({name:"0", id:"0", password:"0", password2:"0"});

    useEffect(()=>{
        console.log(click.name);
    },[click]);

    function onSubmit(event){
        alert("NAME : " + name + "\n" + 
        "ID : " + id + "\n" + 
        "PASS : " + pass + "\n" + 
        "PASS2 : " + pass2);
        
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
                        <input
                            placeholder="password2"
                            type="password"
                            value={pass2}
                            onChange={(e)=>setPass2(e.target.value)}
                            className="inputPass2"
                        />
                        <br/>
                        <button value="Submit" style={{width:"80%", height:"50px", marginTop:"50px"}}>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default SignUp;