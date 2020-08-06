import React, { useEffect, useState,useRef } from 'react'
import style from './sceneComponent.module.css'
import axios from 'axios'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function SceneComponent() {

    const [advanlist, setAdvanlist] = useState([
        {
            advanname: '',
            advanimage: '',
            advandesc: '',
            scene: ''
        }
    ]);

    let [scenedesc, setScenedesc] = useState('')
    useEffect(() => {
        axios.get('/api/getAdvanInfo').then((res) => {
            setAdvanlist(res.data.advanInfo.advanlist)
            setScenedesc(res.data.advanInfo.scenedesc)
        })
    })
    let sceneCarousel=useRef(null);
    
   

    let carouselBtn=sceneCarousel?.current?.slick;
    
    
        let list = () => {
            let res = [];
            for (let l = 0; l < advanlist.length / 3; l++) {
                res.push(<div className={style.allScene}>
                <div  className={style.allSceneDiv}>
                    {advanlist.map((item, index) => {
                        if (index < 3 * (l + 1) && index >= l * 3)
                            return <div key={index} className={style.oneScene}>
                                <div>
                                    <h3>{(index+1)<10?'0' + (index + 1):index+1}&nbsp;&nbsp;{item.advanname}</h3>
                                </div>
                                <p>
                                    {item.scene}
                                </p>
                            </div>
                    })}
                </div></div>)
            }
            return res;
        }
        return (<div className={style.sceneBox}>
            <h1>适用场景</h1>
            <p className={style.sdesc}>{scenedesc}</p>
            
                
                    <Carousel  ref={sceneCarousel} dots={false}>
                    {list()}

                </Carousel>
                
                
            
            <button onClick={() => { carouselBtn.slickPrev() }} className={style.prevbtn}><LeftOutlined /></button>
            <button onClick={() => { carouselBtn.slickNext() }} className={style.nextbtn}><RightOutlined /></button>
        </div>)
}
export default SceneComponent;