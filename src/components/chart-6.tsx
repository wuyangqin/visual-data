import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import china from '../geo/china.json';

export const Chart6 = () => {
    const divRef = useRef(null);
    const colors = {'湖北省': '#BB31F7', '湖南省': '#15B8FD', '广东省': '#06E1EE'};
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '湖南省', value: 300},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['湖南省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '广东省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['广东省'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '湖北省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['湖北省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },

            ]
        }));
    }, []);

    return (
        <div className="bordered 籍贯">
            <h2>全市犯罪人员籍贯分布地</h2>
            <div className="wrapper">
                <div ref={divRef} className="chart"/>
                <div className="legend bordered">
                    <span className="icon" style={{background: colors['湖南省']}}/>湖南籍
                    <span className="icon" style={{background: colors['广东省']}}/>广东籍
                    <span className="icon" style={{background: colors['湖北省']}}/>湖北籍
                </div>
                <div className="notes">此地图仅显示了中国的部分区域</div>
            </div>
        </div>
    );
};
