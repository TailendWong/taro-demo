import BaseComponent from '../../components/BaseComponent'
import { AtCard,AtFab,AtLoadMore   } from "taro-ui"
import { View,Text } from '@tarojs/components'
import './index.scss'
import { httpGet } from '../../util/Tools';
import { getNews } from '../../servers/servers';

export default class Index extends BaseComponent {

    constructor() {
        super();
    }
    
    state={
        full: true,
        list: [{
            ptime: '2022/1/29',
            source: '管理员',
            ltitle: '有哪些学习方法',
            digest: '一、高效高智高能学习流程图，把学习流程拆解为四个步骤：找到问题、记录问题、解决问题、巩固成知识。二、学习金字塔，运用实践让学生之间互相复述、解疑，最终达到学习效果三、费曼技巧，一个复杂的问题，应该分而化之，再逐个对付，最终得出正确答案。四、五星学习力模型。',
        },{
            ptime: '2022/1/26',
            source: '管理员',
            ltitle: '如何制定学习计划',
            digest: '一、计划要考虑全面。学习计划不是除了学习，还是学习。二、长远计划和短期安排。在一个比较长的时间内，比分说一个学期或一个学年，你应当有个大致计划。',
        }],
        status: 'more',
        page: 1,
    }

    componentDidMount() {
        // '2022/1/29'
        let date = new Date();
        if(date.getMonth() + '/' + date.getDate()  > '2/14') {
            this.state.list = []
            this.pullData(this.state.page)
        } else {
            this.setState({status: 'noMore'})
        }
        
    }

    pullData(page) {
        getNews(page).then(res => {
            console.log(res)
            let list = Object.values(res)[0];
            this.setState({page: page + 1,list: this.state.list.concat(list)})
            console.log('请求成功');
            if(!list.length) this.setState({status: 'noMore'})
          }).catch(err => {
            console.log(err)
            console.log('请求失败');
          })
    }

    handleClick () {
        // 开始加载
        this.setState({
          status: 'loading'
        })
        this.pullData(this.state.page)
        // 模拟异步请求数据
        setTimeout(() => {
          // 没有更多了
          if(this.state.status !== 'noMore') this.setState({ status: 'more'})
        }, 2000)
    }

    render() {

        return <View className='know'>
            {this.state.list.map(item => <AtCard 
            note={item.ptime}
            extra={item.source}
            title={item.ltitle}
            thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
            isFull={this.state.full}
            >
            {item.digest}
            </AtCard>)}
            <AtLoadMore
                onClick={this.handleClick.bind(this)}
                status={this.state.status}
            />
            
            <View className='fixbtn'>
            <AtFab onClick={() => this.setState({full: !this.state.full})}>
            <Text className='at-fab__icon at-icon at-icon-menu'></Text>
            </AtFab>
            </View>
        </View>
    }

}