import React,{ useState,useEffect} from 'react'
import style from './advanComponent.module.css'
import axios from 'axios';
import { Carousel } from 'antd';

function AdvanComponent(){
    
    const [advanInfo,setAdvanInfo]=useState({
        adesc:'',
        advanlist: [
            {
                advanname:'',
                advanimage:'',
                advandesc:'',
                scene:''
            }  
        ]
    })
        
    
    useEffect(()=>{
        axios.get('/api/getAdvanInfo').then((res) => {
                setAdvanInfo(res.data.advanInfo)
        })
    })
        
    
    
    
        let list = () => {
            let res = [];
            for (let l = 0; l < advanInfo.advanlist.length / 3; l++) {
                res.push(<ul>
                    {advanInfo.advanlist.map((item, index) => {
                        if (index < 3 * (l + 1) && index >= l * 3){
                            return <li key={index}>
                            <img src={item.advanimage} alt=""/>
                            <h3>{item.advanname}</h3>
                            <p className={style.advandesc}>{item.advandesc}</p>
                        </li>
                        }
                            
                    })}
                </ul>)
            }


            return res;
        }
        return (<div className={style.advanBox}>
                <h1>产品优势</h1>
                <p className={style.adesc}>{advanInfo.adesc}</p>
                    <div
                    style={{width:'100%'}}>
                    <Carousel  dots={false}>
                    {list()}
                    </Carousel>
                    </div>
                
        </div>)
    }

export default AdvanComponent;