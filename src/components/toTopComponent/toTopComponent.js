import React from 'react'
import style from './toTopComponent.module.css'
import { ToTopOutlined, HeartFilled, MessageFilled } from '@ant-design/icons'
import { Affix } from 'antd';

function ToTopComponent(){


    return (<Affix className={style.totop} offsetTop={400}>
            <ul>
                <li><a href="#top"><ToTopOutlined/></a></li>
                <li><HeartFilled/></li>
                <li><MessageFilled/></li>
            </ul>
    </Affix>)

}
export default ToTopComponent;