import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react';
import {Card, Button} from 'antd'

export default class Line extends Component {
    state = {
        sales: [5, 20, 36, 10, 10, 20],
        stores: [8, 17, 39, 13, 13, 23]
    }
    getOption = (sales, stores) => {
        return {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data: ['销量', '库存']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: sales
            },
            {
                name: '库存',
                type: 'line',
                data: stores
            }]
        }
    }
    update = () => {
        this.setState((state) => ({
            sales: state.sales.reduce((pre, item) => {
                pre.push(item + 1)
                return pre
            }, []),
            stores: state.stores.map(item => item + 1)
        }))
    }

    render() {
        const {sales, stores} = this.state
        return (
            <div>
                <Card>
                    <Button type="primary" onClick={this.update}>更新</Button>
                </Card>
                <Card title="折线图">
                    <ReactEcharts
                        option={this.getOption(sales, stores)}/>
                </Card>
            </div>
        )
    }
}
