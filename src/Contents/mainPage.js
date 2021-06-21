import React, { useEffect, useState } from 'react';
import './mainPage.css';
import video1 from '../Image/mainvideo2.mp4';


function MainPage() {
    const [changeW, setChangeW] = useState(window.innerWidth);
    const [changeH, setChangeH] = useState(window.innerHeight);
    const [changeView, setChangeView]= useState(false);
    const [hundred, setHundred] = useState();
    const [scroll, setScroll] = useState();
    const [opacityStart, setOpacityStart] = useState("");
    const [size, setSize] = useState("30vh");
    const [sizeWidth, setSizeWidth] = useState(window.innerWidth);
    
    function reSize() {
        // console.log("sizeTest00 : " + size);
        setSizeWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', reSize)
        return () => { window.removeEventListener('resize', reSize); }
    }, [reSize]);

    const [translate, setTranslate]=useState();

    const handleScroll = () => {
        setChangeView(true);
        setChangeW(window.innerWidth);
        setChangeH(window.innerHeight);
        setScroll(window.scrollY);
        setHundred((100 - (((scroll*1.2)/(changeH*2))*100))/100);

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
            <div style={{ position: "absolute", zIndex: "1", backgroundColor:"rgb(32,35,55)"}}>
                <div style={{ width: "100vw", height: (window.innerHeight) * 1.5, display: "flex", justifyContent: "center", margin: "0px" }}>
                    <div style={{
                        position: "sticky", top: "0px", width:"100vw", height: "100vh", transform:hundred < -1 ? "scale(0)" : `scale(${hundred})`,
                        transition: "0.2s", backgroundColor: "grey", opacity: hundred
                    }}>
                        <video src={video1} muted autoPlay loop style={{width:"100%", height:"100%", objectFit:"fill"}}></video>
                    </div>
                    {sizeWidth <= 1280 ? 
                    <div style={{marginTop:"50vh", padding:"0px 14px", lineHeight:"450%", width:"90vw", height:"300px", background:"rgba(0, 0, 0, 0)", zIndex:"3", position:"absolute", opacity:(1-(scroll/(changeH*0.3)))}}>
                            <h1 style={{color:"white",wordBreak:"keep-all", textAlign:"left",  fontSize:"45px", fontWeight:"1"}}>
                            세계에서 가장 개방적이고 진보된 리얼타임 3D 제작 툴
                            </h1>
                    </div>
                    :
                    <div style={{marginTop:"50vh",marginRight:"38vw", lineHeight:"450%", width:"700px", height:"300px", background:"rgba(0, 0, 0, 0)", zIndex:"3", position:"absolute", opacity:(1-(scroll/(changeH*0.3)))}}>
                            <h1 style={{color:"white",wordBreak:"keep-all", textAlign:"left",  fontSize:"66px", fontWeight:"1"}}>
                            세계에서 가장 개방적이고 진보된 리얼타임 3D 제작 툴
                            </h1>
                    </div>}
                    
                </div>
                {/* <div style={{ marginTop: "45vh", float: "left", transition: "0.4s", position: "absolute", zIndex: "4", width: "400px", height: "400px", backgroundColor: "black", opacity: ((changeH / 9) / scroll) - 1 }}></div> */}
                <div style={{ width: "100vw", height: "100vh", transition: "0.9s", opacity: (scroll - ((changeH * 1.5) * 0.5)) }}>
                    <h1>Google Docs</h1>
                    <p>A Google Docs scam that appears to be widespread began landing in users’ inboxes on Wednesday in what seemed to be a sophisticated phishing or malware attack. The deceptive invitation to edit a Google Doc – the popular app used for writing and sharing files – appeared to be spreading rapidly, with a subject line stating a contact has shared a document on Google Docs with you”. If users click the Open in Docs” button in the email, it takes them to a legitimate Google sign-in screen that asks to continue in Google Docs”. Clicking on that link grants permission to a bogus third-party app to possibly access contacts and email, which could allow the spam to spread to additional contacts. Google has said it is aware of the issue and investigating it. The company encouraged users to report the email as phishing within Gmail. We have taken action to protect users against an email impersonating Google Docs, and have disabled offending accounts,” a spokesperson said in a statement. We’ve removed the fake pages, pushed updates through Safe Browsing, and our abuse team is working to prevent this kind of spoofing from happening again.” The company did not immediately respond to requests for comment on how many people had been affected by the attack and where it may have originated. Numerous journalists have reported receiving the phishing email, including multiple Guardian reporters. One message to the Guardian came from a maryland.gov account associated with law enforcement and was addressed to hhhhhhhhhhhhhhhh@mailinator.com”, and blind-copied the reporter. </p>
                </div>

                <article style={{ width: "100vw", height: "100vh", transition: "0.5s", opacity: (scroll - ((changeH * 4) * 0.6)) }}>
                    <h1>Microsoft</h1>
                    <p>Microsoft has spent a lot of time (and money) trying to make Windows self-repairing, partly because it generally gets the blame when other programs – or users – try to improve” it. Given that tens of thousands of expert programmers have worked on the code over the past 30 years, the number of safe, simple, significant and forwards-/backwards-compatible improvements may be quite small. If Windows 10 knew you had a blank or even a black screen of death, it would try to fix it. If it can’t fix it, it should switch to the Windows Recovery Environment, otherwise known as Windows RE or WinRE, which boils down to two options: 1) Start Windows in safe mode using the code on the internal hard drive, then use the troubleshooting routines to fix it. 2) Use code on an external device such as a recovery DVD or USB thumbdrive to start Windows, and then repair or replace the code on the internal hard drive. So, your first aim should be to get to WinRE. From there you can get to safe mode and use the troubleshooting and repair options. If you can’t do that, you will have to – as WinRE puts it – use a device”. Safe mode was designed to solve the chicken-and-egg problem that you need to access your PC to fix it, but you can’t access your PC if it won’t start. </p>
                </article>
                <div style={{height:"100vh", width:"100cw"}}>

                </div>
                {/* <article style={{ width: "100vw", height: "100vh", transition: "0.5s", opacity: (scroll - ((changeH * 4) * 0.5)) }}>
                    <h1>The HP Pavilion</h1>
                    <p>The HP Pavilion g6-1d46dx was a decent mainstream laptop in its day, and you could replace it with something very similar. There have been lots of changes at the low end of the windows market, with touch-screen tablets and 2-in-1s, and at the high-end, with super-thin laptops with high-resolution screens, like the latest Dell XPS 13 and Microsoft’s new Surface laptop. But 15.6in laptops have not changed much, and they still sell by the truckload. Today’s mainstream laptops are thinner than they used to be – your HP g6 is 1.4in thick – and cheaper. However, the standard specification remains much the same. Your current laptop, for example, has 4GB of memory, a 500GB hard drive, a 1366 x 768-pixel screen and Microsoft Windows. That’s still the most common specification. Some 15.6in laptops now have touch screens, but those are optional. You’re probably not going to use a 15.6in laptop as a tablet, so you’d be better off spending the extra cash on an external Bluetooth or USB mouse. One thing that has changed is that three brands now dominate Windows PC sales in the USA, where you live. In the fourth quarter of last year, according to Gartner’s market research, HP had 30% of the whole PC market (including Apple), with Dell on 25% and Lenovo on 14%. Acer and Asus had about 4% each. There’s been a lot of consolidation in a declining market, which means non-specialist (and non-Apple) buyers rarely look beyond the top five suppliers. Both HP and Dell sell PCs from their online stores, so you can look at those for special offers. If you buy online, both companies offer reasonably-priced support contracts that you won’t get from a retailer. I am based in the UK, so I’m not very familiar with the American retail market, and I don’t know if you live within range of any particular stores. I’m therefore going to restrict my links to Amazon.com. However, you can search for alternative sources. The processor is usually the most expensive part of a mainstream 15.6in laptop and has the greatest impact on both price and performance.</p>
                </article> */}
            </div>
    </>
}
export default MainPage;