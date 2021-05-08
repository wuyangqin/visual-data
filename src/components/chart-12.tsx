import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart12 = () => {
    const divRef = useRef(null);
    const data = [
        {value: 0.08, name: '坡子街'},
        {value: 0.06, name: '梅溪湖'},
        {value: 0.11, name: '麓谷'},
        {value: 0.09, name: '太平街'},
        {value: 0.12, name: '白马'},
        {value: 0.06, name: '西湖'},
        {value: 0.08, name: '暮云'},
        {value: 0.08, name: '砂子塘'},
        {value: 0.08, name: '侯家塘'},
    ];
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
            legend: {
                orient: 'vertical',
                left: 'left',
                top: 'center',
                textStyle: {color: 'white'},
                itemGap:px(15),
                itemWidth: px(10),
                itemHeight: px(10),
                formatter(name) {
                    const value = data.find(i => i.name === name)?.value * 100 + '%';
                    return name + ' ' + value;
                }
            },
            series: [
                {
                    center: ['60%', '50%'],
                    type: 'pie',
                    radius: '80%',
                    label: {show: false},
                    labelLine: {show: false},
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }));
    }, []);

    return (
        <div className="年龄段-图1">
            <div className="chart">
                <div className="main" ref={divRef}/>
            </div>
        </div>
    );
};
