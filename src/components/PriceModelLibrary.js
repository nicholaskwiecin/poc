import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PriceModelLibrary.scss';

const PriceModelLibrary = () => {
    const [records, setRecords] = useState([
        { id: 'PM-0000001', description: 'Sasol Beauty Care Surfactants Global', barId: '1234456', barDescription: 'Sasol', spendPool: 'Chemicals/Surfactants/LAB', suppliers: 'SASOL (01523242)', bu: 'Hair Care', regions: 'ALL' },
        { id: 'PM-0000002', description: 'BASF Beauty Care Europe', barId: '1234456', barDescription: 'Sasol', spendPool: 'Chemicals/Surfactants/LAB', suppliers: 'SASOL (01523242)', bu: 'Hair Care', regions: 'ALL' },
        { id: 'PM-0000003', description: 'Chem Tech Beauty Care LA', barId: '1234456', barDescription: 'Sasol', spendPool: 'Chemicals/Surfactants/LAB', suppliers: 'SASOL (01523242)', bu: 'Hair Care', regions: 'ALL' }
    ]);

    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredRecords = records.filter((record) => {
        return record.description.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <div className="library-container">
            <div className="filter-panel">
                <h2>Filtering Panel</h2>
                <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by name" />
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
                    {filteredRecords.map((record) => {
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
                                <td><Link to='/'>[Click Here]</Link></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PriceModelLibrary;
