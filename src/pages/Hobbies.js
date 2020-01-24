import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sports from "../components/Sports";
import Music from "../components/Music";
import Traveling from "../components/Traveling";
import Layout from "../components/Layout";

function Hobbies() {
    const [handball, setHandball] = useState([]);
    const [surflongboard, setSurflongboard] = useState([]);
    const [marathons, setMarathons] = useState([]);
    const [music, setMusic] = useState([]);
    const [hikes, setHikes] = useState([]);
    const [traveling, setTraveling] = useState([]);


    useEffect(() => {
        axios.get('/api/hobbies')
            .then(response => {
                setHandball(response.data.sports.handball)
                setSurflongboard(response.data.sports.surflongboard)
                setMarathons(response.data.sports.marathons)
                setHikes(response.data.sports.hikes)
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

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mi-about-content">
                                <h3>
                                    <span className="color-theme">Hike</span>
                                </h3>
                                <p>
                                    {hikes.details}
                                </p>
                                <ul>
                                    {!hikes.year ? null : <li>
                                        <b>Year</b> {hikes.year}
                                    </li>}
                                    {!hikes.hikes ? null : <li>
                                        <b>Trails</b> {hikes.hikes}
                                    </li>}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="mi-about-image">
                                <img
                                    src={hikes.imageUrl}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="mt-30"></div>
                    <Music title="Music" />

                    <div className="mt-30"></div>
                    <Traveling title="Travel" />
                </div>
            </div>
        </Layout>
    );
}

export default Hobbies;



