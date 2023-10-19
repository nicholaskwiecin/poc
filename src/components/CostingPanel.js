import React, { useState } from 'react';
import './CostingPanel.scss';

const CostingPanel = (selectedFormula) => {
    const [vendorFilter, setVendorFilter] = useState('');
    const [materialFilter, setMaterialFilter] = useState('');
    const [livestockFilter, setLivestockFilter] = useState('');

    const handleVendorFilterChange = (event) => {
        setVendorFilter(event.target.value);
    };

    const handleMaterialFilterChange = (event) => {
        setMaterialFilter(event.target.value);
    };

    const handleLivestockFilterChange = (event) => {
        setLivestockFilter(event.target.value);
    };

    return (
        <aside className='costing-panel'>
            <h2>Costing Panel</h2>
            <div className='filtering'>
                <label htmlFor='vendor-filter'>Vendor:</label>
                <input
                    type='text'
                    id='vendor-filter'
                    value={vendorFilter}
                    onChange={handleVendorFilterChange}
                />
                <datalist id='vendor-list'>
                    <option value='Vendor 1' />
                    <option value='Vendor 2' />
                    <option value='Vendor 3' />
                </datalist>

                <label htmlFor='material-filter'>Material:</label>
                <input
                    type='text'
                    id='material-filter'
                    value={materialFilter}
                    onChange={handleMaterialFilterChange}
                />
                <datalist id='material-list'>
                    <option value='Material 1' />
                    <option value='Material 2' />
                    <option value='Material 3' />
                </datalist>

                <label htmlFor='livestock-filter'>Livestock:</label>
                <input
                    type='text'
                    id='livestock-filter'
                    value={livestockFilter}
                    onChange={handleLivestockFilterChange}
                />
                <datalist id='livestock-list'>
                    <option value='Livestock 1' />
                    <option value='Livestock 2' />
                    <option value='Livestock 3' />
                </datalist>
            </div>
            <div className='feedstock-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Feedstock ID</th>
                            <th>Vendor ID</th>
                            <th>Cost Per Unit</th>
                            <th>Unit of Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>$1.00</td>
                            <td>kg</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2</td>
                            <td>$2.00</td>
                            <td>kg</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>3</td>
                            <td>$3.00</td>
                            <td>kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='material-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Material ID</th>
                            <th>Feedstock ID</th>
                            <th>Usage</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>10</td>
                            <td>kg</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2</td>
                            <td>20</td>
                            <td>kg</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>3</td>
                            <td>30</td>
                            <td>kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </aside>
    );
};

export default CostingPanel;