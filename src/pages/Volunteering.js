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
                setBa(response.data.bancoAlimentar)
                setWaiter(response.data.waiter)
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
                                    {!esn.location ? null : <li>
                                        <b>Location</b> {esn.location}
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

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mi-about-content">
                                <h3>
                                    <span className="color-theme">Banco Alimentar</span>
                                </h3>
                                <p>
                                    {ba.details}
                                </p>
                                <ul>
                                    {!ba.year ? null : <li>
                                        <b>Year</b> {ba.year}
                                    </li>}
                                    {!ba.location ? null : <li>
                                        <b>Location</b> {ba.location}
                                    </li>}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mi-about-image">
                                <img
                                    src={ba.imageUrl}
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
                                    <span className="color-theme">Adega do Luís Restaurant</span>
                                </h3>
                                <p>
                                    {waiter.details}
                                </p>
                                <ul>
                                    {!waiter.year ? null : <li>
                                        <b>Year</b> {waiter.year}
                                    </li>}
                                    {!waiter.location ? null : <li>
                                        <b>Location</b> {waiter.location}
                                    </li>}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mi-about-image">
                                <img
                                    src={waiter.imageUrl}
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

export default Volunteering;



