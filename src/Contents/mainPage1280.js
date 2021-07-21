import React, { useEffect, useState } from 'react';
import './mainPage1280.css';
import backImg from '../Image/test3.png';
import scroll_img from '../Image/scroll.png';
import img1 from '../Image/test1.png';
import img2 from '../Image/test2.png';


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
            <div style={{backgroundImage:`url(${backImg})`, backgroundColor:"rgb(32,36,55)", width:document.documentElement.clientWidth, height:"100vh"}}>
                <div style={{background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(32,36,55,1) 100%)", width:document.documentElement.clientWidth, height:"100%"}}>
                    <p className="mainPage1280_div_1_text" style={{width:document.documentElement.clientWidth, opacity:opa === undefined ? 0 : 1}}>
                        세계에서 가장 개방적이고 진보된 리얼타임 3D 제작 툴
                    </p>
                </div>
            </div>
            {()=>setOpa(1)}
        </div>
        <div className="mainPage1280_div_2">
            <div className="mainPage1280_div_2_box">
                <p style={{fontSize:"38px",fontWeight:"100", paddingTop:"30px"}}>무한의 창작</p>
                <div style={{marginBottom:"30px", marginTop:"-30px", display:"flex",width:"100%", height:"fit-content", flexDirection:"row", justifyContent:"center"}}>
                    <p style={{fontSize:"16px", wordBreak:"keep-all", width:"90%", color:"rgb(56,59,80)"}}>언리얼 엔진을 사용하면 세계에서 가장 진보된 리얼타임 3D 제작 툴로 멋진 리얼타임 경험을 구현할 수 있습니다. 누구나 이용할 수 있는 무료 리소스와
                            영감을 주는 커뮤니티는 첫 번째 프로젝트부터 가장 까다로운 도전에 이르기까지 누구나 꿈을 이룰 수 있도록 지원합니다.</p>
                </div>
                </div>
                <div style={{ width: "100%", height: "fit-content", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div style={{ width: "90%", height: "fit-content", display: "flex", flexDirection: "column" }}>
                        <div className="mainPage1280_div_2_box2">
                            <p className="mainPage_div_2_box3_subTitle">
                            언리얼 엔진 학습
                            </p>
                            <p className="mainPage_div_2_box3_subContent">
                            160시간 이상의 무료 온라인 콘텐츠와 폭넓은 웨비나 라이브러리 그리고 강사가 지도하는 트레이닝까지, 여러분의 학습 스타일에 맞는 다양한 옵션이 제공됩니다.
                            </p>
                            <div className="mainPage1280_div_2_box3_button">
                                학습하기
                            </div>
                        </div>
                        <div className="mainPage1280_div_2_box2">
                            <p className="mainPage_div_2_box3_subTitle">
                            커뮤니티
                            </p>
                            <p className="mainPage_div_2_box3_subContent">
                            언리얼 크리에이터는 언리얼 엔진의 진정한 원동력입니다. 최첨단의 경험을 구축하고 서로 도움을 주고받는 커뮤니티에 참여하세요.
                            </p>
                            <div className="mainPage1280_div_2_box3_button">
                            커뮤니티 방문하기
                            </div>
                        </div>
                        <div className="mainPage1280_div_2_box2">
                            <p className="mainPage_div_2_box3_subTitle">
                            지원 정보
                            </p>
                            <p className="mainPage_div_2_box3_subContent">
                            포괄적인 레퍼런스 문서, 교육용 가이드, 커뮤니티 기반 지원, 그리고 전문가의 전담 지원 옵션 등을 알아보세요.
                            </p>
                            <div className="mainPage1280_div_2_box3_button">
                            지원 정보 보기
                            </div>
                        </div>
                        <div className="mainPage1280_div_2_box2">
                            <p style={{fontSize:"35px"}}>언리얼 엔진 최신 소식</p>
                            <div style={{width:"fit-content", height:"fit-content"}}>
                                <p style ={{color:"rgb(56,59,80)", fontSize:"13px", borderBottom:"3px solid"}}>
                                모든 뉴스 & 이벤트 보기
                                </p>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                                <img src={img1} style={{width:"100%", height:"30vh"}}/>
                            </div>
                        </div>


                    </div>

                </div>
        </div>
    </div>
    </>
}
export default MainPage1280