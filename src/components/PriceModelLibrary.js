import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PriceModelLibrary.scss';
import database from '../database.json'

const PriceModelLibrary = () => {
    const [records, setRecords] = useState(database.price_models);
    return (
        <section className="library-container">
            <div className="filter-panel">
                <h2>Filtering Panel</h2>
                <input type="text" placeholder="Filter by name" />
            </div>
            <table className="price-model-table">
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
        </section>
    );
};

export default PriceModelLibrary;
