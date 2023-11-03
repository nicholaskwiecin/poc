import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ReferenceDataAdmin.scss';
import database from '../database.json'
import ModalPopUp from './ModalPopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faSliders, faFilter, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';


const ReferenceDataAdmin = () => {
    const [records, setRecords] = useState(database.reference_data_records);
    const [selectedRecordIds, setSelectedRecords] = useState([]);

    // Change the value of a given input record
    const onInputValueChange = useCallback((event, node, key) => {
    setRecords(records.map((mapRecord) => {
      if (mapRecord.id === node.id) {
        mapRecord.attributeValue = event.target.value;
      }
      return mapRecord;
    }));
  });

    return (
        <section className="library-container">
            <div className="filter-panel">
                <h2>Filter Panel</h2>
                <div className="filters">
                    <div className="just-mine">
                        <label htmlFor="just-my-filter">
                            <FontAwesomeIcon icon={faSliders} className="sliders-icon" />
                            Cost Component
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
                </div>
            </div>

            <div className="table-wrapper">
            <div className="circle-question">
                <ModalPopUp trigger={<FontAwesomeIcon className="fa-lg info-icon" icon={faCircleQuestion} />}>
                    <h1 className="title">FAQs</h1>
                    <p className="body">
                        Note that this is a prototype, so any added or modified data will not persist across sessions.
                    </p>
                </ModalPopUp>
            </div>
                <table className="price-model-table">
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Description</th>
                            <th>Attribute</th>
                            <th>Attribute Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => {
                            return (
                                <tr key={record.id}>
                                    <td>{record.material}</td>
                                    <td>{record.description}</td>
                                    <td>{record.attribute}</td>
                                    <td><input onChange={(event)=>onInputValueChange(event,record,'attributeValue')} type="number" defaultValue={record.attributeValue} /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                
            </div>
        </section>
    );
};
export default ReferenceDataAdmin;
