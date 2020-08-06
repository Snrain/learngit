import React, { useEffect, useState } from 'react';
import style from './partnersComponent.module.css';
import { Carousel } from 'antd';

function PartnersComponent() {


    const [partnersList,setPartnersList] = useState([
        {
            img: require('@/assets/marketImg/huawei.svg'),
            content: '华为公有云标准经销商' +
                '华为认证服务解决方案伙伴' +
                '华为渠道认证服务伙伴' +
                '华为优选解决方案伙伴',
        },
        {
            img: require('@/assets/marketImg/tencentcloud.svg'),
            content: '华为公有云标准经销商' +
                '华为认证服务解决方案伙伴' +
                '华为渠道认证服务伙伴' +
                '华为优选解决方案伙伴',
        },
        {
            img: require('@/assets/marketImg/tencentcompany.svg'),
            content: '华为公有云标准经销商' +
                '华为认证服务解决方案伙伴' +
                '华为渠道认证服务伙伴' +
                '华为优选解决方案伙伴',
        },
        {
            img: require('@/assets/marketImg/huawei.svg'),
            content: '华为公有云标准经销商' +
                '华为认证服务解决方案伙伴' +
                '华为渠道认证服务伙伴' +
                '华为优选解决方案伙伴',
        },
        {
            img: require('@/assets/marketImg/huawei.svg'),
            content: '华为公有云标准经销商' +
                '华为认证服务解决方案伙伴' +
                '华为渠道认证服务伙伴' +
                '华为优选解决方案伙伴',
        },
        {
            img: require('@/assets/marketImg/huawei.svg'),
            content: '华为公有云标准经销商' +
                '华为认证服务解决方案伙伴' +
                '华为渠道认证服务伙伴' +
                '华为优选解决方案伙伴',
        },
        {
            img: require('@/assets/marketImg/huawei.svg'),
            content: '华为公有云标准经销商' +
                '华为认证服务解决方案伙伴' +
                '华为渠道认证服务伙伴' +
                '华为优选解决方案伙伴',
        },
        {
            img: require('@/assets/marketImg/huawei.svg'),
            content: '华为公有云标准经销商' +
                '华为认证服务解决方案伙伴' +
                '华为渠道认证服务伙伴' +
                '华为优选解决方案伙伴',
        },
        {
            img: require('@/assets/marketImg/huawei.svg'),
            content: '华为公有云标准经销商' +
                '华为认证服务解决方案伙伴' +
                '华为渠道认证服务伙伴' +
                '华为优选解决方案伙伴',
        },
    ])



    // let list=()=>{
    //     let res=[];
    //     for(let l=0;l<5;l++){
    //     res.push(<div>)
    //         for(let i=firstNum;i<((firstNum+8<(partnersList.length-firstNum))?firstNum+8:partnersList.length-firstNum);i++){
    //             res.push(<div><img src={partnersList[i].img} alt/>
    //             <div>{partnersList[i].content}</div>
    //             </div>)}


    //             }
    //         res.push(</div>)


    //     return res;
    // }



    let list = () => {
        let res = [];
        for (let l = 0; l < partnersList.length / 8; l++) {
            res.push(<div key={l}>
                {partnersList.map((item, index) => {
                    if (index < 8 * (l + 1) && index >= l * 8)
                        return <div className={style.partnersBox} key={index}><img src={item.img} alt='' className={style.partnersImg} />
                            <div className={style.partnersContent}><p className={style.pSty}>{item.content}</p></div>
                        </div>
                })}
            </div>)
        }


        return res;
    }

    return (<div>
        <div className={style.partnersTitle}>
            <h1>合作伙伴</h1>
        </div>
        <div className={style.allBoxSty}>
            <Carousel autoplay>
                {list()}
            </Carousel>
        </div>
    </div>)
}

export default PartnersComponent;