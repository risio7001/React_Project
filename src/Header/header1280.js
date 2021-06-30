import React, { useEffect, useState } from 'react';
import '../Header/header1280.css'
import {text} from '../TextContents/totalText'
import { Link } from 'react-router-dom';

function Header1280(login){
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
    const [categoty, setCategory] = useState("container");
    const [categoryMore, setCategoryMore] = useState("categoryMore");
    const [categoryMore_Detail, setCategoryMore_Detail] = useState("categoryMore_Detail");
    function myFunction() {
        if(categoty === "change"){
            setCategory("container");   // 카테고리 아이콘
            setCategoryMore("categoryMore");    //  카테고리 div
            setCategoryMore_Detail("categoryMore_Detail");
            
        }else{
            setCategory("change");  // 카테고리 아이콘
            setCategoryMore("change_categoryMore");    //  카테고리 div
        }
        
      }

    function categoryReset(){   // 페이지 이동시 카테고리 div 접기
        setCategoryMore("categoryMore");
        setCategory("container");
        setCategoryMore_Detail("categoryMore_Detail")
    }

    const [category_data, setCategory_data] = useState();
    function categoryMore_Detail_Button(item){
        let data = [];
        data = text.find(({title}) => title == item.title);
        // console.log(data);
        if(categoryMore_Detail === "categoryMore_Detail"){
            setCategoryMore_Detail("change_categotyMore_Detail");
            setCategory_data(data);
        }else{
            setCategoryMore_Detail("categoryMore_Detail");
        }
    }


    return <>
        <div className="header1280">
            <div className="header1280_left"><Link to="/" onClick={categoryReset}><p style={{width:"100px",textAlign:"center", lineHeight:"3", margin:"0px", 
            height:"52", color: "white", fontWeight: "bold" }}>LOGO</p></Link></div>
            <div className="header1280_center"><p style={{ color: "white", fontWeight: "bold" }}>LOGO SECOND</p></div>
            <div className="header1280_right">
                <div class={categoty} onClick={myFunction}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </div>
        </div>
        <div style={{position:"absolute", marginTop:"52px", overflowX:"hidden", marginLeft:categoryMore === "change_categoryMore" ? "0%" : "100%", 
        transition:"0.3s", width:categoryMore == "change_categoryMore" ? "100vw" : "0px", float:"right", display: "flex", flexDirection:"row"}}>
            <div style={{position:"relative", zIndex:"4500", width:"100px", height:"1px"}}>

            </div>
            <div className={categoryMore} style={{width:(window.innerWidth - 100), height:(window.innerHeight - 52)}}>
                <div style={{position:"relative",overflowX:"hidden", overflowY:"ato"}}>
                {headerText.map((item)=>(
                    // <Link to={item.link} onClick={categoryReset}>
                    <div className="categoryMore_name" onClick={()=>categoryMore_Detail_Button(item)}>
                        {item.title}
                    </div>
                    // </Link>
                ))}
                </div>
                <div className="categoryMore_Footer">
                    <Link to="/Login" onClick={categoryReset}>
                    <div className="login_container">
                        LOGIN
                    </div>
                    </Link>
                    <div className="download_container">
                        다운로드
                    </div>
                </div>
            </div>
            
        </div>
        
        <div  style={{position:"absolute", zIndex:4502, marginTop:"52px", overflowX:"hidden", marginLeft:categoryMore_Detail === "change_categotyMore_Detail" ? "0%":"100%", 
    transition:"0.3s", width:categoryMore_Detail==="change_categotyMore_Detail" ? "100vw":"0px", float:"right", display:"flex", flexDirection:"row"}}>
            <div style={{position:"relative", zIndex:4503, width:"100px", height:"1px"}}>

            </div>
            <div style={{width:(window.innerWidth-100), height:(window.innerHeight - 52), position:"relative", zIndex:4503, backgroundColor:"rgb(32, 35, 55)", display:"flex", flexDirection:"column"}}>
                    <div className="backPress" onClick={()=>setCategoryMore_Detail("categoryMore_Detail")}>
                        뒤로가기
                    </div>
                    <div style={{backgroundColor:"black", width:"100%", height:"fit-content"}}>
                        {category_data === undefined ? "":
                            <div style={{paddingLeft:"12px", paddingRight:"40px", color:"white", width:"100%", height:"fit-content", backgroundColor:"rgb(32, 35, 55)", borderBottom:"1px solid rgb(56,59,80)"}}>
                                <h1 style={{margin:"0px", paddingRight:"40px"}}>{category_data.title}</h1>
                                <p style={{paddingRight:"40px"}}>{category_data.content2}</p>
                                <Link to={category_data.link} onClick={categoryReset}>
                                <p className="tag" style={{paddingRight:"40px"}}>{category_data.tag}</p>
                                <p className="tag2" style={{paddingRight:"40px"}}>{category_data.tag2}</p>
                                <p className="tag3" style={{paddingRight:"40px"}}>{category_data.tag3}</p>
                                <p className="tag4" style={{paddingRight:"40px"}}>{category_data.tag4}</p>
                                <p className="tag5" style={{paddingRight:"40px"}}>{category_data.tag5}</p>
                                <p className="tag6" style={{paddingRight:"40px"}}>{category_data.tag6}</p>
                                </Link>
                            </div>
                            }
                    </div>
            </div>
        </div>
    </>

}
export default Header1280;