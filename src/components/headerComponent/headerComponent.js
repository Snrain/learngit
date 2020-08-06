import React from 'react';
import style from './headerComponent.module.css';
import { Affix } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ToTopComponent from '../toTopComponent/toTopComponent'
function HeaderComponent() {
    return (
        <div>
            <ToTopComponent/>
            <div id="top"/>
            <Affix offsetTop={0}>
                <div className={style.head}>
                    <ul className={style.headLeft}>
                        <li className={style.log}>
                            <img src={require('@/assets/marketImg/log1.png')} alt='log' style={{ float: 'left' }} />
                            <div className={style.logText}>
                                <span>汉得应用市场</span>
                                <span>HAND APP MARKET</span>
                            </div>
                        </li>
                        <li>技术产品</li>
                        <li>业务产品</li>
                        <li>案例中心</li>
                    </ul>
                    <ul className={style.headRight}>
                        <li className={style.inputBox}>
                            <SearchOutlined />
                            <input placeholder='请搜索关键词'></input>
                        </li>
                        <li>
                            <Avatar icon={<UserOutlined />} />
                        </li>
                        <li>

                            <span>monkey</span>
                        </li>
                    </ul>
                </div>
                
            </Affix>
            
        </div>

    )
}
export default HeaderComponent;