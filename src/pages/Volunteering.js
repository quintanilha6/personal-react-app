import React, { useState, useEffect } from "react";
import axios from 'axios';
import Layout from "../components/Layout";
import Vol from "../components/Vol";


function Volunteering() {
    const [esn, setEsn] = useState([]);
    const [ba, setBa] = useState([]);
    const [waiter, setWaiter] = useState([]);

    useEffect(() => {
        axios.get('/api/volunteering')
            .then(response => {
                setEsn(response.data.esn)
                setBa(response.data.esn)
                setWaiter(response.data.esn)
            })
    }, [])

    return (
        <Layout>
            <div className="mi-about-area mi-section mi-padding-top">
                <div className="container">
                    <Vol title="Volunteering" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mi-about-content">
                                <h3>
                                    <span className="color-theme">Erasmus Student Network</span>
                                </h3>
                                <p>
                                    {esn.details}
                                </p>
                                <ul>
                                    {!esn.year ? null : <li>
                                        <b>Year</b> {esn.year}
                                    </li>}
                                    {!esn.teams ? null : <li>
                                        <b>Teams</b> {esn.teams}
                                    </li>}
                                    {!esn.titles ? null : <li>
                                        <b>Titles</b> {esn.titles}
                                    </li>}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mi-about-image">
                                <img
                                    src={esn.imageUrl}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-30"></div>


                </div>
            </div>
            <div className="mt-30"></div>
        </Layout>
    );
}

export default Volunteering;



