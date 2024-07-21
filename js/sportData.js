/**
 * 导航数据
 * 依赖注入思想
 */
const sportData = {
    fitness: {
        monday: [{
            action: "深蹲",
            image: "img/sport/035深蹲.gif",
            position: "大腿",
            count: "8",
            times: "5",
            content: "1. 开始时，将杠铃置于斜方肌顶端。胸部挺起，头部朝向正前方。两脚开立，与胯同宽，双脚指向外侧。2. 弯曲双膝降低身体，有节制的尽可能的向后推髋。这需要双膝向前移动。确保双膝与双脚呈一条直线。尽可能的保持躯干直立。3. 继续降低身体，保持重量集中于脚跟前部。当大腿与小腿相触时，反向运动，将杠铃向上运动。"
        }, {
            action: "推举",
            image: "img/sport/011推举.gif",
            position: "肩部",
            count: "10",
            times: "4",
            content: "端坐，双手分持哑铃于肩侧，将哑铃由肩关节为支点，哑铃沿两个弧线向中间或两侧上举(放下)"
        }, {
            action: "侧平举",
            image: "img/sport/012侧平举.gif",
            position: "肩部",
            count: "8",
            times: "3",
            content: "双臂体前自然下垂，虎口向前分持哑铃，肘间为100-120度角。将哑铃由身体两侧向上提起，保持肘间100-120度的夹角。当提至肘部高于肩时，沿原路线返回。"
        }, {
            action: "俯立侧平举",
            image: "img/sport/013俯立侧平举.gif",
            position: "肩部",
            count: "10",
            times: "3",
            content: "俯立(两腿微屈，上体前屈与地面平行)，两手对握哑铃，自然垂于肩关节下方。持铃向侧上方提起，肘间角度略大于90度，要求肘、肩、腕在同一垂直面内。上提超过肩部高度，停留1-2秒，然后慢慢还原成预备姿势"
        }, {
            action: "交替弯举",
            image: "img/sport/024交替弯举.gif",
            position: "肱二头肌",
            count: "12",
            times: "3",
            content: "身体直立（也可坐在凳端或垂直靠背凳上），双手持哑铃垂于体侧，掌心相对，两肘贴靠身体两侧。以肘关节为支点，向上弯举，同时前臂外旋掌心朝上，举至最高点收紧肱二头肌，稍停。然后控制性还原。接着另一臂做相同动作。"
        }, {
            action: "意念弯举",
            image: "img/sport/025意念弯举.gif",
            position: "肱二头肌",
            count: "10",
            times: "3",
            content: "1. 起始姿势：蹲在地上或坐在凳上，一手握哑铃，让上臂肘部贴在同侧大腿内侧，前臂向下直垂放松。另一只手手指向内扶压在另一大腿上，手微曲。2.动作过程：收缩握铃一臂的二头肌将前臂向上弯起，到可能的最高点时，彻底收缩二头肌1-2秒钟，然后伸展肘关节，让哑铃徐徐下落到开始位置。练完一侧，换练另一侧。如此反复练习。3.呼吸方法：弯起前臂时吸气，到最高点时开始呼气直到最低点"
        }], wednesday: [{
            action: "卧推",
            image: "img/sport/017卧推.gif",
            position: "胸大肌",
            count: "8",
            times: "5",
            content: "1.采用宽握距，使胸大肌获得充分伸展和彻底收缩；要求躯干和胸部向上挺起成桥形，两肩下沉，横杠放在胸上置乳头上1厘米处；当杠铃推起至两臂伸直时，必须使胸大肌处于“顶峰收缩”状态，稍停。2. 上推时用鼻子呼气，还原时用口吸气。注意事项： 3.不要把臀部和腰抬离凳子。 4.双脚的位置：两腿分开成45度角，平放在地上，可以有力支撑。"
        }, {
            action: "上斜推举",
            image: "img/sport/021上斜推举.gif",
            position: "胸部",
            count: "10",
            times: "3",
            content: "基本雷同平板哑铃卧推，但需注意斜板的角度控制在30-45度之间，角度太大对三角肌前束的压力也越大，会影响到胸大肌的发力"
        }, {
            action: "平卧推举",
            image: "img/sport/022平卧推举.gif",
            position: "胸部",
            count: "10",
            times: "4",
            content: "仰卧在长凳上，上背部和臀部触及凳面，胸部用力向上挺起，两手握住哑铃上推。"
        }, {
            action: "平卧飞鸟",
            image: "img/sport/023平卧飞鸟.gif",
            position: "胸部",
            count: "10",
            times: "3",
            content: "卧在长凳上，两脚踏实，躯干成“桥形”，上背部和臀部触及凳面，两臂哑铃自然伸直于肩关节正上方，两手间距离略小于肩宽;两手持哑铃向体侧慢慢落下，下落过程中，肘间角度逐渐变小，到极限时，肘关节成100-120度角;胸大肌收缩，将哑铃沿原路升起，上升路线呈“弧形”，肘间角度逐渐加大，还原成预备姿势。"
        }, {
            action: "颈后臂屈伸",
            image: "img/sport/015颈后臂屈伸.gif",
            position: "肱三头肌",
            count: "12",
            times: "4",
            content: "两手握住哑铃，两臂伸直上举，上臂与地面垂直，并始终保持靠近耳侧。两手持铃向颈后弯曲至极限时，再伸直还原成预备体姿。"
        }, {
            action: "俯身臂屈伸",
            image: "img/sport/016俯身臂屈伸.gif",
            position: "肱三头肌",
            count: "10",
            times: "4",
            content: "俯立，屈肘持铃，上臂贴紧体侧，上体与地面平行。持铃手向后上方举起直至手臂完全伸直，再还原。"
        }], friday: [{
            action: "直腿硬拉",
            image: "img/sport/037硬拉.gif",
            position: "背部",
            count: "8",
            times: "5",
            content: "双脚分开同肩宽站立，双手各握住一只哑铃置于大腿前侧。从你的腰部弯曲，在你朝地板降低杠铃时，要保持你的双膝伸直；重量应该保持在你双腿前方大约10厘米处。稍作暂停，然后伸展你的躯干返回至初始的站立位置。"
        }, {
            action: "耸肩",
            image: "img/sport/014耸肩.gif",
            position: "肩部",
            count: "10",
            times: "4",
            content: "两手持哑铃下垂于腿前，以斜方肌的收缩力量，把力量向上提起;至两肩耸起接近耳侧，使斜方肌处于“顶峰收缩”，稍停，再以斜方肌的张紧力控制慢慢还原。"
        }, {
            action: "俯身单臂划船",
            image: "img/sport/032俯身单臂划船.gif",
            position: "背部",
            count: "10",
            times: "4",
            content: "持铃臂用侧腿微屈支撑，异侧腿弯曲跪撑在凳面上。持铃手自然下垂于肩关节下方，另一只手稍向前撑住凳面。先将哑铃直臂向后拉引至踝骨外侧，然后屈肘，使哑铃沿腿外侧上拉最后至腰窝处，同时尽量转头翻肩，停留1-2秒，沿原线路返回成预备姿势。"
        }, {
            action: "俯身双臂划船",
            image: "img/sport/031俯身双臂划船.gif",
            position: "背部",
            count: "10",
            times: "4",
            content: "俯身微屈膝，两手各持哑铃，垂于体前下方，以背阔肌的收缩力提拉哑铃至肘与肩高或略高于肩的位置，稍停，然后以背阔肌的张紧力控制哑铃缓慢还原。"
        }, {
            action: "箭步蹲",
            image: "img/sport/034箭步蹲.gif",
            position: "大腿",
            count: "10",
            times: "3",
            content: "身体直立，两脚分开，双手在体侧各握住一个哑铃，手臂自然下垂。首先将左腿向前跨一大步，站稳，然后慢慢地向地面放低右膝至右膝接近地面，左膝呈直角，背部挺直，同时吸气，然后左腿用力蹬地将身体返回至准备姿势，同时呼气，然后换脚重复。每侧3组，每组20次。"
        }, {
            action: "站立提踵",
            image: "img/sport/036站姿提踵.gif",
            position: "小腿",
            count: "12",
            times: "5",
            content: "起始姿势将杠铃放在颈后肩上，两脚开立，脚掌站在垫木上，脚跟露在垫木外。收缩小腿肌肉群，使脚跟尽量提高，使腓肠肌彻底收紧。静止一秒钟，放下脚跟，重复再做。提起脚跟时吸气，放下时呼气。身体踮高时，前额要领先上提。下降时，脚跟要低于垫木面。"
        }]
    }, fatReduction: {
        fireFatPrimary: {
            items: [{
                action: "向后弓箭步", count: "12", content: "中心向后，身体垂直地面，前后脚弯曲90°，收腹"
            }, {
                action: "体前屈", count: "12", content: "双手触耳，身体接近平行地面，收腹"
            }, {
                action: "深蹲", count: "12", content: "呈后坐式"
            }, {
                action: "开合跳", count: "20s", content: "轻盈跳"
            }, {
                action: "屈腿两头起", count: "12", content: "背部全程贴地，下巴微收，起身双手抱退1s"
            }, {
                action: "简易俄罗斯转体", count: "12", content: "双脚触地，双手带动身体左右旋转"
            }, {
                action: "仰卧举腿", count: "12", content: "背部全程贴地，双脚与腿呈90°，脚触地与收起呈90°"
            }, {
                action: "四点支撑", count: "20s", content: "简易版平板支撑"
            }, {
                action: "向前弓箭步", count: "12", content: "同向后弓箭步"
            }, {
                action: "深蹲", count: "12", content: "呈后坐式"
            }, {
                action: "侧移深蹲跳", count: "12", content: "深蹲向侧边来回跳起"
            }, {
                action: "原地起跳", count: "12", content: "深蹲后跳起"
            }, {
                action: "直腿两头起", count: "12", content: "腿交替抬起，与双手接触1s"
            }, {
                action: "俄罗斯转体", count: "12", content: "双脚离地"
            }, {
                action: "直腿抬起", count: "12", content: "背部贴地，双腿与地面呈90°，收腿抬背向上升"
            }, {
                action: "四点支撑", count: "20s", content: "简易版平板支撑"
            }]
        }, fireFatIntermediate: {
            items: [{
                action: "勾腿跳", count: "20s", content: "原地跳"
            }, {
                action: "深蹲", count: "12", content: "身直，后坐式"
            }, {
                action: "改良版仰卧起坐", count: "12", content: "盘腿，脚掌贴合"
            }, {
                action: "俯卧撑", count: "12", content: "标准，慢速"
            }, {
                action: "平板支撑开合跳", count: "20s", content: "收紧核心，双脚开合跳"
            }, {
                action: "波比跳", count: "12", content: "坚持"
            }], tips: "↑ 重复三遍"
        }, abdominalExercise: {
            items: [{
                action: "摸膝卷腹",
                count: "30s",
                content: "【上腹肌】背部贴地，不用起高，下腹发力",
                image: "img/sport/321.gif"
            }, {
                action: "反向屈腿卷腹", count: "30s", content: "【下腹肌】紧贴地面，下腹发力", image: "img/sport/322.gif"
            }, {
                action: "左右触脚", count: "30s", content: "【腰部两侧】倾向一侧时停留片刻", image: "img/sport/323.gif"
            }, {
                action: "仰卧提膝",
                count: "30s",
                content: "【下腹肌】紧贴地面，下腹发力，将双腿抬起",
                image: "img/sport/324.gif"
            }, {
                action: "空中登车",
                count: "30s",
                content: "【腹斜肌】腹斜肌发力，胳膊肘交替的去触碰膝盖",
                image: "img/sport/325.gif"
            }], tips: "间隔15S"
        }, pushUp: {
            items: [{
                action: "俯卧撑训练计划",
                count: "3次/周",
                content: "1、挺胸收腹，躯干与腿部保持一条直线。2、手臂自然伸直垂直于地面。3、双手与肩同宽，始终保持腰背挺直，控制肘部紧贴身体两侧",
                image: "img/sport/331俯卧撑.gif"
            }, {
                action: "第一周", count: "1~2min", content: "20-20-15-15 | 20-20-20-10 | 20-20-20-10",
            }, {
                action: "第二周", count: "1~2min", content: "20-20-15-15 | 25-25-20 | 25-25-20",
            }, {
                action: "第三周", count: "1~2min", content: "30-20-20 | 35-20-15 | 30-25-15",
            }, {
                action: "第四周", count: "1~2min", content: "40-20-10 | 40-30 | 40-30",
            }, {
                action: "第五周", count: "1~2min", content: "45-15-10 | 45-25 | 45-25",
            }]
        }, horizontalDown: {
            items: [{
                action: "单杠悬垂训练计划",
                count: "4组/天",
                content: "双手握住单杠保持悬空的姿势不动",
                image: "img/sport/341.gif"
            }], tips: "起步20S，每周加10S"
        }
    }
}
