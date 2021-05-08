import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart13 = () => {
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
        {value: 0.08, name: '侯家塘'}
    ];
    const myChart = useRef(null)

    useEffect(() => {
        setInterval(() => {
            x(data);
        }, 1500);
    }, []);
    const x = (data) => {
        myChart.current.setOption(createEchartsOptions({
            xAxis: {
                data: data.map(i => i.name),
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },

            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    formatter(value) {
                        return (value * 100).toFixed(0) + '%';
                    }
                }
            },
            series: [{
                type: 'bar',
                data: data.map(i => i.value + Math.random() * .1),
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0A97FB'
                }, {
                    offset: 1,
                    color: '#1E34FA'
                }]),
            }]
        }));
    };
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data);
    }, []);

    return (
        <div ref={divRef} className="chart">

        </div>
    );
};
