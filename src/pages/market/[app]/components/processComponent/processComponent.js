import React, { useEffect, useState,useRef } from 'react'
import style from './processComponent.module.css'
import axios from 'axios';
import { Carousel } from 'antd';

function ProcessComponent(props) {

    let [pdesc, setPdesc] = useState('');
    let [num, setNum] = useState(0);
    const [processlist, setProcesslist] = useState([
        {
            processname: '',
            processimage: '',
            processdesc: '',
        }
    ])


    useEffect(() => {
        axios.get('/api/getProcessInfo').then((res) => {

            setPdesc(res.data.processInfo.pdesc)
            setProcesslist(res.data.processInfo.processlist)


        })
    })
    let phoneimg=useRef(null);
    let mouseIsHover = (index) => {
      
      if(num!=index){
        setNum(index)
        phoneimg.current.slick.slickGoTo(index+1, false)
      }
        
    }

    return <div className={style.processBox}>
        <h1>使用流程</h1>
        <p>{pdesc}</p>
        <div className={style.allProcessBox}>
            <div style={{ width: '60%', float: 'left' }}>
                <ul>
                    {
                        processlist.map((item, index) => {
                            return <li
                                key={index}
                                onMouseEnter={()=>mouseIsHover(index)}
                                className={`${num === index ? style.isSelect : ''}`}
                            >
                                <h2>{item.processname}</h2>
                                <p>{item.processdesc}</p>
                            </li>
                        })
                    }
                </ul>
            </div>

            <div className={style.mobileBorder}>
                <Carousel ref={phoneimg} dotPosition='left' dots={false}>

                    {
                        processlist.map((item, index) => {
                            return <div key={index}><img src={item.processimage} alt=''  />
                            </div>
                        })
                    }


                </Carousel></div>
        </div>

    </div>
}
export default ProcessComponent;