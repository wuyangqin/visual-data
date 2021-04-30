import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                type: 'category',
                data: ['岳麓区公安局', '芙蓉区公安局', '天心区公安局', '雨花区公安局', '开福区公安局',
                    '望城区公安局', '长沙县公安局', '宁乡市公安局', '浏阳市公安局'],
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
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                },
                {
                    name: '2017年',
                    type: 'bar',
                    data: [2, 3, 4, 5, 6, 7, 8, 9, 10]
                }
            ]
        }));
    }, []);

    return (
        <div className="bordered 破获排名">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart">
            </div>
            <div className="legend">
                <span className="first"/> 破案排名1
                <span className="second"/> 破案排名1
            </div>
        </div>
    );
};
