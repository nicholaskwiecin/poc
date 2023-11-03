import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CostElementMaintenance.scss';
import database from '../database.json'
import ModalPopUp from './ModalPopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faSliders, faFilter, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';


const CostElementMaintenance = () => {
    const [records, setRecords] = useState(database.cost_element_records);
    const [selectedRecordIds, setSelectedRecords] = useState([]);

    // const navigate = useNavigate();
    // const goToComparePage = navigate("/not-implemented");

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
                <h2>Cost Element Administration</h2>
                <h3>Filter Panel</h3>
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
                <ModalPopUp trigger={<FontAwesomeIcon className="fa-lg info-icon" icon={faCircleQuestion} />}>
                    <h1 className="title">FAQs</h1>
                    <p className="body">
                        To compare or copy a model, use the checkboxes in the first column to select.<br /><br />
                        Note that this is a prototype, so any added or modified models will not persist across sessions.
                    </p>
                </ModalPopUp>
            </div>
                <table className="price-model-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Price Models</th>
                            <th>Category</th>
                            <th>BU</th>
                            <th>Region(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => {
                            return (
                                <tr key={record.id}>
                                    <td><Link to={'/reference-data-admin'} state={{records: records, isAdd: false}}>{record.id}</Link></td>
                                    <td>{record.description}</td>
                                    <td>{record.priceModels}</td>
                                    <td>{record.category}</td>
                                    <td>{record.bu}</td>
                                    <td>{record.regions}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
export default CostElementMaintenance;
