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
        list: [],
        status: 'more',
        page: 1,
    }

    componentDidMount() {
        // '2022/1/29'
        if(new Date().toLocaleDateString() > '2022/1/29') {
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