import React, { useEffect, useState } from 'react';
import './mainPage1280.css';
import backImg from '../Image/test3.png';

function MainPage1280(){
    const [topImg, setTopImg]= useState();
    const [scroll, setScroll] = useState()
    const [opa, setOpa]=useState();

    const scrollHandler = () => {
        setTopImg((window.innerHeight - (window.scrollY*2))/1000);
    }

    useEffect(()=>{
        setOpa(1);
    },[setOpa]);

    useEffect(()=>{
        window.addEventListener('scroll', scrollHandler);
        return ()=>{
            window.removeEventListener('scroll', scrollHandler)
        }
    },[scrollHandler]);
    
    return<>
    <div style={{width:document.documentElement.clientWidth, height:"fit-content"}}>
        <div className="mainPage1280_div_1" >
            <div className="img" style={{zIndex:1, opacity:topImg === undefined ? "1" : topImg}}>
                <img src={backImg}/>
            </div>
            <div className="mainPage1280_div_1_text" style={{opacity:opa === undefined ? 0 : 1, transition:"5s"}}>
                세계에서 가장 개방적이고 진보된 리얼타임 3D 제작 툴
            </div>
            {()=>setOpa(1)}
        </div>
        <div className="mainPage1280_div_2">
            <div className="mainPage1280_div_2_box">
                <p style={{fontSize:"38px",fontWeight:"100", paddingTop:"30px"}}>무한의 창작</p>
                <div style={{marginTop:"-30px", display:"flex",width:"100%", height:"fit-content", flexDirection:"row", justifyContent:"center"}}>
                    <p style={{fontSize:"16px", wordBreak:"keep-all", width:"90%"}}>언리얼 엔진을 사용하면 세계에서 가장 진보된 리얼타임 3D 제작 툴로 멋진 리얼타임 경험을 구현할 수 있습니다. 누구나 이용할 수 있는 무료 리소스와
                            영감을 주는 커뮤니티는 첫 번째 프로젝트부터 가장 까다로운 도전에 이르기까지 누구나 꿈을 이룰 수 있도록 지원합니다.</p>
                </div>
            </div>
            <div style={{ display:"flex", width:"100%", height:"fit-content", flexDirection:"column", justifyContent:"center"}}>
                <div className="mainPage1280_div_2_box2">
                        adsfasdfsadfsadf
                </div>
                <div className="mainPage1280_div_2_box3">

                </div>
            </div>
        </div>
    </div>
    </>
}
export default MainPage1280