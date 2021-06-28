import React, { useEffect, useState } from 'react';
import './mainPage.css';
import video1 from '../Image/mainvideo2.mp4';


function MainPage() {
    const [changeW, setChangeW] = useState(window.innerWidth);
    const [changeH, setChangeH] = useState(window.innerHeight);
    const [changeView, setChangeView] = useState(false);
    const [hundred, setHundred] = useState();
    const [scroll, setScroll] = useState();
    const [opacityStart, setOpacityStart] = useState("");
    const [size, setSize] = useState("30vh");
    const [sizeWidth, setSizeWidth] = useState(window.innerWidth);
    const [buttonOver, setButtonOver] = useState()

    function reSize() {
        // console.log("sizeTest00 : " + size);
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

        // console.log("Opacity Test : " + (1-(scroll/(changeH*0.3))) + "%" );

        setOpacityStart(`${((changeH * 2) * (2 / 3)) / (scroll * 2)}`); // 최상단 이미지 투명도
    }
    useEffect(() => {                             // 현재 스크롤값 구하고 스크롤값이 변할때마다 값 수정.
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);

    return <>
        <div style={{ position: "absolute", zIndex: "1", backgroundColor: "rgb(32,35,55)" }}>
            <div style={{ width: document.documentElement.clientWidth, height: (window.innerHeight) * 1.5, display: "flex", justifyContent: "center", margin: "0px" }}>
                <div style={{
                    position: "sticky", top: "0px", width: document.documentElement.clientWidth, height: "100vh", transform: hundred < -1 ? "scale(0)" : `scale(${hundred})`,
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
                    <h1>무한의 창작</h1>
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
            <div style={{ width: document.documentElement.clientWidth, height: "90vh", transition: "0.5s", backgroundColor: "rgb(219,222,227)"
            , display: "flex", flexDirection: "row", justifyContent:"center" }}>
                <div style={{ width: "90%", height: "90%" }}>

                    <div style={{display:"flex", width: "100%", height: "20%", opacity: scroll <= (changeH * 1.3) ? 0 : 1, transition: "0.5s" }}>
                        <p>언리얼 엔진 최신 소식</p>
                    </div>
                    <div style={{display:"flex", width: "100%", height: "40%", opacity: scroll <= (changeH * 1.3) ? 0 : 1, transition: "0.5s" }}>
                        <div style={{}}>

                        </div>
                    </div>
                    <div style={{display:"flex", width: "100%", height: "40%", opacity: scroll <= (changeH * 1.3) ? 0 : 1, transition: "0.5s" }}>
                        <h1>언리얼 엔진 최신 소식</h1>
                    </div>
                </div>
            </div>

            <article style={{ width: "100vw", height: "80vh", transition: "0.5s", opacity: scroll <= (changeH * 1.8) ? 0 : 1 }}>

            </article>
            <div style={{ height: "100vh", width: "100vw" }}>

            </div>
            {/* <article style={{ width: "100vw", height: "100vh", transition: "0.5s", opacity: (scroll - ((changeH * 4) * 0.5)) }}>
                    <h1>The HP Pavilion</h1>
                    <p>The HP Pavilion g6-1d46dx was a decent mainstream laptop in its day, and you could replace it with something very similar. There have been lots of changes at the low end of the windows market, with touch-screen tablets and 2-in-1s, and at the high-end, with super-thin laptops with high-resolution screens, like the latest Dell XPS 13 and Microsoft’s new Surface laptop. But 15.6in laptops have not changed much, and they still sell by the truckload. Today’s mainstream laptops are thinner than they used to be – your HP g6 is 1.4in thick – and cheaper. However, the standard specification remains much the same. Your current laptop, for example, has 4GB of memory, a 500GB hard drive, a 1366 x 768-pixel screen and Microsoft Windows. That’s still the most common specification. Some 15.6in laptops now have touch screens, but those are optional. You’re probably not going to use a 15.6in laptop as a tablet, so you’d be better off spending the extra cash on an external Bluetooth or USB mouse. One thing that has changed is that three brands now dominate Windows PC sales in the USA, where you live. In the fourth quarter of last year, according to Gartner’s market research, HP had 30% of the whole PC market (including Apple), with Dell on 25% and Lenovo on 14%. Acer and Asus had about 4% each. There’s been a lot of consolidation in a declining market, which means non-specialist (and non-Apple) buyers rarely look beyond the top five suppliers. Both HP and Dell sell PCs from their online stores, so you can look at those for special offers. If you buy online, both companies offer reasonably-priced support contracts that you won’t get from a retailer. I am based in the UK, so I’m not very familiar with the American retail market, and I don’t know if you live within range of any particular stores. I’m therefore going to restrict my links to Amazon.com. However, you can search for alternative sources. The processor is usually the most expensive part of a mainstream 15.6in laptop and has the greatest impact on both price and performance.</p>
                </article> */}
        </div>
    </>
}
export default MainPage;