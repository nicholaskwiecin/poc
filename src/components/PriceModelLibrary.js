import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PriceModelLibrary.scss';
import database from '../database.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faFilter } from '@fortawesome/free-solid-svg-icons'

const PriceModelLibrary = () => {
    const [records, setRecords] = useState(database.price_models);
    const [checkedCount, setCheckedCount] = useState(0);
    const navigate = useNavigate();
    // const goToComparePage = navigate("/not-implemented");
    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setCheckedCount(checkedCount + 1);
        } else {
            setCheckedCount(checkedCount - 1);
        }
    };

    return (
        <section className="library-container">
            <div className="filter-panel">
                <h2>Filter Panel</h2>
                {/* <input type="text" placeholder="Filter by name" /> */}
                <div className="filters">
                    <div className="just-mine">
                        <label for="just-my-filter">
                            <FontAwesomeIcon icon={faSliders} className="sliders-icon" />
                            Just Mine
                        </label>
                        <input list="just-my-values" id="just-my-filter" name="just-my-filter" />
                        <datalist id="just-my-values">
                            <option value="Filter A"></option>
                            <option value="Filter B"></option>
                            <option value="Filter C"></option>
                            <option value="Filter D"></option>
                        </datalist>
                    </div>
                    <div className="vendor-filters">
                        <label for="vendor-filter">
                            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
                            Vendor
                        </label>
                        <input list="vendor-values" id="vendor-filter" name="vendor-filter" />
                        <datalist id="vendor-values">
                            <option value="Vendor A"></option>
                            <option value="Vendor B"></option>
                            <option value="Vendor C"></option>
                            <option value="Vendor D"></option>
                        </datalist>
                    </div>
                    <div className="spendpool-filters">
                        <label for="spendpool-filter">
                            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
                            Spendpool
                        </label>
                        <input list="spendpool-values" id="spendpool-filter" name="spendpool-filter" />
                        <datalist id="spendpool-values">
                            <option value="Spendpool A"></option>
                            <option value="Spendpool B"></option>
                            <option value="Spendpool C"></option>
                            <option value="Spendpool D"></option>
                        </datalist>
                    </div>
                    <div className="business-unit-filters">
                        <label for="business-unit-filter">
                            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
                            Business Unit
                        </label>
                        <input list="business-unit-values" id="business-unit-filter" name="business-unit-filter" />
                        <datalist id="business-unit-values">
                            <option value="Business Unit A"></option>
                            <option value="Business Unit B"></option>
                            <option value="Business Unit C"></option>
                            <option value="Business Unit D"></option>
                        </datalist>
                    </div>
                </div>
            </div>
            <div className="table-wrapper">
                <table className="price-model-table">
                    <thead>
                        <tr>
                            <th>Compare</th>
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
                                    <td className="compare">
                                        <input type="checkbox" onChange={ev => handleCheckboxChange(ev)} />
                                    </td>
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
                <div>
                    {checkedCount > 1 && 
                    <button id="compare-button">Compare Selected Models</button>}
                </div>
            </div>
        </section>
    );
};

export default PriceModelLibrary;
