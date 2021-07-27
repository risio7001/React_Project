import React, { useEffect, useState } from 'react';
import './mainPage.css';
import video1 from '../Image/mainvideo2.mp4';
import img1 from '../Image/test1.png';
import img2 from '../Image/test2.png';
import Select from 'react-select';

function MainPage() {
    const [changeW, setChangeW] = useState(window.innerWidth);
    const [changeH, setChangeH] = useState(window.innerHeight);
    const [changeView, setChangeView] = useState(false);
    const [hundred, setHundred] = useState();
    const [scroll, setScroll] = useState();
    const [opacityStart, setOpacityStart] = useState("");
    const [size, setSize] = useState("30vh");
    const [sizeWidth, setSizeWidth] = useState(window.innerWidth);
        
    const options = [
        // { value: '산업선택', label: '산업선택' },
        { value: 'Advertising & Marketing', label: 'Advertising & Marketing' },
        { value: 'Aerospace', label: 'Aerospace' },
        { value: 'Broadcast & Live Events', label: 'Broadcast & Live Events' },
        { value: 'Education', label: 'Education' },
        { value: 'Games', label: 'Games' },
        { value: 'Other', label: 'Other' }
    ]
    

    function reSize() {
        setSizeWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', reSize)
        return () => { window.removeEventListener('resize', reSize); }
    }, [reSize]);

    const [translate, setTranslate] = useState();
    const handleScroll = () => {
        setChangeView(true);
        setChangeW(window.innerWidth);
        setChangeH(window.innerHeight);
        setScroll(window.scrollY);
        setHundred((100 - (((scroll * 1.2) / (changeH * 2)) * 100)) / 100);
        setOpacityStart(`${((changeH * 2) * (2 / 3)) / (scroll * 2)}`); // 최상단 이미지 투명도
    }
    useEffect(() => {                             // 현재 스크롤값 구하고 스크롤값이 변할때마다 값 수정.
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);

    return <>
        <div style={{ position: "relative",width: document.documentElement.clientWidth, zIndex: "1", backgroundColor: "rgb(32,35,55)" }}>
            <div style={{ width: document.documentElement.clientWidth, height: (window.innerHeight) * 1.5, display: "flex", justifyContent: "center", margin: "0px" }}>
                <div style={{
                    position: "sticky", top: "0px", width: document.documentElement.clientWidth, height: "100vh", transform: hundred < -1 ? "scale(0)" : window.scrollY === 0 ? 'scale(1)' : `scale(${hundred})`,
                    transition: "0.2s", backgroundColor: "grey", opacity: hundred
                }}>
                    <video src={video1} muted autoPlay loop style={{ width: "100%", height: "100%", objectFit: "fill" }}></video>
                </div>
                {sizeWidth <= 1280 ?
                    <div style={{ marginTop: "50vh", padding: "0px 14px", lineHeight: "450%", width: "90vw", height: "300px", background: "rgba(0, 0, 0, 0)", zIndex: "3", position: "absolute", opacity: (1 - (scroll / (changeH * 0.3))) }}>
                        <h1 style={{ color: "white", wordBreak: "keep-all", textAlign: "left", fontSize: "45px", fontWeight: "1" }}>
                            세계에서 가장 개방적이고 진보된 리얼타임 3D 제작 툴
                        </h1>
                    </div>
                    :
                    <div style={{ marginTop: "50vh", marginRight: "38vw", lineHeight: "450%", width: "700px", height: "300px", background: "rgba(0, 0, 0, 0)", zIndex: "3", position: "absolute", opacity: (1 - (scroll / (changeH * 0.3))) }}>
                        <h1 style={{ color: "white", wordBreak: "keep-all", textAlign: "left", fontSize: "66px", fontWeight: "1" }}>
                            세계에서 가장 개방적이고 진보된 리얼타임 3D 제작 툴
                        </h1>
                    </div>}
            </div>
            {/* <div style={{ marginTop: "45vh", float: "left", transition: "0.4s", position: "absolute", zIndex: "4", width: "400px", height: "400px", backgroundColor: "black", opacity: ((changeH / 9) / scroll) - 1 }}></div> */}
            <div style={{ width: document.documentElement.clientWidth, height: "70vh", transition: "0.5s", backgroundColor: "rgb(219,222,227)", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "100%", height: "50%", opacity: scroll <= (changeH * 0.8) ? 0 : 1, transition: "0.5s", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                    <p style={{ fontSize:"55px", fontWeight:"100"}}>무한의 창작</p>
                    <div style={{width:"100%", height:"fit-content", display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <div style={{width:"70%"}}>언리얼 엔진을 사용하면 세계에서 가장 진보된 리얼타임 3D 제작 툴로 멋진 리얼타임 경험을 구현할 수 있습니다. 누구나 이용할 수 있는 무료 리소스와
                        영감을 주는 커뮤니티는 첫 번째 프로젝트부터 가장 까다로운 도전에 이르기까지 누구나 꿈을 이룰 수 있도록 지원합니다.</div>    
                    </div>
                </div>
                <div style={{ width: "100%", height: "50%", display: "flex", flexDirection: "row", justifyContent: "center", wordBreak: "keep-all" }}>
                    <div style={{ width: "90%", height: "100%", display: "flex", justifyContent: "space-between", opacity: scroll <= (changeH * 1) ? 0 : 1, transition: "0.5s" }}>
                        <div className="mainPage_3_box_title">
                            <p className="mainPage_3_box_subTitle">언리얼 엔진 학습</p>
                            <p className="mainPage_3_box_subContent">
                                160시간 이상의 무료 온라인 콘텐츠와 폭넓은 웨비나 라이브러리 그리고 강사가 지도하는 트레이닝까지, 여러분의 학습 스타일에 맞는 다양한 옵션이 제공됩니다.</p>
                            <div className="mainPage_3_box_button">
                                <p>학습 시작하기</p>
                            </div>
                        </div>
                        <div className="mainPage_3_box_title">
                            <p className="mainPage_3_box_subTitle">커뮤니티</p>
                            <p className="mainPage_3_box_subContent">
                                언리얼 크리에이터는 언리얼 엔진의 진정한 원동력입니다. 최첨단의 경험을 구축하고 서로 도움을 주고받는 커뮤니티에 참여하세요.</p>
                            <div className="mainPage_3_box_button">
                                <p>커뮤니티 방문하기</p>
                            </div>
                        </div>
                        <div className="mainPage_3_box_title">
                            <p className="mainPage_3_box_subTitle">지원 정보</p>
                            <p className="mainPage_3_box_subContent">
                                포괄적인 레퍼런스 문서, 교육용 가이드, 커뮤니티 기반 지원, 그리고 전문가의 전담 지원 옵션 등을 알아보세요.</p>
                            <div className="mainPage_3_box_button">
                                <p>지원 정보 보기</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: document.documentElement.clientWidth, height: "110vh", transition: "0.5s", backgroundColor: "rgb(219,222,227)"
            , display: "flex", flexDirection: "row", justifyContent:"center" }}>
                <div style={{ width: "90%", height: "80%" }}>
                    <div style={{
                        display: "flex", width: "100%", height: "20%", opacity: scroll <= (changeH * 1.3) ? 0 : 1, transition: "0.5s",
                        borderBottom: "1px solid black"}}>
                        <div style={{ width: "50%", height: "100%", lineHeight:"4" }}>

                            <p style={{ fontSize: "35px", float:"left" }}>언리얼 엔진 최신 소식</p>
                        </div>
                        <div style={{width:"50%", height:"100%", display:"flex", flexDirection:"row-reverse"}}>
                            <div className="test">
                                <p style ={{color:"rgb(56,59,80)", fontSize:"13px"}}>
                                    모든 뉴스 & 이벤트 보기
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display:"flex",flexDirection:"column",justifyContent:"center", width: "100%", height: "60%", opacity: scroll <= (changeH * 1.3) ? 0 : 1, transition: "0.5s" }}>
                        <div className="mainPage_5_img_box_top">
                            <div style={{width:"48%", height:"100%", overflow:"hidden"}}>
                                <img src={img1} width="100%" height="100%" className="img1_hover"/>
                            </div>
                            <div style={{width:"48%", height:"100%", overflow:"hidden"}}>
                                <img src={img2} width="100%" height="100%" className="img1_hover"/>
                            </div>
                        </div>
                    </div>
                    <div style={{  display:"flex",flexDirection:"row", justifyContent:"space-between", width: "100%", height: "40%",
                     opacity: scroll <= (changeH * 1.3) ? 0 : 1, transition: "0.5s" }}>
                        <div style={{ width:"48%", height:"100%", display:"flex", flexDirection:"column", textAlign:"left"}}>
                            <p style={{ lineHeight:"0"}}>뉴스</p>
                            <p className="mainPage_5_news_box_title">언리얼 엔진 5 얼리 액세스 출시!</p>
                            <p style={{ lineHeight:"1.5", color:"rgb(56,59,80)", overflowWrap:"break-word", wordBreak:"keep-all"}}>루멘, 나나이트 그리고 더 많은 기술을 사용해 보실 준비가 되셨나요? 이번 UE5 빌드는 차세대 기술에 관심 있는 게임 개발자를 위한 빌드입니다. 지금 새로운 기능을 경험해 보고, 다음 차세대 게임을 프로토타이핑하고, 피드백을 공유해 주세요.</p>
                            <p className="mainPage_5_news_box_content_more">더 알아보기</p>
                        </div>
                        <div style={{width:"48%", height:"100%",display:"flex", flexDirection:"column", textAlign:"left"}}>
                        <p style={{ lineHeight:"0"}}>뉴스</p>
                            <p className="mainPage_5_news_box_title">메타휴먼 크리에이터 얼리 액세스 출시!</p>
                            <p style={{ lineHeight:"1.5", color:"rgb(56,59,80)", overflowWrap:"break-word", wordBreak:"keep-all"}}>메타휴먼 크리에이터를 경험하려고 기다리셨나요? 지금 바로 얼리 액세스를 신청하고 여러분 만의 특별한 고퀄리티의 디지털 휴먼을 몇 분 만에 제작해 보세요. 그리고 퀵셀 브리지에서 50가지의 메타휴먼 프리셋을 무료로 받아 보세요!</p>
                            <p className="mainPage_5_news_box_content_more">액세스 신청하기</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:"linear-gradient(to bottom right, #3a4ed5 0%, #3acfd5 100%)", width: "100%", height: "fit-content", transition: "0.5s", opacity: scroll <= (changeH * 1.8) ? 0 : 1 }}>
                <div style={{ display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>
                    <div style={{ width:"100%", height:"70%",display:"flex",flexDirection:"column", justifyContent:"center"}}>
                        <div style={{  width:"100%", height:"70%", display:"flex", flexDirection:"row", justifyContent:"center"}}>
                            <div style={{ maxWidth:"1500px", display:'flex',padding:"100px", flexDirection:"row", justifyContent:"space-between", width:"80%"}}>
                                <div style={{width:"30%"}}>
                                    <p style={{float:"left", fontSize:"45px"}}>모든 기능이<br/>제공됩니다</p>
                                </div>
                                <div className="mainPage_6_box">
                                    <p style={{fontWeight:"bold"}}>
                                        언리얼 엔진을 다운로드하세요
                                    </p>
                                    <p style={{fontSize:"30px", float:"left", margintop:"100px"}}>
                                        지금<br/>
                                        다운로드하세요
                                    </p>
                                    <p style={{float:"left"}}>
                                        얼리얼 엔진은 제작에 바로 사용할 수 있는<br/>
                                        모든 기능과 풀 소스 코드 액세스를 무료로<br/>
                                        제공합니다.
                                    </p>
                                </div>
                                <div className="mainPage_6_box2">
                                    <p style={{fontWeight:"bold"}}>
                                        문의하세요
                                    </p>
                                    <p style={{fontSize:"30px", float:"left", margintop:"140px"}}>
                                        맞춤형 라이선스
                                    </p>
                                    <p style={{float:"left"}}>
                                        기술 지원, 맞춤형 조항 또는 에픽게임즈와<br/>
                                        직접적인 연락이 필요하신가요?<br/>
                                        엔터프라이즈 라이선스 또는 맞춤형 
                                        솔루션을 문의하세요.
                                    </p>
                                </div>
                            </div>
                        </div>
                       <div style={{width:"100%", height:"400px", display:"flex", flexDirection:"column"}}>
                            <div style={{width: "100%", height: "fit-content", display:"flex", flexDirection:"row",
                            justifyContent:"center" }}>
                                <div style={{zIndex:"1000", maxWidth:"1500px", width:"80%", maxHeight:"400px", minHeight:"400px", height:"400px", backgroundColor:"white" }}>
                                    
                                    <div>
                                        <p style={{fontSize:"16px", fontWeight:"bold"}}>뉴스레터</p>
                                    </div>
                                    <div>
                                        <p style={{fontSize:"34px", fontWeight:"300", wordBreak:"keep-all"}}>
                                        업계 혁신과 무료 에셋에 대한 최신 정보를 받아보세요 
                                        </p>
                                    </div>
                                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                                        <div style={{justifyContent:"center", width:"40%"}}>
                                            <Select
                                                style={{}}
                                                options={options}
                                                placeholder="산업선택"
                                                />
                                                
                                        </div>
                                    </div>
                                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", padding:"10px"}}>
                                            <div>
                                                <input type="email"
                                                 style={{width:"300px", height:"50px", border:"none", borderRadius:"0px", fontSize:"20px", backgroundColor:"rgb(236,239,242)"}}
                                                 placeholder="email*"
                                                 ></input>
                                            </div>
                                            <div style={{width:"100px", height:"50px",fontSize:"13px", textAlign:"center",lineHeight:"4", background:"linear-gradient(to bottom right, #3a4ed5 0%, #3acfd5 100%)"}}>
                                                구독하기
                                            </div>
                                    </div>
                                    <div>
                                        <p style={{fontSize:"14px"}}>
                                            언리얼 엔진 및 에픽게임즈의 뉴스, 설문조사, 행사 및 이벤트 정보 수신에 동의합니다.
                                        </p>
                                        <p style={{color:"blue", fontSize:"14px"}}>
                                            개인정보 취급방침
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div>

                    </div>

                </div>
            </div>
            <div style={{width:document.documentElement.clientWidth ,height:"200px", marginTop:"-200px", backgroundColor:"rgb(32,35,55)" }}>

            </div>
        </div>
    </>
}
export default MainPage;