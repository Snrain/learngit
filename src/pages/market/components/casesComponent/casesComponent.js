import React, { useState, useEffect } from 'react'
import style from './casesComponent.module.css'
import { Row, Col, Popover } from 'antd'
import QueueAnim from 'rc-queue-anim';

function CasesComponent() {


  const [caseList, setCaseList] = useState([
    {
      title: '世界500强房地产企业',
      content: '某世界500强集团旗下房地产企业基于汉得产品海马汇Hippius和HAP（Hzero前身），通过Choerodon猪齿鱼协作管理，打造了全新的长租公寓品牌“有巢”，旨在解决城市青年租住需求，提高租住品质，创新租住体验。',
      img: require('@/assets/marketImg/房子.png'),
      bgImg: require('@/assets/marketImg/房子.jpg'),
      appList: [
        {
          appImg: require('@/assets/marketImg/海马汇icon.svg'),
          appAlt: '海马汇',
        },
        {
          appImg: require('@/assets/marketImg/猪齿鱼icon.svg'),
          appAlt: '猪齿鱼',
        },
        {
          appImg: require('@/assets/marketImg/HZEROicon.svg'),
          appAlt: 'HZERO',
        },
      ]
    },
    {
      title: '知名卫视',
      content: '由汉得微扬、得逸、中台、移动等部门进行跨部门通力合作，以汉得应用管理平台HAP为基础，结合海马汇、汉得论坛等功能整体打造的全新管理体系，帮助该知名卫视的节目制作中心实现“一张网络归口，一目了然查询，一点就通的核算，一清二楚的对比，一盘棋管理”，有效促进节目内容生产管理机制升级转型。',
      img: require('@/assets/marketImg/卫视.png'),
      bgImg: require('@/assets/marketImg/天线.svg'),
      appList: [
        {
          appImg: require('@/assets/marketImg/HZEROicon.svg'),
          appAlt: 'HZERO',
        },
        {
          appImg: require('@/assets/marketImg/海马汇icon.svg'),
          appAlt: '海马汇',
        },
        {
          appImg: require('@/assets/marketImg/汉得论坛icon.svg'),
          appAlt: '汉得论坛',
        },
      ]
    },
    {
      title: '某大型全国连锁超市',
      content: '在店铺快速扩张的情况下，该超市系统出现了功能覆盖不全的问题，新店建设及已有门店管理受到了极大的影响。汉得通过HPM项目管理平台对各个环节实现清晰规范的管理，用HALM资产管理平台将集团资产进行集中的线上全生命周期管理，通过甄云SRM保证供应商关系及生命周期的完整，便于管理从寻源，合同，订单以及绩效考核的全系流程规范管理。',
      img: require('@/assets/marketImg/超市.png'),
      bgImg: require('@/assets/marketImg/篮子.svg'),
      appList: [
        {
          appImg: require('@/assets/marketImg/HZEROicon.svg'),
          appAlt: 'HZERO',
        },
        {
          appImg: require('@/assets/marketImg/SRMicon.svg'),
          appAlt: 'SRM',
        },
        {
          appImg: require('@/assets/marketImg/HALMicon.svg'),
          appAlt: 'HALM',
        },
        {
          appImg: require('@/assets/marketImg/HPMicon.svg'),
          appAlt: 'HPM',
        },
      ]
    },
  ])



  return (<div className={style.casesBox}>
    <div className={style.casesTitle}>
      <h1>精选案例</h1>
      <p>以企业目标为出发点，以信息化手段帮助客户提高运营效率、效益与竞争能力</p>
    </div>
    <Row>
      <Col span={20} offset={2}>
        <Row gutter={20}>
          {
            caseList.map((item, index) => {
              let appList = item.appList;
             
              return <Col span={7} offset={1} className={style.appCard} key={index}>
                <div className={style.coverDiv}>
                  <img src={item.img} alt="" className={style.imgSize} />
                  <img src={item.bgImg} alt="" className={style.secImg} />

                </div>
                <div className={style.angleDiv}>

                </div>
                <div className={style.outCardBody}>
                <div className={style.cardBody}>
                  <div className={style.appText}>
                    <h2>{item.title}</h2>
                    <p className={style.pSTyle}>{item.content}</p>
                  </div>
                  <div className={style.appIconBox}>
                    {
                      appList.map((item1, index1) => {
                        return <Popover content={item1.appAlt} key={index1}>
                          <span className={style.appList} key={index1}>
                            <img src={item1.appImg} alt={item1.appAlt} />
                          </span>
                        </Popover>
                      })
                    }
                    
                  </div>
                </div>
                </div>
                
              </Col>
            })
            
          }
        </Row>
      </Col>
    </Row>
  </div>)
}

export default CasesComponent;