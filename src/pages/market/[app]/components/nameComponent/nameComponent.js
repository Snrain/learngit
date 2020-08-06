import React, { useState, useEffect } from 'react';
import axios from 'axios'
import style from './nameComponent.module.css'
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Button } from 'antd';

function NameComponent() {

    const [compInfo, setCompInfo] = useState({
        cname: '',
        cdesc: '',
        ckinddesc: '',
        ckindlist: [],

    })


    useEffect(() => {

        axios.get('/api/getCompInfo').then((res) => {


            setCompInfo(res.data.compInfo)


        })

    })

    return (<div className={style.nameBox}>
        <h1>{compInfo.cname}</h1>
        <p className={style.kinddesc}><span>{compInfo.ckinddesc}</span><span>V1.1.2</span></p>
        <div className={style.osname}>
            <span className={style.iosSty}>
                <AppleFilled />IOS
                </span>
            <span className={style.andSty}>
                <AndroidFilled />anroid
            </span>

        </div>
        <p className={style.cdesc}>{compInfo.cdesc}</p>
        <ul>
            {
                compInfo.ckindlist.map((item, index) => {
                    return <li key={index}>
                        {item}
                    </li>
                })
            }
        </ul>
        <div className={style.buttonBox}>
            <Button style={{ backgroundColor: '#FF8A2B'}}>申请试用</Button>
            <Button style={{ border: '1px solid #FF8A2B'}}>产品文档</Button>
        </div>
    </div>)
}

export default NameComponent