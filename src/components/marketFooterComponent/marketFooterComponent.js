import React,{ useState,useEffect }from 'react';
import style from './marketFooterComponent.module.css';
import { Row, Col, Popover } from 'antd';

// class MarketFooterComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             konwList: [
                // {
                //     name: '汉得官网',
                //     alt: '',
                //     link: 'https://www.hand-china.com/',
                // },
                // {
                //     name: '汉得招聘',
                //     alt: '',
                //     link: 'http://career.hand-china.com/',
                // },
                // {
                //     name: '汉得门户',
                //     alt: '',
                //     link: 'https://login.hand-china.com/',
                // },
                // {
                //     name: '四海汉得',
                //     alt: '',
                //     link: 'http://eco.hand-china.com/',
                // },
//             ],
//             followList: [
                //{
                //     name: '汉得微博',
                //     alt: require('@/assets/marketImg/hand微博.png'),
                //     link: '',
                // },
                // {
                //     name: '汉得企业号',
                //     alt: require('@/assets/marketImg/hand企业号.png'),
                //     link: '',
                // },
                // {
                //     name: '汉得服务号',
                //     alt: require('@/assets/marketImg/hand服务号.png'),
                //     link: '',
                // },
                // {
                //     name: '汉得公众号',
                //     alt: require('@/assets/marketImg/hand公众号.png'),
                //     link: '',
                // },
                // {
                //     name: '四海汉得',
                //     alt: require('@/assets/marketImg/四海汉得.png'),
                //     link: '',
                // },
                // {
                //     name: '汉得视野公众号',
                //     alt: require('@/assets/marketImg/hand视野公众号.png'),
                //     link: '',
                // },
//             ],
//             recomList: [
                // {
                //     name: '汉得技术中台',
                //     alt: '',
                //     link: 'http://hzero.saas.hand-china.com/',
                // },
                // {
                //     name: '1M筑造',
                //     alt: '',
                //     link: 'https://www.1mabc.com/',
                // },
                // {
                //     name: 'HCMP融合云治理平台',
                //     alt: '',
                //     link: 'https://www.hand-china.com/p-serve_product.html',
                // },
                // {
                //     name: 'LinkCRM',
                //     alt: '',
                //     link: 'https://www.hand-china.com/p-linkcrm.html',
                // },
                // {
                //     name: 'Hmall电商商城',
                //     alt: '',
                //     link: 'https://www.hand-china.com/product.html?key=Hmall',
                // },
                // {
                //     name: '甄云采购管理平台',
                //     alt: '',
                //     link: 'https://www.going-link.com/',
                // },
                // {
                //     name: '汇联易',
                //     alt: require('@/assets/marketImg/汇联易二维码.png'),
                //     link: 'https://www.huilianyi.com/',
                // },
//             ]
//         }
//     }
    
//     render() {
//         let konwList = this.state.konwList;
//         let followList = this.state.followList;
//         let recomList = this.state.recomList;
//         let linkOrAlt=(item, index)=>{
//             if (item.alt == '' && item.link != '') {
//                 return <li key={index}>
//                     <a href={item.link}>{item.name}</a>
//                 </li>
//             } else if (item.alt != '' && item.link == '') {
//                 return <li key={index}><Popover content={<img src={item.alt} alt=''></img>}>
//                     {item.name}
//                 </Popover>
//                 </li>
//             } else if (item.alt != '' && item.link != '') {
//                 return <li key={index}><Popover content={<img src={item.alt} alt=''></img>}>
//                     <a href={item.link}>{item.name}</a>
//                 </Popover>
//                 </li>
//             }
//         }
//         return <div className={style.footer}>
//             <ul>
//                 <li><img src={require('@/assets/marketImg/handlog.svg')} alt='' style={{ width: '150px' }} /></li>
//             </ul>
//             <ul>
//                 <h3>了解汉得</h3>
//                 {
//                     konwList.map((item, index) => {
//                         return linkOrAlt(item, index)
//                     })
//                 }

//             </ul>
//             <ul>
//                 <h3>关注汉得</h3>
//                 {
//                     followList.map((item, index) => {
//                         return linkOrAlt(item, index)
//                     })
//                 }
//             </ul>
//             <ul>
//                 <h3>产品推荐</h3>
//                 {
//                     recomList.map((item, index) => {
//                         return linkOrAlt(item, index)
//                     })
//                 }
//             </ul>
//             <ul>
//                 <h3>联系我们</h3>
//                 <li>400-168-4263</li>
//                 <li>marketing@hand-china.com</li>
//             </ul>
//         </div>
//     }
// }
// export default MarketFooterComponent;

function MarketFooterComponent(){
    const [ konwList, setKonwList ] = useState([
        {
            name: '汉得官网',
            alt: '',
            link: 'https://www.hand-china.com/',
        },
        {
            name: '汉得招聘',
            alt: '',
            link: 'http://career.hand-china.com/',
        },
        {
            name: '汉得门户',
            alt: '',
            link: 'https://login.hand-china.com/',
        },
        {
            name: '四海汉得',
            alt: '',
            link: 'http://eco.hand-china.com/',
        },
    ])
    const [ followList, setFollowList ] = useState([
        {name: '汉得微博',
                    alt: require('@/assets/marketImg/hand微博.png'),
                    link: '',
                },
                {
                    name: '汉得企业号',
                    alt: require('@/assets/marketImg/hand企业号.png'),
                    link: '',
                },
                {
                    name: '汉得服务号',
                    alt: require('@/assets/marketImg/hand服务号.png'),
                    link: '',
                },
                {
                    name: '汉得公众号',
                    alt: require('@/assets/marketImg/hand公众号.png'),
                    link: '',
                },
                {
                    name: '四海汉得',
                    alt: require('@/assets/marketImg/四海汉得.png'),
                    link: '',
                },
                {
                    name: '汉得视野公众号',
                    alt: require('@/assets/marketImg/hand视野公众号.png'),
                    link: '',
                },
    ])
    const [ recomList, setRecomList ] = useState([
        {
            name: '汉得技术中台',
            alt: '',
            link: 'http://hzero.saas.hand-china.com/',
        },
        {
            name: '1M筑造',
            alt: '',
            link: 'https://www.1mabc.com/',
        },
        {
            name: 'HCMP融合云治理平台',
            alt: '',
            link: 'https://www.hand-china.com/p-serve_product.html',
        },
        {
            name: 'LinkCRM',
            alt: '',
            link: 'https://www.hand-china.com/p-linkcrm.html',
        },
        {
            name: 'Hmall电商商城',
            alt: '',
            link: 'https://www.hand-china.com/product.html?key=Hmall',
        },
        {
            name: '甄云采购管理平台',
            alt: '',
            link: 'https://www.going-link.com/',
        },
        {
            name: '汇联易',
            alt: require('@/assets/marketImg/汇联易二维码.png'),
            link: 'https://www.huilianyi.com/',
        },
    ])
        let linkOrAlt=(item, index)=>{
            if (item.alt == '' && item.link != '') {
                return <li key={index}>
                    <a href={item.link}>{item.name}</a>
                </li>
            } else if (item.alt != '' && item.link == '') {
                return <li key={index}><Popover placement="rightBottom" content={<img src={item.alt} alt='' width='150px'></img>}>
                    {item.name}
                </Popover>
                </li>
            } else if (item.alt != '' && item.link != '') {
                return <li key={index}><Popover placement="rightBottom" content={<img src={item.alt} alt='' width='150px'></img>}>
                    <a href={item.link}>{item.name}</a>
                </Popover>
                </li>
            }
        }
        return (<div className={style.footer}>
            <ul>
                <li><img src={require('@/assets/marketImg/handlog.svg')} alt='' style={{ width: '150px' }} /></li>
            </ul>
            <ul>
                <h3>了解汉得</h3>
                {
                    konwList.map((item, index) => {
                        return linkOrAlt(item, index)
                    })
                }

            </ul>
            <ul>
                <h3>关注汉得</h3>
                {
                    followList.map((item, index) => {
                        return linkOrAlt(item, index)
                    })
                }
            </ul>
            <ul>
                <h3>产品推荐</h3>
                {
                    recomList.map((item, index) => {
                        return linkOrAlt(item, index)
                    })
                }
            </ul>
            <ul>
                <h3>联系我们</h3>
                <li>400-168-4263</li>
                <li>marketing@hand-china.com</li>
            </ul>
        </div>)
    
}
export default MarketFooterComponent;