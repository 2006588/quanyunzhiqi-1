import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Users, Camera, Book, Play } from 'lucide-react';

interface FolkloreGuideProps {
  onBack: () => void;
}

interface Activity {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
  duration: string;
  participants: string;
  price: string;
  details: {
    history: {
      title: string;
      content: string;
    };
    experience: {
      title: string;
      content: string;
    };
    guide: {
      title: string;
      content: string;
    };
  };
}

const FolkloreGuide: React.FC<FolkloreGuideProps> = ({ onBack }) => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const activities: Activity[] = [
    {
      id: 'Jinan International Spring Festival',
      title: '济南国际泉水节',
      category: '泉水文化民俗',
      image: 'https://pic.baike.soso.com/p/20090109/20090109120000-102238.jpg',
      description: '千泉涌动映古今，一城欢歌向世界',
      location: '济南全城',
      duration: '7-8月',
      participants: '百万人',
      price: '不定',
      details: {
        history: {
          title: '历史溯源',
          content: `济南国际泉水节源于对济南独特泉水文化的挖掘与弘扬。为进一步彰显泉水魅力、传承泉水文化，济南整合各类泉水相关活动，打造出具有国际影响力的泉水节，以泉为媒，联结世界，祈求城市蓬勃发展、泉脉永续传承。

发展历程：
• 初创探索：2013年初步搭建泉水节框架，举办泉水游览、民俗展示等基础活动
• 成长发展：2013-2017泉水节不断丰富活动内容和形式，增加了泉水音乐节、花车巡游等项目
• 升级拓展：2018济南泉水节升级为 “济南国际泉水节” ，泉水节走向国际化
• 创新深化：加强与周边景区、商家的联动，推出一系列个性化、定制化的活动

文化价值：体现了济南人与自然和谐共生的理念，是重要的非物质文化遗产。`
        },
        experience: {
          title: '当代体验形式',
          content: `融合传统与创新，为游客提供深度文化体验：

体验内容：
• 花船巡游：分为护城河游船路线和大明湖游船路线，均有日间和夜航时段。可在码头处购票乘船，护城河游船日间 9：00—17：30 从黑虎泉船站出发，夜航 19：30—21：00 出发；大明湖游船南门码头和超然楼码头日间 9：00—17：30 运营，夜航 17：30—21：00 运营
• 济南国际泉水节夜光欢乐跑：提前关注官方通知，可通过相关报名渠道（具体可关注 “济南泉水节” 小程序或官方媒体公告）报名
• 泉水节诗词擂台赛：直接前往大明湖北岸自然广场（靠近南丰戏楼），现场可参与攻擂，挑战诗词高手。
• 跟着名士看泉水图片展：结合泉视界小程序，游客拍照打卡相关景点后，上传后台，可获得定制 “家家泉水” 文创

特色服务：
• 文化融合度高
• 全民参与性强
• 科技感十足
• 活动丰富多元`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 服装要求：无特别要求，可租借汉服更沉浸
• 时间安排：夏季
• 人数限制：不定
• 预约方式：关注 “济南泉水节” 官方小程序，部分活动可在小程序内查看并报名预约;部分现场的互动体验活动，可能在活动现场设置报名点，现场报名参与

往届资讯：
1. 2025年：https://www.thepaper.cn/newsDetail_forward_31221029
2. 2024年：https://news.qq.com/rain/a/20240815A04IZ200
3. 2023年：https://jinan.iqilu.com/news/2023/0907/5505873.shtml
4. 2022年：https://gd.huaxia.com/c/2022/09/01/1358068.shtml

收费标准：
• 基础体验：免费
• 游船项目：价格依据不同线路、时间段而定，一般在几十元不等
• 竞技赛事报名：2025 年计划举办的夜光欢乐跑，女子组报名费 59 元，护花使者组 69 元，亲子组两人 100 元、三人 150 元

注意事项：
• 泉水节期间济南游客较多，建议提前预订酒店和车票
• 活动分布在多个地点，可根据行程合理选择交通工具，如需乘坐公共交通，可通过地图软件查询线路
• 注意关注天气变化，提前做好防晒、防雨等准备`
        }
      }
    },
    {
      id: 'spring-tea',
      title: '泉水茶艺体验',
      category: '泉水文化民俗',
      image: 'https://img95.699pic.com/photo/50082/6503.jpg_wh300.jpg!/fh/300/quality/90',
      description: '用济南名泉水泡制传统茶艺，品味千年茶文化精髓',
      location: '大明湖茶社',
      duration: '1-2小时左右',
      participants: '5-15人',
      price: '30元/人',
      details: {
        history: {
          title: '历史溯源',
          content: `济南泉水茶艺文化始于唐代，兴盛于宋明时期。济南独特的泉水资源为茶艺文化的发展提供了得天独厚的条件。

发展历程：
• 唐代起源：茶圣陆羽在《茶经》中提及济南泉水适宜泡茶
• 宋代繁荣：文人墨客常在泉边品茶论道
• 明清鼎盛：形成独特的济南泉水茶艺流派
• 现代复兴：21世纪初开始系统性恢复传统茶艺

文化特色：济南泉水茶艺注重"水为茶之母"的理念，强调泉水与茶叶的完美结合。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代泉水茶艺体验融合传统技艺与现代服务：

体验内容：
• 泉水知识：了解不同泉水的特性
• 茶叶品鉴：品尝龙井、铁观音等名茶
• 茶艺表演：观看专业茶艺师表演
• 亲手实践：学习基础泡茶技巧

特色服务：
• 使用趵突泉、黑虎泉等名泉水
• 提供优质茶具和茶叶
• 专业茶艺师一对一指导
• 赠送茶艺体验证书`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 服装要求：建议穿着舒适、雅致的服装
• 时间安排：自由选择
• 人数限制：每场5-15人左右
• 预约方式：美团、大众点评等线上预约或线下预约

活动流程：
1. 茶文化介绍（15分钟）
2. 泉水知识讲解（15分钟）
3. 茶艺表演观摩（30分钟）
4. 亲手实践体验（30分钟）

收费标准：
• 标准体验：35元/人
• VIP体验：100元/人（含茶艺体验）
• 团体优惠：每家店不同

注意事项：
• 体验前请勿饮用浓烈饮品
• 保持安静，专心体验
• 爱护茶具，听从指导`
        }
      }
    },
    {
      id: ' Wulongtan Water-Splashing Festival',
      title: '五龙潭泼水节',
      category: '泉水文化民俗',
      image: 'https://img5.iqilu.com/c/u/2019/0825/1566691739549.jpg',
      description: '五龙潭泼水节，让千年泉脉的清凉，在水花飞溅中撞出满夏的欢腾',
      location: '五龙潭公园',
      duration: '2.5小时',
      participants: '100人',
      price: '5元以上',
      details: {
        history: {
          title: '历史溯源',
          content: `龙潭泼翠，泉润一夏 —— 五龙潭泼水节，让清凉与欢笑共舞

发展历程：
• 起源：五龙潭泼水节是济南泉水节系列活动之一，自 2015 年开始举办，初衷是为了丰富泉水节的活动形式，借助五龙潭公园丰富的水资源，打造具有济南特色的夏日亲水活动，让市民和游客在炎炎夏日感受泉水的清凉与欢乐，同时也进一步弘扬济南的泉水文化
• 发展：经过多年的举办，五龙潭泼水节的规模和影响力不断扩大。从最初较为简单的泼水嬉戏活动，逐渐发展成为融合了民俗表演、趣味互动游戏、文化展示等多种元素的综合性节日活动。其知名度不仅在济南本地得到提升，还吸引了越来越多外地游客参与，成为济南夏日旅游的一大亮点。

往届资讯：https://www.thepaper.cn/newsDetail_forward_31209972`
        },
        experience: {
          title: '当代体验形式',
          content: `五龙潭泼水节为家庭朋友提供快乐体验：

活动内容：
• 核心狂欢：青泉广场及濂泉戏水平台的水枪大战、自由泼水互动，游客可自带装备或现场购买，在泉水中尽情嬉戏
• 主题活动：每周六下午的 “撒泼大战”“蒙眼递瓜吃瓜大战” 等趣味竞赛，获胜者可获景区文创礼品；每周末下午樱花林广场有民谣演出、川剧变脸、魔术秀等民俗表演。
• 配套体验：夏日清凉市集售卖泉水特色小吃、文创产品，泉畔手作乐园提供泉水主题 DIY 体验，让游客在狂欢之余感受泉城文化。

活动特色：
• “泉水直泼”生态清凉
• 夏日亲水狂欢
• 民俗演艺与趣味互动
• 千年泉水文化`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 物品清单：​
必备：换洗衣物（包括内衣袜子）、防水手机袋（建议选挂脖款）、防滑鞋（溯溪鞋或洞洞鞋最佳，避免赤脚）、干毛巾、便携小背包（存放干物）。​可选：水枪 / 水盆（现场也可购买，价格约 10-30 元）、防晒衣（防水材质优先）、儿童防水围裙（亲子家庭适用）、密封袋（装湿衣物）。
• 提前查看天气预报，雨天活动可能调整，可关注五龙潭公园官方公众号确认
• 将贵重物品交由同伴保管或存至储物柜，避免携带过多电子产品
• 老人和儿童建议在浅水区活动，提前约定集合点以防走散，可佩戴显眼标识（如卡通胸牌）

活动流程：
1. 入园准备：购买五龙潭公园门票后入园，可先到青泉广场旁的服务点领取活动指南，了解当日表演及互动场次安排。
2. 自由体验阶段（上午 9:00-14:00）：在濂泉戏水平台自由戏水，逛夏日清凉市集选购小吃或文创，参与泉畔手作乐园 DIY 活动。
3.主题活动时段（下午 15:00-17:30）：每周六 15:00 开始 “撒泼大战”“蒙眼递瓜吃瓜大战”，需提前 30 分钟到青泉广场报名；每周末 16:00 樱花林广场上演民俗演艺，可提前占位观赏。
4. 晚间时段（18:00 - 闭园）：延续自由泼水互动，避开午后高温，适合家庭游客悠闲参与，闭园前 1 小时可到指定休息区整理物品。

收费标准：
• 门票： 5 元 / 成人，学生、儿童、老人等群体按照相关规定享受门票优惠政策。
• 活动项目：参与五龙潭泼水节现场的泼水活动、观看民俗表演等均无需额外收费

注意事项：
• 提前备好换洗衣物、防水手机袋，建议穿防滑鞋以防在湿滑地面摔倒；亲子家庭需全程看护儿童，避免进入深水区
• 遵守活动规则，不向老人、婴幼儿、孕妇泼水，文明参与保持欢乐氛围；公园内泉水较凉，长时间戏水后注意保暖，避免受凉。
•活动期间游客较多，建议错峰出行（如上午或傍晚），并保管好个人财物；结束后可到公园指定休息区整理衣物，周边有储物柜可临时存放物品。`
        }
      }
    },
    {
      id: 'handicraft',
      title: '传统手工艺制作',
      category: '古城老街民俗',
      image: 'https://d.ifengimg.com/q70/p0.ifengimg.com/pmop/2017/1127/59E03F42B86A39CF75920CDE292CC11EF5EB78FC_size1168_w5184_h3456.jpeg',
      description: '学习济南传统手工艺，体验面塑、剪纸、糖画等非遗技艺',
      location: '芙蓉街、曲水亭街',
      duration: '3小时',
      participants: '6-12人',
      price: '不定/人',
      details: {
        history: {
          title: '历史溯源',
          content: `济南传统手工艺历史悠久，是齐鲁文化的重要组成部分。这些技艺世代传承，体现了济南人民的智慧和创造力。

主要工艺：
• 面塑：始于汉代，济南面塑以精细著称
• 剪纸：唐代传入，形成独特的济南风格
• 糖画：宋代兴起，济南糖画技艺精湛
• 泥塑：明清时期达到高峰

文化价值：这些手工艺不仅是技艺传承，更是文化记忆的载体。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代手工艺体验注重传承与创新并重：

体验项目：
• 面塑制作：学习基础技法，制作小动物
• 剪纸艺术：掌握基本剪法，创作窗花
• 糖画绘制：体验糖画师的神奇技艺
• 泥塑造型：制作简单的泥塑作品

教学特色：
• 非遗传承人亲自授课
• 小班制精品教学
• 提供专业工具材料
• 作品可带走留念`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 年龄要求：8岁以上均可参与
• 服装建议：穿着便于活动的服装
• 时间安排：每日9:00-12:00，14:00-17:00
• 人数限制：每班6-12人

活动流程：
1. 工艺介绍（30分钟）
2. 基础技法学习（60分钟）
3. 实践制作（90分钟）

收费标准：
• 剪纸体验：85元/人
• 团扇diy：40元/人
• 扎染体验：120元/人

注意事项：
• 听从老师指导，注意安全
• 保持工作台整洁
• 珍惜材料，避免浪费`
        }
      }
    },
    {
      id: 'street-tour',
      title: '古街citywalk',
      category: '古城老街民俗',
      image: 'https://n.sinaimg.cn/sinakd20113/762/w1000h562/20230525/ba96-814fb69e446ec5569624ba8466b8c211.jpg',
      description: '深度游览济南古街巷，了解老济南的民俗风情和历史故事',
      location: '芙蓉街、曲水亭街、王府池子',
      duration: '2小时',
      participants: '自由决定人数',
      price: '免费',
      details: {
        history: {
          title: '历史溯源',
          content: `济南古街巷承载着千年历史文化，是老济南民俗文化的活化石。这些街巷见证了济南从古至今的变迁。

重要街巷：
• 芙蓉街：明清商业街，有400多年历史
• 曲水亭街：因曲水亭得名，文化底蕴深厚
• 王府池子：清代王府遗址，泉水文化典型
• 起凤桥街：古代文人聚集地

文化特色：这些街巷保持着传统建筑风格，承载着丰富的民俗文化。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代古街导览融合历史文化与现代服务：

导览内容：
• 历史建筑介绍：了解古建筑特色
• 民俗故事讲解：听老济南的传说
• 传统美食品尝：体验地道小吃
• 文化体验活动：参与民俗互动

服务特色：
• 专业导游讲解
• 小团队精品服务
• 多媒体辅助介绍
• 个性化路线定制`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 体力要求：需步行2小时，适合各年龄段
• 服装建议：穿着舒适的步行鞋
• 时间安排：每日9:00、14:00、16:00
• 人数限制：10-25人

导览路线：
1. 芙蓉街：可边走边品尝美食，推荐尝试会仙楼的香椿芽拌豆腐、荠菜水饺等时令菜，感受舌尖上的济南春天。同时，留意街道两侧的老建筑，虽然商业气息浓厚，但部分建筑仍保留了古朴的韵味。
2. 曲水亭街：最能体现济南 “家家泉水，户户垂杨” 风貌的街道之一。一边是青砖灰瓦的老屋，一边是垂柳飘摇的清泉，泉水清澈见底，能看到鱼儿游动。街边有济南面塑、老济南酸蘸儿、老济南酸梅汤等非遗店铺和特色小吃摊，还有许多文艺的书店、茶馆。
3. 百花洲历史街区：由一条条石板街巷和清一色的明清宅院组成，青砖黛瓦，错落有致。这里有许多石头小巷，保留着原本的模样，充满老济南的恬静闲适氛围。街区内还有一些民俗展示馆、手工作坊等，可深入了解济南传统文化
4. 起凤桥街：东起西更道街，西至芙蓉街，街道清幽静谧。起凤泉和腾蛟泉缓缓流淌，与古朴的建筑、起凤桥以及街边小院，共同构成了 “小桥、流水、人家” 的诗意画卷。这里是拍照打卡的好去处，月亮门、泉水以及灰色雕花檐下的 “起凤” 二字，组成绝佳取景地，常吸引游客排队拍照。

收费标准：
• 均为开放式街区，自由通行无需付费 

注意事项：
• 老街多为石板路，部分路段凹凸不平，建议穿防滑运动鞋，避免穿高跟鞋或凉鞋（尤其雨天易打滑）
• 芙蓉街小吃密集，建议少量多次品尝，避免暴饮暴食；推荐选择明厨亮灶的摊位，降低肠胃不适风险。
• 曲水亭街、起凤桥街等路段临泉，拍照时注意脚下，看护好儿童，勿靠近无护栏的泉池边缘`
        }
      }
    },
    {
      id: 'opera-experience',
      title: '观赏吕剧表演',
      category: '古城老街民俗',
      image: 'https://n.sinaimg.cn/sinacn/w1000h666/20180202/1e70-fyrcsrx1271386.jpg',
      description: '观看山东地方戏曲吕剧，体验传统戏曲的魅力',
      location: '济南市吕剧院、百花洲非遗工坊',
      duration: '1.5小时',
      participants: '25人',
      price: '20-50元/人',
      details: {
        history: {
          title: '历史溯源',
          content: `吕剧是山东省的主要地方戏曲剧种，起源于19世纪末的山东东营，后在济南等地发展壮大。

发展历程：
• 1900年左右：起源于东营地区
• 1920年代：传入济南，开始职业化
• 1950年代：成为山东省主要剧种
• 2008年：列入国家级非物质文化遗产

艺术特色：吕剧唱腔优美，表演生动，贴近生活，深受山东人民喜爱。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代吕剧体验注重传承与普及：

经典剧目：
• 《姊妹易嫁》：改编自《聊斋志异》，讲述张家大女儿嫌贫爱富，不愿嫁给未婚夫毛纪，最终由妹妹代嫁，而毛纪后来高中状元的故事，讽刺了嫌贫爱富的思想，语言幽默，情节曲折。
• 《墙头记》：聚焦养老问题，讲述老汉张木匠被两个儿子轮流赡养却遭嫌弃，最终被推到墙头无人管的悲剧，深刻反映家庭伦理，兼具批判性与教育意义。
• 《借年》：以除夕之夜穷书生王汉喜向未婚妻爱姐借年（借年货）为线索，展现青年男女的纯真爱情与民间习俗，充满温馨诙谐的乡村风情。

戏剧特色：
• 唱腔：以 “四平调”“二板”“流水板” 为基本板式，曲调委婉清新、朴实自然，兼具叙事性与抒情性，唱词多用山东方言
• 伴奏：主奏乐器为坠琴（吕琴），搭配扬琴、二胡、三弦等，音乐风格轻快活泼，既能表现农家生活的诙谐场景，也能演绎悲欢离合的情感故事。
• 题材：多取材于民间传说、家庭伦理和乡村生活，如婚姻爱情、婆媳关系、邻里趣事等，剧情贴近百姓生活，角色多为农民、小手工业者等普通人物，具有浓厚的乡土气息和现实主义色彩`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 年龄要求：无
• 服装要求：随意
• 时间安排：百花洲历史文化街区：周末下午 2:00-4:00；济南吕剧院：不定期举办
• 人数限制：无

预约渠道：
1. 关注官方渠道：济南市吕剧院官网、“济南市吕剧院” 公众号会第一时间发布演出排期、剧目介绍、演员阵容等信息。
2.票务平台检索：登录大麦网、齐鲁艺票通等票务平台，按 “吕剧”“济南” 等关键词搜索，能获取更全面的济南地区吕剧演出信息，还可查看余票数量、座位分布等，方便购票。

收费标准：
•剧院常规演出：在一些专业剧院如百花剧院、山东省吕剧院等地，票价通常为 30 元到 150 元不等。例如百花剧院演出的《墙头记》《小姑贤》等剧目，票价在 30 元到 150 元区间；山东省吕剧院演出的《姊妹易嫁》，票价同样为 30 元到 150 元。
• 惠民演出6：为了推广吕剧文化，各地常举办惠民演出，票价较为亲民。如济南市吕剧院在北洋大戏院举办的 “戏聚周末 冬越泉城” 戏曲惠民演出季吕剧专场，票价低至 20 元，也有 30 元、50 元的票价可供选择。
• 特殊场次演出4：一些特殊场次，如儿童节等节日期间的演出，票价会根据演出形式有所调整。2025 年 6 月 1 日山东省吕剧院的演出，单人票为 108 元，亲子票为 198 元，家庭票（两大一小或两小一大）为 258 元。

注意事项：
• 保持安静：演出过程中，将手机调至静音或关机状态，避免大声喧哗、交头接耳，尊重演员与其他观众
• 文明拍照：未经允许，请勿使用闪光灯拍照，以免影响演员表演与其他观众观演体验。部分小剧场允许拍照留念，可在谢幕时拍摄`
        }
      }
    },
    {
      id: 'wall-hiking',
      title: '齐长城徒步祭祖',
      category: '齐长城文化民俗',
      image: 'https://img.pconline.com.cn/images/upload/upc/tx/itbbs/1905/03/c17/145881581_1556891100352_mthumb.jpg',
      description: '徒步齐长城遗址，举行传统祭祖仪式，感受古代军事文化',
      location: '长清区齐长城遗址',
      duration: '4小时',
      participants: '人数不定',
      price: '济南长清区免费参观游览',
      details: {
        history: {
          title: '历史溯源',
          content: `齐长城是中国现存最古老的长城，始建于春秋时期，比秦长城早400多年。济南段齐长城承载着深厚的历史文化。

历史价值：
• 春秋战国：齐国为防御楚、鲁等国而建
• 军事意义：古代重要的军事防御工程
• 文化价值：体现了古代劳动人民的智慧
• 祭祖传统：当地民众世代在此祭祀先祖

现状保护：济南段齐长城已被列为全国重点文物保护单位。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代齐长城体验融合徒步与文化：

体验内容：
• 观赏历史遗迹：济南齐长城部分段落保存较为完好，如锦阳关，作为春秋战国时期齐国与鲁国之间著名的关隘，历经 2500 多年风雨，城墙依旧连绵至山巅，垛口、烽燧、屯兵营的遗迹依稀可见，能让人遥想当年烽火连天的古战场。
• 探访古村落：沿途有许多古村落，如卧云铺村，地势颇高，常年云雾缭绕，村落建筑均由石头建成，充满古朴韵味。还有逯家岭古村，房舍建在陡峭悬崖边上，被称为 “挂在悬崖上的村庄”，街巷里一景一物都凸显着历史的厚度
• 感受田园风光：齐长城济南段多位于山区，沿线风景优美，有梯田花海等景观。例如锦阳关段经过园林景观升级改造后，梯田中种植了向日葵等绿植，漫步其间，可欣赏到古长城与田园交织的如画美景。
• 了解传说故事：齐长城承载着丰富的历史传说，在孟姜女博物馆可倾听国家级非物质文化遗产孟姜女的传说，传承美德家风，还能通过参观古石屋、槐抱榆等，触摸长城古道上的传统印记。

路线选择：
• 锦阳关 - 五指山 - 双泉峪村路：全程约 7.32 公里，锦阳关是齐长城的重要关口，这里的长城遗址保存相对较好，能让人感受到浓厚的历史氛围。五指山有着奇特的石峰景观，从锦阳关出发登顶五指山，可欣赏到沿途的山峦起伏和长城遗迹，下山到达双泉峪村，还能体验到乡村的宁静与质朴。从锦阳关出发，沿着长城遗迹前行，穿梭在群山之间，欣赏齐长城的壮美景色，攀爬至五指山山顶，领略奇特的石峰造型，之后沿山脊走环线下山，最终抵达双泉峪村。
• 黄石关 - 东门关 - 锦阳关路线：根据实际路线选择，全程大约在 15-20 公里左右。这条路线串联起了济南市莱芜区境内齐长城的三个重要关隘，每个关隘都有其独特的历史意义和景观特色。黄石关是孟姜女哭长城传说的相关地点，具有浓厚的历史文化底蕴；东门关的城门修筑较为坚固，能看到保存较好的关隘建筑；锦阳关则是春秋战国时期齐长城的重要交通要道和防御要塞，周围山峰险峻，长城遗迹蜿蜒起伏。从黄石关出发，沿着齐长城遗址前行，穿越荒草覆盖的小路，感受历史的沧桑。到达东门关后，参观坚固的城门和关隘建筑，了解其军事防御功能。最后前往锦阳关，站在关楼上瞭望，欣赏长城在群山间蜿蜒的壮丽景象。
• 齐长城锦阳关 - 古山寨 - 章丘石子口村路线：约 10 公里的徒步环线，以锦阳关为起点和终点，沿途有齐长城遗址、战国时期的古山寨以及中国第六批传统古村落章丘石子口村。既能欣赏到长城的雄伟，又能探寻古山寨的神秘，还能在古村落中感受浓厚的历史文化氛围。从锦阳关出发，沿着长城向山顶方向走，登上山顶步道，参观烽火台，欣赏群山美景。然后往东北方向前往古山寨，探索这个易守难攻的屯兵之地。从古山寨下来后到达章丘石子口村，漫步在古街古巷，欣赏石板路、石房等特色建筑，感受古村的宁静与古朴，最后沿村内小火车道返回锦阳关`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 体力要求：需要一定体力，建议平时有运动习惯
• 装备要求：登山鞋、背包、水壶、防晒用品
• 时间安排：充足时间
• 人数限制：无限制

住宿攻略：
1.石子口村时养山居民宿：位于齐长城脚下，是国家级森林村居和山东省传统村落。民宿以 24 节气命名，充满乡村生活美学氛围，周边有保存完好的齐长城遗址，可漫步其中感受历史韵味。民宿为乡居石院，能让你忘却都市喧嚣，体验静谧自然的田园生活
2.东张村柏泉山居民宿1：齐长城蜿蜒穿过东张村，这里自然风光秀丽。柏泉山居民宿新建了停车场，住宿环境宽敞洁净，带有书香门第风味，两层的建筑设计较为高档。入住这里还能品尝山村特产酸枣嫩叶茶，别有一番情趣

美食攻略：
• 九转大肠：将猪大肠先煮后炸，再灌入多种调料用微火煨制而成。酸、甜、香、辣、咸五味俱全，色泽红润，质地软嫩，是济南传统名菜之一
• 糖醋鲤鱼：选用黄河鲤鱼，经改刀、腌制、挂糊后炸至金黄，再浇上用糖、醋、酱油等调制而成的糖醋汁。外酥里嫩，酸甜可口，鲤鱼造型优美，寓意吉祥
•爆炒腰花：以猪腰为主料，经剞花刀、腌制后，用旺火爆炒而成。腰花鲜嫩，口感脆爽，芡汁明亮，咸鲜微辣，具有浓郁的葱、姜、蒜香味

注意事项：
• 穿着适合徒步的服装鞋子
• 带足饮用水和简单食物
• 保护文物，不得攀爬
• 听从领队指挥，注意安全`
        }
      }
    },
    {
      id: 'military-culture',
      title: '章丘区齐长城文化旅游节',
      category: '齐长城文化民俗',
      image: 'https://img12.iqilu.com/10339/sucaiku/compress/202209/01/1822ba999d514b22b68d76879a9f66ed.png',
      description: '千年长城韵，诗画文祖行',
      location: '齐长城文化园',
      duration: '3小时',
      participants: '12-20人',
      price: '免费',
      details: {
        history: {
          title: '历史溯源',
          content: `融合了体育、文化、美食、研学等多种元素，旨在推动文旅融合发展，促进乡村振兴。

发展历程：
• 首届举办：2025 年 4 月 17 日，章丘区文祖街道举办了 “千年长城韵，诗画文祖行” 章丘区第一届齐长城文化旅游节新闻发布会。4 月 20 日至 5 月 10 日，文祖街道联合区文旅局等部门正式举办该旅游节，通过齐长城越野赛、甘泉流苏节、齐长城文化研讨会等十大主题活动，将自然风光、体育赛事、非遗传承与乡村振兴深度融合，吸引了数十万人次参与，带动消费 800 余万元，成功塑造了 “诗画文祖” 的文旅形象。
• 未来规划：根据首届旅游节的举办效果，文祖街道后续将继续深化 “诗画文祖” 品牌建设，推动文旅产业链向多元化延伸，构建文旅发展新篇章，进一步挖掘和利用齐长城文化，促进当地文旅产业持续发展

文化传承：古代齐长城文化体现了中华民族的坚毅精神和智慧。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代军事文化体验寓教于乐：

活动内容：
• 齐长城越野赛：4 月 20 日在石子口村举行，500 余名选手沿登山步道参赛，赛事现场还展示了 “文祖优粮” 等特色农产品及非遗产品
• 东张奇石节、牡丹节：4 月 21 日至 5 月 10 日，水龙洞村以奇石艺术与牡丹花海为媒，打造了集观赏、摄影、消费于一体的文旅新场景
•甘泉流苏节：4 月 22 日至 5 月 10 日，甘泉村千年流苏树盛放如雪，期间有文艺节目轮番上演，配套的 “流苏集市” 带动了土特产、农家乐消费。

意义影响：
• 旅游节以齐长城为纽带，将自然风光、体育赛事、非遗传承与乡村振兴深度融合，不仅激活了消费新场景，还探索出 “文化 + 产业 + 生态” 的可持续发展模式，成功塑造了 “文化味足、烟火气盛、人情味浓” 的 “诗画文祖” 文旅形象`
        },
        guide: {
          title: '实操指南',
          content: `参与方式：
• 直接前往参与：东张奇石节、牡丹节，甘泉流苏节，青野村五音美食节等活动，游客可在活动举办时间内（分别为 4 月 21 日 - 5 月 10 日、4 月 22 日 - 5 月 10 日、5 月 1 日 - 5 月 7 日），自行前往章丘区文祖街道的水龙洞村、甘泉村、青野村等活动举办地参与，欣赏奇石、花海、品尝美食等，感受现场氛围。齐长城文化研讨会、“齐长城下话发展” 研讨会等活动，一般也欢迎公众现场聆听，可在活动当日前往指定地点参加，了解齐长城文化及乡村发展相关内容
• 报名参与：齐长城越野赛这类竞技性活动通常需要提前报名1。可关注章丘区文旅局官方网站、“章丘文旅” 等官方微信公众号，或在活动合作媒体平台上查看报名通知，按照要求填写相关信息进行报名，审核通过后即可参与
• 特定群体参与：东峪翠谷大学生登山节主要面向大学生群体，符合条件的学生可由所在学校组织报名，或根据活动主办方发布在校园内的通知，自行报名参与。“诗画文祖研学联盟” 研学季活动，一般由学校或教育机构组织学生集体参与，也可由家长为孩子报名相关研学机构推出的研学课程，参与研学活动。
• 线上参与：如果无法前往现场，还可依托全域旅游导视系统、VR 智慧旅游平台上线的 “云游齐长城”，运用科技手段身临其境了解齐长城关隘、城堡等建筑风貌，感受齐长城的文化魅力。

收费标准：
• 线上参与：如果无法前往现场，还可依托全域旅游导视系统、VR 智慧旅游平台上线的 “云游齐长城”，运用科技手段身临其境了解齐长城关隘、城堡等建筑风貌，感受齐长城的文化魅力。
• 其他消费：石子口村景区内小火车往返票价为 20 元 / 人，1.2 米以下儿童半价。另外，在美食节购买美食、在水河萤火虫生态馆消费，以及购买当地农产品等，费用根据具体消费内容而定。
• 景区门票：济南野生动物世界原价较高，在籍全日制大学生优惠门票 39.9 元 / 人（优惠截止到 2025 年 5 月 5 日）；济南植物园学生年票 30 元 / 张；朱家峪景区针对全日制本科及以下学生推出优惠门票 17 元 / 人；明水古城对济南市在校大学生免票（特定节假日除外），其他人群门票价格以景区官方公布为准`
        }
      }
    },
    {
      id: 'beacon-festival',
      title: '烽火台体验',
      category: '齐长城文化民俗',
      image: 'https://photo.sohu.com/37/60/Img205586037.jpg',
      description: '参与烽火台点火仪式，体验古代军事通信文化',
      location: '齐长城烽火台遗址',
      duration: '0.5小时',
      participants: '不定',
      price: '免费',
      details: {
        history: {
          title: '历史溯源',
          content: `烽火台是古代军事通信系统的重要组成部分，齐长城沿线设有多座烽火台，形成了完整的通信网络。

历史功能：
• 军事通信：白天举烟，夜晚点火传递军情
• 预警系统：快速传递敌情信息
• 指挥协调：协调各段长城的防御
• 文化象征：代表古代军事智慧

技术特点：烽火台选址科学，通信效率高，是古代通信技术的杰作。`
        },
        experience: {
          title: '当代体验形式',
          content: `现代烽火台文化节重现古代通信场景：

活动内容：
• 点火仪式：体验古代烽火点燃过程
• 通信演练：学习古代军事通信方法
• 团队协作：多台联动传递信息
• 文化表演：古代军事文化展示

特色环节：
• 古装体验：穿着古代士兵服装
• 角色扮演：扮演古代守台士兵
• 互动游戏：烽火传递竞赛
• 夜间活动：夜晚点火更具震撼力`
        },
        guide: {
          title: '实操指南',
          content: `参与准备：
• 年龄要求：无
• 体力要求：需要爬台阶，适合大部分人群
• 时间安排：自由选择
• 人数限制：自由组织人数

活动特色：
1. 领略历史沧桑：齐长城烽火台历经千年岁月，部分烽火台虽经损毁，但仍保留着原始风貌。如章丘锦阳关附近的烽火台，站在上面，能看到较为完整的石砌墙体，仿佛能感受到古代战争的紧张氛围，耳边似有穿越千年的人喊马嘶、鼓角争鸣。游客还可看到墙体上岁月留下的痕迹，想象古时士兵在此守望、传递军情的场景，感受古人的智慧和战争的残酷
2. 欣赏自然风光：许多烽火台选址巧妙，位于山峦之巅或视野开阔之处，能让游客欣赏到壮丽的自然景色。章丘段的烽火台，周边群山巍峨，秋季时还能看到漫山红叶，风景如画
3. 了解军事文化：烽火台是古代军事防御体系的重要组成部分，通过参观烽火台，游客可深入了解古代的军事防御知识。可以看到烽火台的建筑结构，如通道墙体上的墙垛口，了解其防御功能；还能知晓 “烽火” 传递军情的方式，即白天施烟、夜间点火，台台相连，将敌情迅速传递到军事中枢部门。

收费标准：
免费

注意事项：
• 注意防火安全
• 听从工作人员指挥
• 穿着防滑鞋子
• 带好手电筒等照明设备`
        }
      }
    }
  ];

  if (selectedActivity) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <button
              onClick={() => setSelectedActivity(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回活动列表
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-2">
                    {selectedActivity.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {selectedActivity.title}
                  </h1>
                  <p className="text-lg opacity-90">
                    {selectedActivity.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">地点</div>
                    <div className="font-medium">{selectedActivity.location}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">时长</div>
                    <div className="font-medium">{selectedActivity.duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">人数</div>
                    <div className="font-medium">{selectedActivity.participants}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 text-blue-600 mr-2 text-lg">¥</span>
                  <div>
                    <div className="text-sm text-gray-500">价格</div>
                    <div className="font-medium">{selectedActivity.price}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Book className="w-6 h-6 mr-2 text-blue-600" />
                    {selectedActivity.details.history.title}
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedActivity.details.history.content}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Play className="w-6 h-6 mr-2 text-blue-600" />
                    {selectedActivity.details.experience.title}
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedActivity.details.experience.content}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Camera className="w-6 h-6 mr-2 text-blue-600" />
                    {selectedActivity.details.guide.title}
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedActivity.details.guide.content}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  立即预约体验
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回主页
          </button>
          <h1 className="text-3xl font-bold text-gray-900">济南民俗体验指南</h1>
          <p className="text-gray-600 mt-2">深度体验济南传统文化，感受千年古城的民俗魅力</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedActivity(activity)}
            >
              <div className="relative h-48">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    {activity.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{activity.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {activity.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {activity.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {activity.participants}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{activity.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    了解详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FolkloreGuide;