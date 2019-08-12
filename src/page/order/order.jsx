import React, {Component} from 'react';
import {Button} from 'antd'
import notFount from './image/404.jpg'
import './order.less'

class order extends Component {
    toHome = () => {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className='not_fount'>
                <img style={{width: '251px'}} src={notFount} alt=''/>
                <h2><b>404</b></h2>
                <p>抱歉，你访问的一面不存在。</p>
                <Button type='primary' onClick={this.toHome}>返回首页</Button>
            </div>
        );
    }
}

export default order;
