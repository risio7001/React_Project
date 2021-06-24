import React, { useEffect, useState } from 'react';
import '../Header/headerStyle.css'
import {text} from '../TextContents/totalText'
import { Link } from 'react-router-dom';
// import mark from '../Image'

function Header(){
    const [scroll, setScroll]= useState("");
    const [test, setTest]=useState(0);
    let textContent = [];
    text.forEach(item=>{
        textContent.push({
            link:item.link,
            title:item.title,
            content:item.content,
            content2:item.content2,
            tag:item.tag,
            tag2:item.tag2,
            tag3:item.tag3,
            tag4:item.tag4,
            tag5:item.tag5,
            tag6:item.tag6,
        });
    });
    const [headerText, setHeaderText] = useState(textContent);
    
    function scrollHandler(){
        setScroll(window.scrollY);
    }

    useEffect(()=>{
    window.addEventListener('scroll', scrollHandler);
    return ()=>{window.removeEventListener('scroll', scrollHandler);}
    },[scrollHandler]);
    const [on, setOn]= useState(false);
    const [contentText, setContentText] = useState();
    const [test1, setTest1]=useState(0);

    return <>
            <div className="headerStyle" >
            <div className="leftHeader">
            <Link to="/">
            <div className="logo">
                <p>LOGO</p>
            </div>
            </Link>
                <div className="moreView0" onMouseLeave={() => setContentText("")}>
                
                    {headerText.map((text, idx) => (
                        <div className="moreView" onMouseEnter={() => setContentText(text)}>
                            <p style={{color:"white", fontSize:"12px"}}>{text.title}</p>
                        </div>
                    ))}
                    {contentText !== undefined ?
                        <div className="moreView2">
                            <div style={{ display: "flex", flexDirection: "column" , opacity:1, transition:"0.5s"}}>
                                <h1 className="text">{contentText.content}</h1>
                                <p style={{ color: "white" }}>{contentText.content2}</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", marginLeft:"100px" }}>
                                {/* <Link to={contentText.link}> */}
                                <p className="tag">{contentText.tag}</p>
                                <p className="tag2">{contentText.tag2}</p>
                                <p className="tag3">{contentText.tag3}</p>
                                <p className="tag4">{contentText.tag4}</p>
                                <p className="tag5">{contentText.tag5}</p>
                                <p className="tag6">{contentText.tag6}</p>
                                {/* </Link> */}
                            </div>
                        </div>
                    :
                    ""
                    }
                </div>
            </div>
            <Link to="/Login">
                <div className="rightHeader">
                    <p>로그인</p>
                </div>
            </Link>
        </div>
    </>
}

export default Header