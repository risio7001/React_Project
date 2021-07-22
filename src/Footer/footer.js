import React from 'react';
import {Link} from 'react-router-dom';
import '../Footer/Footer.css';

function Footer(){

    return <>
        <div style={{
            width: "fit-content", height: "fit-content", backgroundColor: "rgb(32,35,55)",
            position: "absolute", padding: "64px 0px", color: "white"
        }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ width: document.documentElement.clientWidth, display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div style={{width:"80%", height:"fit-content", display: "flex", flexDirection: "row", paddingBottom:"32px"}}>
                        <div style={{marginRight:"30px", textAlign:"start", display:"flex", flexDirection:"column", width:"fit-content", height:"fit-content", color:"white"}}>
                        <p className="footer_menu_title">게임 개발사</p>
                            <p className="footer_menu_font">에픽 온라인 서비스</p>
                            <p className="footer_menu_font">에픽에임즈 스토어</p>
                            <p className="footer_menu_font">게임출시</p>
                            <p className="footer_menu_font">리소스</p>
                            <p className="footer_menu_font">언리얼 인디</p>
                        </div>
                        <div style={{marginRight:"30px",textAlign:"start", display:"flex", flexDirection:"column", width:"fit-content", height:"fit-content", color:"white"}}>
                        <p className="footer_menu_title">지원</p>
                            <p className="footer_menu_font">지원정보</p>
                            <p className="footer_menu_font">FAQ</p>
                            <p className="footer_menu_font">문서</p>
                            <p className="footer_menu_font">issues</p>
                            <p className="footer_menu_font">Forums</p>
                            <p className="footer_menu_font">네이버 카페</p>
                            <p className="footer_menu_font">언리얼 개발자 네트워크</p>
                        </div>
                        <div style={{marginRight:"30px",textAlign:"start", display:"flex", flexDirection:"column", width:"fit-content", height:"fit-content", color:"white"}}>
                        <p className="footer_menu_title">파트너쉽</p>
                            <p className="footer_menu_font">Nvidia Edge</p>
                            <p className="footer_menu_font">Intel + Unreal</p>
                            <p className="footer_menu_font">아카데믹 파트너</p>
                            <p className="footer_menu_font">트레이닝 파트너</p>
                        </div>
                        <div style={{marginRight:"30px",textAlign:"start", display:"flex", flexDirection:"column", width:"fit-content", height:"fit-content", color:"white"}}>
                            <p className="footer_menu_title">회사</p>
                            <p className="footer_menu_font">수상</p>
                            <p className="footer_menu_font">브랜딩 가이드라인</p>
                        </div>
                    </div>
                </div>

                <div style={{ width: document.documentElement.clientWidth, display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div style={{ padding: "15px", textAlign: "start", width: "80%", height: "fit-content", borderTop: "2px solid rgb(56,59,80)", fontSize: "12px", fontWeight: "400" }}>
                        © 2004-2021, Epic Games, Inc. All Rights Reserved. Unreal 및 그 로고의 저작권은 Epic Games, Inc. 에 있으며, 이는 미국 및 그 외 국가에 모두 해당됩니다.
                        <div style={{ display: "flex", flexDirection: "row", textAlign: "start" }}>
                            <p>이용약관</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>개인정보 처리방침</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Footer;