import React, { useState,useEffect } from 'react';
import './bannerComponent.css';
import { Carousel } from 'antd';

// class BannerComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             imgList: [
                // {
                //     image: require('@/assets/marketImg/banner-HZERO@2X带按钮.png'),
                //     title: 'banner1',
                //     link: 'http://open.hand-china.com/market-home/detail/29?from=myProduct'
                // },
                // {
                //     image: require('@/assets/marketImg/飞搭banner@2x.png'),
                //     title: 'banner2',
                //     link: 'http://open.hand-china.com/market-home/detail/28?from=myProduct'
                // },

//             ],
//             winWidth:document.body.clientWidth,
            

//         }
//     }

//     render() {
        // return <Carousel autoplay>
        //     {
        //         this.state.imgList.map((item,index)=>{
        //             return <div key={index}>
        //                 <a href={item.link}><img src={item.image} alt='' height="400px" width={this.state.winWidth}/></a>
        //             </div>
        //         })
        //     }
        // </Carousel>
            
//     }
// }

function BannerComponent(){
    const [imgList,setImgList]=useState([
        {
            image: require('@/assets/marketImg/banner-HZERO@2X带按钮.png'),
            title: 'banner1',
            link: 'http://open.hand-china.com/market-home/detail/29?from=myProduct'
        },
        {
            image: require('@/assets/marketImg/飞搭banner@2x.png'),
            title: 'banner2',
            link: 'http://open.hand-china.com/market-home/detail/28?from=myProduct'
        },
    ]);
    //let [winWidth,setWinWidth] =useState(document.body.clientWidth)
    return (
        <Carousel autoplay>
            {
                imgList.map((item,index)=>{
                    return <div key={index}>
                        <a href={item.link}><img src={item.image} alt='' height='550px' width='100%'/></a>
                    </div>
                })
            }
        </Carousel>
    )
}

export default BannerComponent;