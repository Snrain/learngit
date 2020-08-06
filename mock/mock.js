import mockjs from 'mockjs'
let Random = mockjs.Random


var kinds = [1, 2, 3, 4, 5, 6, 7].map(x => Random.cword(2, 4))

    var compInfo= {
        cname: Random.cword(4),
        ckinddesc: Random.cword(8, 16),
        cdesc: Random.cparagraph(1),
        ckindlist: kinds.slice(0, Random.integer(3, 5)),
    }
    let advanname;
    var advanInfo= {
        adesc: Random.cword(20,30),
        'advanlist|5-9': [
            {
                advanname:advanname=Random.cword(4),
                advanimage:Random.image('50px*50px','#ffffff','img'),
                advandesc:Random.cparagraph(2,4),
                scene:Random.cword(30,40)
            }
            
            
        ],
        scenedesc: Random.cword(20,30),

    }
    var processInfo= {
        pdesc: Random.cword(20,30),
        'processlist|5': [
            {
                processname:advanname=Random.cword(4),
                processimage:Random.image('240px*425px','#@color()','img'),
                processdesc:Random.cparagraph(2,4),
            }
        ],
    }


// Mock.mock('http://getCompInfo', {
//     compInfo
// })
// Mock.mock('http://getAdvanInfo', {
//     advanInfo
// })
// Mock.mock('http://getProcessInfo', {
//     processInfo
// })


export default {
    // 使用 mockjs 等三方库
    '/api/getAdvanInfo': mockjs.mock({
        advanInfo : {
            adesc: Random.cword(20,30),
            'advanlist|5-9': [
                {
                    advanname:advanname=Random.cword(4),
                    advanimage:Random.image('50px*50px','#ffffff','img'),
                    advandesc:Random.cword(42),
                    scene:Random.cword(30,40)
                }
                
                
            ],
            scenedesc: Random.cword(20,30),
    
        }
    }),
    '/api/getCompInfo': mockjs.mock({
        compInfo :{
            cname: Random.cword(4),
            ckinddesc: Random.cword(8, 16),
            cdesc: Random.cparagraph(1),
            ckindlist: kinds.slice(0, Random.integer(3, 5)),
        }
    }),
    '/api/getProcessInfo': mockjs.mock({
        processInfo : {
            pdesc: Random.cword(20,30),
            'processlist|5': [
                {
                    processname:advanname=Random.cword(4),
                    processimage:Random.image('240px*425px','#@color()','img'),
                    processdesc:Random.cparagraph(4,8),
                }
            ],
        }
    }),
};





    // var images = [1,2,3].map(x=>Random.image('200x100', Random.color(), Random.word(2,6))); //随机成长3个图片信息 尺寸 颜色 和随机字母的数组

    // for (var i = 0; i < 100; i++) {

    //     var content = Random.cparagraph(0,10);//随机生成0到10段句子

    //     data.news.push({
    //         id: i,//固有id
    //         title: Random.cword(8,20),//随机长度为在8到20内的汉字字符串
    //         desc: content,
    //         tag: Random.cword(2,6),//随机长度为2 到 6 的汉字
    //         views: Random.integer(100,5000),//100到5000的随机整数
    //         images: images.slice(0,Random.integer(1,3)),//截取随机一到三个图片
    //         time:Random.date()
    //     })
    // }

