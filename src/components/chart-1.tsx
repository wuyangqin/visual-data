import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null)
    const data = [
        {name: '岳麓区', 2016: 10},
        {name: '芙蓉区', 2016: 20},
        {name: '天心区', 2016: 36},
        {name: '雨花区', 2016: 41},
        {name: '开福区', 2016: 15},
        {name: '望城区', 2016: 28},
        {name: '长沙县', 2016: 37,},
        {name: '宁乡市', 2016: 18},
        {name: '浏阳市', 2016: 19},
    ];
    useEffect(() => {
        setInterval(() => {
            const newData = [
                {name: '岳麓区', 2016: Math.random() * 30},
                {name: '芙蓉区', 2016: 20},
                {name: '天心区', 2016: 36},
                {name: '雨花区', 2016: 41},
                {name: '开福区', 2016: 15},
                {name: '望城区', 2016: 28},
                {name: '长沙县', 2016: 37,},
                {name: '宁乡市', 2016: 18},
                {name: '浏阳市', 2016: 19},
            ];
            x(newData);
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
            },
            series: [{
                type: 'bar',
                data: data.map(i => i[2016] + Math.random() * 10)
            }]
        }));
    };
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data);
    }, []);

    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">

            </div>
        </div>
    );
};
