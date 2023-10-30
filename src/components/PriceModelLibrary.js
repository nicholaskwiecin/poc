import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PriceModelLibrary.scss';
import database from '../database.json'
import ModalPopUp from './ModalPopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

const PriceModelLibrary = () => {
    const [records, setRecords] = useState(database.price_models);
    return (
        <section className="library-container">
            <div className="filter-panel">
                <h2>Filtering Panel</h2>
                <input type="text" placeholder="Filter by name" />
            </div>

            <div className="price-model-table">
            <div className="circle-question">
                <ModalPopUp trigger={<FontAwesomeIcon className="fa-lg" icon={faCircleQuestion}/>}>
                    <h1 className="title">
                        Text in a modal
                    </h1>
                    <p className="body">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                </ModalPopUp>
            </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Contract / Bar ID</th>
                            <th>Contract / Bar Description</th>
                            <th>Spend Pool H/M/L</th>
                            <th>Supplier(s)</th>
                            <th>BU</th>
                            <th>Region(s)</th>
                            <th>Material Coverage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => {
                            return (
                                <tr key={record.id}>
                                    <td><Link to='/price-model-workbench'>{record.id}</Link></td>
                                    <td>{record.description}</td>
                                    <td>{record.barId}</td>
                                    <td>{record.barDescription}</td>
                                    <td>{record.spendPool}</td>
                                    <td>{record.suppliers}</td>
                                    <td>{record.bu}</td>
                                    <td>{record.regions}</td>
                                    <td><Link to='/not-implemented'>[Click Here]</Link></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PriceModelLibrary;
