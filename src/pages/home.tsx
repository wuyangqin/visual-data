import React from 'react';
import './home.scss';
import headerBg from '../static/images/header.png'
import {Chart1} from '../components/chart-1';
import {Chart2} from "../components/chart-2";
import {Chart3} from "../components/chart-3";
import {Chart4} from "../components/chart-4";
import {Chart5} from "../components/chart-5";

export const Home = () => {
    const year = new Date().getFullYear();
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}></header>
            <main>
                <section className="section1">
                    <Chart1></Chart1>
                    <Chart2></Chart2>
                </section>
                <section className="section2">
                    <Chart3></Chart3>
                    <Chart4></Chart4>
                </section>
                <section className="section3 bordered">
                    <Chart5></Chart5>
                </section>
                <section className="section4 bordered"></section>
                <section className="section5 bordered"></section>
            </main>
            <footer>
                &copy; Yang 2020-{year}
            </footer>
        </div>
    );
};
