import React,{useState,useEffect} from 'react';
import style from './popularappComponent.module.css';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

function PopularappComponent(){
    
            const [appContentList,setAppContentList]=useState([
                {
                    name: 'Hippius海马汇',
                    img: require('@/assets/marketImg/hippius.svg'),
                },
                {
                    name: 'OneContract一诺合同',
                    img: require('@/assets/marketImg/yinuo.svg'),
                },
                {
                    name: 'HZERO微服务应用开发平台',
                    img: require('@/assets/marketImg/hzero.svg'),
                },
                {
                    name: 'Choerodon猪齿鱼',
                    img: require('@/assets/marketImg/choerodon.svg'),
                },
            ])

            const [appInfoList,setAppInfoList]=useState([
                {
                    content1:'移动办公，从海马汇开始！',
                    content2:'HIPPIUS海马汇移动中台，将各类移动应用共性需求进行标准化的实现，帮助企业用户快速上线移动应用，提高信息化水平。',
                    img: require('@/assets/marketImg/2应用商店.gif'),
                    url:'',
                    alt:'海马汇',
                    flag:0,
                },
                {
                    content1:'一纸合同，一诺千金。',
                    content2:'OneContract一诺智能合同管理系统是一款独立灵活、跨平台、跨架构、轻量化的合同管理平台产品，为HCBM合同产品的优化升级版本。',
                    img: require('@/assets/marketImg/一诺-域变量拖拽.gif'),
                    url:'',
                    alt:'一诺合同',
                    flag:1,
                },
                {
                    content1:'融合汉得多年来丰富的项目实施经验，抽象、封装大量的标准服务及功能',
                    content2:'技术统一、能力共享，屏蔽不同系统的技术实现差异，为业务前台和业务中台提供稳定的技术保障。',
                    img: require('@/assets/marketImg/hzero图片.png'),
                    url:'',
                    alt:'HZERO',
                    flag:1,
                },
                {
                    content1:'Choerodon猪齿鱼开源多云应用敏捷全链路技术平台通过提供精益敏捷、持续交付、容器环境、微服务、DevOps等能力',
                    content2:'帮助组织团队完成软件的生命周期管理',
                    img: require('@/assets/marketImg/猪齿鱼展示图片.png'),
                    url:'',
                    alt:'Choerodon猪齿鱼',
                    flag:1,
                },
            ])
            let [appIndex,setAppIndex]=useState(0),
        
    
    
    mouseIsHover=(index)=>{
        //let a=document.querySelectorAll('.'+style.appContent);
        let b=document.querySelector('.'+style.appInfoBox);
        if(b!=null){
           b.classList.remove(style.isSelect) 
        }
        
        // a.forEach((item,index1)=>{
        //     item.classList.remove(style.isHover)
        //     if(index1===index){
        //         item.classList.add(style.isHover)
                
        //     }
        // })
       setTimeout(()=>{
        if(b!=null){
            b.classList.add(style.isSelect)
         }
        
       },300);
       setAppIndex(index)
    }
    
        return (<div className={style.popular}>
            <div className={style.popularTitle}>
                <h1>热门应用</h1>
                <p>精选5款热门应用，每一款均为专业团队打造，满足企业开发、管理需求用</p>
            </div>
            <Row>
            <Col className={style.popularBody} span={20} offset={2}>
                <Row gutter={80} className={style.appBox}>
                    {
                        appContentList.map((item,index) => {
                            return <Col
                             key={index} 
                             className={`${style.appContent} ${index===appIndex?style.isHover:''}`} 
                             span={24/appContentList.length}
                             onMouseEnter ={()=>mouseIsHover(index)}
                             ><Link to={'/market/app2'}>
                             
                                <img src={item.img} alt={item.name}></img>
                                <span>{item.name}</span>
                                </Link>
                            </Col>
                        })
                    }
                </Row>
            </Col>
            </Row>
            <div>
                <div className={`${style.appInfoBox} ${style.isSelect}`}>
                    <Row>
                        <Col span={14} offset={5}>
                          <div className={style.contentBox}><p>
                        {appInfoList[appIndex].content1}
                        </p>
                        <p>
                        {appInfoList[appIndex].content2}
                        </p></div>
                        
                        </Col>
                    </Row>
                    <div>
                        <div className={`${style.realBorder} ${appInfoList[appIndex].flag===0?style.mobileBorder:style.padBorder}`}>
                            <img src={appInfoList[appIndex].img} alt={appInfoList[appIndex].alt}/>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>)
        
    }
export default PopularappComponent;