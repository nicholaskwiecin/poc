import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PriceModelLibrary.scss';
import database from '../database.json'
import ModalPopUp from './ModalPopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faSliders, faFilter } from '@fortawesome/free-solid-svg-icons'
import {useLocation, useParams} from 'react-router-dom'



const PriceModelLibrary = () => {


    const [records, setRecords] = useState(database.price_model_records);
    const [selectedRecordIds, setSelectedRecords] = useState([]);

    // const navigate = useNavigate();
    // const goToComparePage = navigate("/not-implemented");

    let location = useLocation();

    const handleCheckboxChange = (event, id) => {
        console.log("check event");
        if (event.target.checked) {
            setSelectedRecords([... selectedRecordIds, id]);
        } else {
            setSelectedRecords(selectedRecordIds.filter((recordId) => recordId !== id));
        }
    };

    return (
        <section className="library-container">
            <div className="filter-panel">
                <h2>Filter Panel</h2>
                <div className="filters">
                    <div className="just-mine">
                        <label htmlFor="just-my-filter">
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
            <div className="circle-question">
                <ModalPopUp trigger={<FontAwesomeIcon className="fa-lg" icon={faCircleQuestion} />}>
                    <h1 className="title">
                        Text in a modal
                    </h1>
                    <p className="body">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                </ModalPopUp>
            </div>
                <table className="price-model-table">
                    <thead>
                        <tr>
                            <th>Select</th>
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
                                        <input type="checkbox" onChange={ev => handleCheckboxChange(ev, record.id)} />
                                    </td>
                                    <td><Link to={'/price-model-workbench/' + record.id} state={{records: records, isAdd: false}}>{record.id}</Link></td>
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
                    <button id="compare-button" className={selectedRecordIds.length > 1 ? 'active-button' : 'inactive-button'}>
                        Compare Selected Models
                    </button>
                    <Link to='/price-model-workbench' state={{records: records, isAdd: true}}>
                        <button id="add-button" className={'active-button'} >
                            Add New Model
                        </button>
                    </Link>
                    <Link to={'/price-model-workbench/' + selectedRecordIds[0]} state={{records: records, isAdd: true}}>
                        <button id="duplicate-button" className={selectedRecordIds.length == 1 ? 'active-button' : 'inactive-button'}>
                            Duplicate Selected Model
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PriceModelLibrary;
