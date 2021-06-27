import React, { useEffect, useState } from 'react';
import { DB, Auth } from '../firebase';

const Info = () =>{
    const [userInfo, setUserInfo] = useState();
    useEffect(()=>{
        readUser();
        console.log("3333333333333333" + userInfo.name);
    },[]);
    const readUser = ()=>{
        DB.collection("u_info").doc(Auth.currentUser.uid).get().then((doc)=>{
            setUserInfo(doc.data());
        });
    }
    
    return<>
        <div style={{ width: "100vw", height: "100vh", display: 'flex', justifyContent: "center", flexDirection: "column", color: "white" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ borderRadius: "10px", width: "400px", height: "70vh", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h1 style={{ color: "black" }}> {userInfo.name} </h1>
                    {/* <div>
                        <form onSubmit={onSubmit}>
                            <input
                                placeholder="ID"
                                type="email"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                className="inputId"
                            />
                            <input
                                placeholder="password"
                                type="password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                className="inputPass"
                            />
                            <br />
                            <button value="Submit" style={{ width: "80%", height: "50px", marginTop: "50px", border: "solid 1px grey", borderRadius: "10px" }}>Login</button>
                            <Link to="/SignUp">
                                <button value="button" style={{ width: "80%", height: "50px", marginTop: "50px", border: "solid 1px grey", borderRadius: "10px" }}>SignUp</button>
                            </Link>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    </>
}

export default Info