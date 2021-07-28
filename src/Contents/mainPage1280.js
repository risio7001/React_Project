import React, { useEffect, useState } from 'react';
import './mainPage1280.css';
import backImg from '../Image/test3.png';
import scroll_img from '../Image/scroll.png';
import img1 from '../Image/test1.png';
import img2 from '../Image/test2.png';
import Select from 'react-select';

function MainPage1280(){
    const [topImg, setTopImg]= useState();
    const [scroll, setScroll] = useState()
    const [opa, setOpa]=useState();
    const [changeH, setChangeH] = useState(window.innerHeight);

    const scrollHandler = () => {
        setTopImg((window.innerHeight - (window.scrollY*2))/1000);
        setScroll(window.scrollY);
        setChangeH(window.innerHeight);
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

    const [resize, setResize]=useState(document.documentElement.clientWidth);
    const resizing = ()=>{
        setResize(document.documentElement.clientWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize', resizing);
        return ()=>{window.removeEventListener('resize', resizing)}
    },[resizing]);

    const options = [
        // { value: '산업선택', label: '산업선택' },
        { value: 'Advertising & Marketing', label: 'Advertising & Marketing' },
        { value: 'Aerospace', label: 'Aerospace' },
        { value: 'Broadcast & Live Events', label: 'Broadcast & Live Events' },
        { value: 'Education', label: 'Education' },
        { value: 'Games', label: 'Games' },
        { value: 'Other', label: 'Other' }
    ]
    
    return<>
    <div style={{width:resize === undefined ? document.documentElement.clientWidth : resize, height:"fit-content"}}>
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
                            <div style={{borderBottom:"1px solid black", marginBottom:"24px", width:"100%"}}>

                            </div>
                            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", overflow:"hidden"}}>
                                <img src={img1} style={{width:"100%", height:"30vh"}} className="img2_hover"/>
                            </div>
                            <div style={{padding:"24px 0px", width:"fit-content", height:"fit-content"}}>
                                <div style={{padding:"8px 0px", fontSize:"16px", fontWeight:"bold"}}>
                                    뉴스
                                </div>
                                <div style={{padding:"8px 0px", fontSize:"22px", fontWeight:"400"}}>
                                    언리얼 엔진 5 얼리 액세스 출시!
                                </div>
                                <div style={{lineHeight:"30px", color:"rgb(56,59,80)"}}>
                                루멘, 나나이트 그리고 더 많은 기술을 사용해 보실 준비가 되셨나요? 이번 UE5 빌드는 차세대 기술에 관심 있는 게임 개발자를 위한 빌드입니다. 지금 새로운 기능을 경험해 보고, 다음 차세대 게임을 프로토타이핑하고, 피드백을 공유해 주세요.
                                </div>
                                <div style={{ width:"fit-content", height:"fit-content", padding:"16px 0px", fontSize:"13px", letterSpacing:"2px"}}>더 알아보기
                                <hr style={{height:"3px", backgroundColor:"blue", border:"none"}}></hr></div>
                            </div>


                            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", overflow:"hidden"}}>
                                <img src={img2} style={{width:"100%", height:"30vh"}} className="img2_hover"/>
                            </div>
                            <div style={{padding:"24px 0px", width:"fit-content", height:"fit-content"}}>
                                <div style={{padding:"8px 0px", fontSize:"16px", fontWeight:"bold"}}>
                                    뉴스
                                </div>
                                <div style={{padding:"8px 0px", fontSize:"22px", fontWeight:"400"}}>
                                    메타휴먼 크리에이터 얼리 액세스 출시!
                                </div>
                                <div style={{lineHeight:"30px", color:"rgb(56,59,80)"}}>
                                메타휴먼 크리에이터를 경험하려고 기다리셨나요? 지금 바로 얼리 액세스를 신청하고 여러분 만의 특별한 고퀄리티의 디지털 휴먼을 몇 분 만에 제작해 보세요. 그리고 퀵셀 브리지에서 50가지의 메타휴먼 프리셋을 무료로 받아 보세요!
                                </div>
                                <div style={{ width:"fit-content", height:"fit-content", padding:"16px 0px", fontSize:"13px", letterSpacing:"2px"}}>더 알아보기
                                <hr style={{height:"3px", backgroundColor:"blue", border:"none"}}></hr></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ background: "linear-gradient(to bottom right, #3a4ed5 0%, #3acfd5 100%)", width: "100%", transition: "0.5s", 
                            opacity: scroll <= (changeH * 1.8) ? 0 : 1 }}>
                    <h2 style={{ fontWeight: "300", paddingTop: "24px", fontSize: "36px", wordBreak: "keep-all" }}>모든 기능이 제공됩니다</h2>
                    
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width:"100%" }}>
                        <div style={{display:"flex", flexDirection:"column", width:"90%"}}>
                            
                            <div style={{ backgroundColor: "rgba(0,0,0,0)", border: "4px solid white", width: "100%", textAlign:"left" }}>
                                <p style={{ padding:"0px 16px"}}>언리얼 엔진을 다운로드하세요</p>
                                <h2 style={{ fontWeight: "300", padding:"16px 16px 0px 16px", fontSize: "32px", wordBreak: "keep-all" }}>지금 다운로드하세요</h2>
                                <p style={{wordBreak: "keep-all", padding:"0px 16px", lineHeight:"30px"}}>얼리얼 엔진은 제작에 바로 사용할 수 있는 모든 기능과 풀 소스 코드 액세스를 무료로 제공합니다.</p>
                            </div>

                            <div style={{height:"24px", backgroundColor:"rgba(0,0,0,0)"}}></div>

                            <div style={{ backgroundColor: "rgba(0,0,0,0)", border: "4px solid white", width: "100%", textAlign:"left" }}>
                                <p style={{ padding:"0px 16px"}}>언리얼 엔진을 다운로드하세요</p>
                                <h2 style={{ fontWeight: "300", padding:"16px 16px", fontSize: "32px", wordBreak: "keep-all" }}>지금 다운로드하세요</h2>
                                <p style={{wordBreak: "keep-all", padding:"0px 16px", lineHeight:"30px"}}>
                                기술 지원, 맞춤형 조항 또는 에픽게임즈와 직접적인 연락이 필요하신가요? 엔터프라이즈 라이선스 또는 맞춤형 솔루션을 문의하세요.
                                </p>
                            </div>

                            <div style={{height:"56px"}}></div>

                            <div style={{position:"relative",zIndex:"15000", backgroundColor:"white", width:"100%", height:"400px"}}>
                                <h4 style={{fontWeight:"600", fontSize:"16px"}}>뉴스레터</h4>
                                <h2 style={{padding:"0px 8px", fontSize:"30px",wordBreak:"keep-all", lineHeight:"38px", fontWeight:"300"}}>
                                    업계 혁신과 무료 에셋에 대한 최신 정보를 받아보세요 
                                    </h2>
                                <div style={{width:"100%",display:"flex", flexDirection:"row", justifyContent:"center"}}>
                                    <div style={{width:"40%"}}>
                                        <Select
                                            options={options}
                                            placeholder="산업선택"
                                            />
                                    </div>
                                </div>
                                <div style={{width:"100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                    <div style={{width:"70%", display:"flex", flexDirection:"column", paddingTop:"8px"}}>
                                        <div style={{ width:"100%"}}>
                                            <input type="email"
                                                style={{padding:"0", width: "100%", height: "50px", border: "none", borderRadius: "0px", fontSize: "20px", backgroundColor: "rgb(236,239,242)" }}
                                                placeholder="email*"
                                            ></input>
                                        </div>
                                        <div style={{ width: "100%", height: "50px", fontSize: "13px", textAlign: "center", lineHeight: "4", background: "linear-gradient(to bottom right, #3a4ed5 0%, #3acfd5 100%)" }}>
                                            구독하기
                                        </div>
                                    </div>
                                </div>
                                <div style={{padding:"0px 8px"}}>
                                    <p style={{ fontSize: "14px" }}>
                                        언리얼 엔진 및 에픽게임즈의 뉴스, 설문조사, 행사 및 이벤트 정보 수신에 동의합니다.
                                    </p>
                                    <p style={{ color: "blue", fontSize: "14px" }}>
                                        개인정보 취급방침
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:"-200px", backgroundColor: "rgb(32, 35, 55)", width:"100%", height:"200px"}}>

                    </div>
                </div>
        </div>
    </div>
    </>
}
export default MainPage1280