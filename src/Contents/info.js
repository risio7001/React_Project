import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DB, Auth } from '../firebase';

const Info = (props) => {
    const [userInfo, setUserInfo] = useState("");
    let history = useHistory();
    function userData() {
        try{
            DB.collection("u_info").doc(Auth.currentUser.uid).get().then((doc) => {
                setUserInfo(doc.data());
            })
            return<>
                <h1 style={{ color: "black" }}>{userInfo.name + "님"}</h1>
            </>
        }catch(e){
            console.log("에러 : " + e);
            console.log()
            alert("로그아웃 되셨습니다.\n로그인페이지로 이동합니다.");
            history.push("/Login");
            Auth.signOut().then(() => {
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              });
        }
    }
    function logout(){
        Auth.signOut().then(() => {
            props.setLogin();
            alert("로그아웃 성공");
            history.push("/");
          }).catch((error) => {
            // An error happened.
          });
    }
    return<>
        <div style={{ width: "100vw", height: "100vh", display: 'flex', justifyContent: "center", flexDirection: "column", color: "white" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ borderRadius: "10px", width: "400px", height: "70vh", backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {userData()}
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <div onClick={()=>logout()} style={{backgroundColor:"red", width:"80%", height:"50px", borderRadius:"10px"}}>로그아웃</div>
                    </div>
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