import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sports from "../components/Sports";
import Music from "../components/Music";
import Traveling from "../components/Traveling";
import Layout from "../components/Layout";

function Hobbies() {
    const [handball, setHandball] = useState([]);
    const [marathons, setMarathons] = useState([]);
    const [music, setMusic] = useState([]);
    const [traveling, setTraveling] = useState([]);


    useEffect(() => {
        axios.get('/api/hobbies')
            .then(response => {
                setHandball(response.data.sports.handball)
                setMarathons(response.data.sports.marathons)
                setMusic(response.data.music)
                setTraveling(response.data.trips)
            })
    }, [])

    return (
        <Layout>
            <div className="mi-about-area mi-section mi-padding-top">
                <div className="container">
                    <Sports title="Sports" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mi-about-content">
                                <h3>
                                    <span className="color-theme">Handball</span>
                                </h3>
                                <p>
                                    {handball.details}
                                </p>
                                <ul>
                                    {!handball.year ? null : <li>
                                        <b>Year</b> {handball.year}
                                    </li>}
                                    {!handball.teams ? null : <li>
                                        <b>Teams</b> {handball.teams}
                                    </li>}
                                    {!handball.titles ? null : <li>
                                        <b>Titles</b> {handball.titles}
                                    </li>}
                                    {!handball.advantages ? null : <li>
                                        <b>Soft skills</b> {handball.advantages}
                                    </li>}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mi-about-image">
                                <img
                                    src={handball.imageUrl}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-30"></div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mi-about-content">
                                <h3>
                                    <span className="color-theme">Run</span>
                                </h3>
                                <p>
                                    {marathons.details}
                                </p>
                                <ul>
                                    {!marathons.year ? null : <li>
                                        <b>Year</b> {marathons.year}
                                    </li>}
                                    {!marathons.competitions ? null : <li>
                                        <b>Competitions</b> {marathons.competitions}
                                    </li>}
                                    {!marathons.advantages ? null : <li>
                                        <b>Soft skills</b> {marathons.advantages}
                                    </li>}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="mi-about-image">
                                <img
                                    src={marathons.imageUrl}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-30"></div>
                    
                    <Traveling title="Travel" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mi-about-content">
                                <p>
                                    {traveling.details}
                                </p>
                                <ul>
                                    {!traveling.year ? null : <li>
                                        <b>Year</b> {traveling.year}
                                    </li>}
                                    {!traveling.visitedContries ? null : <li>
                                        <b>Countries</b> {traveling.visitedContries}
                                    </li>}
                                    {!traveling.advantages ? null : <li>
                                        <b>Soft skills</b> {traveling.advantages}
                                    </li>}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mi-about-image">
                                <img
                                    src={traveling.imageUrl}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-30"></div>
                    
                    <Music title="Music" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mi-about-content">
                                <p>
                                    {music.details}
                                </p>
                                <ul>
                                    {!music.year ? null : <li>
                                        <b>Year</b> {music.year}
                                    </li>}
                                    {!music.instruments ? null : <li>
                                        <b>Instruments</b> {music.instruments}
                                    </li>}
                                    {!music.advantages ? null : <li>
                                        <b>Soft skills</b> {music.advantages}
                                    </li>}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mi-about-image">
                                <img
                                    src={music.imageUrl}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="mt-30"></div>
        </Layout>
    );
}

export default Hobbies;

