import React from 'react';
import './CostingPanel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


const CostingPanel = ({selectedFormula,onInputValueChange}) => (
    <aside className='costing-panel'>
        <h2>Costing Panel</h2>
        <div className='filtering'>
            <h3>Filters</h3>
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
            <div className="material-filters">
                <label for="material-filter">
                    <FontAwesomeIcon icon={faFilter} className="filter-icon" />
                    Material
                </label>
                <input list="material-values" id="material-filter" name="material-filter" />
                <datalist id="material-values">
                    <option value="Material A"></option>
                    <option value="Material B"></option>
                    <option value="Material C"></option>
                    <option value="Material D"></option>
                </datalist>
            </div>
            <div className="feedstock-filters">
                <label for="feedstock-filter">
                    <FontAwesomeIcon icon={faFilter} className="filter-icon" />
                    Feedstock
                </label>
                <input list="feedstock-values" id="feedstock-filter" name="feedstock-filter" />
                <datalist id="feedstock-values">
                    <option value="Feedstock A"></option>
                    <option value="Feedstock B"></option>
                    <option value="Feedstock C"></option>
                    <option value="Feedstock D"></option>
                </datalist>
            </div>
        </div>
        { Object.keys(selectedFormula.formulaNode).length ? 
        <div>
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
                    {selectedFormula.inputNodes.map((node) => (
                        <tr key={node.data.label+'_feedstock_table'}>
                            <td>{node.data.label}</td>
                            <td><input onChange={(event)=>onInputValueChange(event,node,'vendorId')} type="number" defaultValue={node.data.vendorId} /></td>
                            <td><input onChange={(event)=>onInputValueChange(event,node,'costPerUnit')} type="number" defaultValue={node.data.costPerUnit} /></td>
                            <td>{node.data.unit}</td>
                        </tr>            
                    ))}
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
                        {selectedFormula.inputNodes.map((node) => (
                            <tr key={node.data.label+'_material_table'}>
                                <td>{node.data.materialID}</td>
                                <td>{node.data.label}</td>
                                <td><input onChange={(event)=>onInputValueChange(event,node,'usage')} type="number" defaultValue={node.data.usage} /></td>
                                <td>{node.data.usageUnit}</td>
                            </tr>   
                        ))}
                    </tbody>
                </table>
            </div> 
        </div> 
        : 
        <div className='no-selection-message'><i>No Formula Selected</i></div> }        
    </aside>
);
export default CostingPanel;