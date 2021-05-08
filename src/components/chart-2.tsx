import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null)
    const data = [
        {name: '岳麓区公安局', 2016: 2, 2017: 3},
        {name: '芙蓉区公安局', 2016: 2, 2017: 3},
        {name: '天心区公安局', 2016: 2, 2017: 3},
        {name: '雨花区公安局', 2016: 2, 2017: 3},
        {name: '开福区公安局', 2016: 2, 2017: 3},
        {name: '望城区公安局', 2016: 2, 2017: 3},
        {name: '长沙县公安局', 2016: 2, 2017: 3},
        {name: '宁乡市公安局', 2016: 2, 2017: 3},
        {name: '浏阳市公安局', 2016: 2, 2017: 3},
    ];
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '岳麓区公安局', 2016: 2, 2017: Math.random() * 10},
                {name: '芙蓉区公安局', 2016: 2, 2017: 3},
                {name: '天心区公安局', 2016: 2, 2017: 3},
                {name: '雨花区公安局', 2016: 2, 2017: 3},
                {name: '开福区公安局', 2016: 2, 2017: 3},
                {name: '望城区公安局', 2016: 2, 2017: 3},
                {name: '长沙县公安局', 2016: 2, 2017: 3},
                {name: '宁乡市公安局', 2016: 2, 2017: 3},
                {name: '浏阳市公安局', 2016: 2, 2017: 3},
            ];
            x(newData);
        }, 1000);
    }, []);
    const x = (data) => {
        myChart.current.setOption(createEchartsOptions({
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                type: 'category',
                data: data.map(i => i.name),
                axisLabel: {
                    formatter(val) {
                        return val.replace('公安局', '\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '2016年',
                    type: 'bar',
                    data: data.map(i => i[2016]),
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034f9'
                            }, {
                                offset: 1,
                                color: '#04a1ff'
                            }]),
                        }
                    }
                },
                {
                    name: '2017年',
                    type: 'bar',
                    data: data.map(i => i[2017]),
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#b92ae8'
                            }, {
                                offset: 1,
                                color: '#6773e7'
                            }]),
                        }
                    }
                }
            ]
        }));
    };
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data);
    }, []);

    return (
        <div className="bordered 破获排名">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart">
            </div>
            <div className="legend">
                <span className="first"/> 破案排名1
                <span className="second"/> 破案排名2
            </div>
        </div>
    );
};
