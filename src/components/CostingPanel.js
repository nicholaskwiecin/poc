import React, { useState } from 'react';
import './CostingPanel.scss';

const CostingPanel = ({selectedFormula,onInputValueChange}) => {

    return (
        <aside className='costing-panel'>
            <h2>Costing Panel</h2>
            <div className='filtering'>
                Filtering Section
            </div>
            { Object.keys(selectedFormula.formulaNode).length ? 
            <div><div className='feedstock-table'>
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
                    {selectedFormula.inputNodes.map((node) =>{
                        return (
                            <tr key={node.data.label+'_feedstock_table'}>
                                <td>{node.data.label}</td>
                                <td>{node.data.vendorId}</td>
                                <td><input onChange={(event)=>onInputValueChange(event,node)} type="number" defaultValue={node.data.value} /></td>
                                <td>{node.data.unit}</td>
                            </tr>
                        )
                    })}
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
                        {selectedFormula.inputNodes.map((node) =>{
                            return (
                                <tr key={node.data.label+'_material_table'}>
                                    <td>{node.data.materialID}</td>
                                    <td>{node.data.label}</td>
                                    <td>{node.data.usage}</td>
                                    <td>{node.data.usageUnit}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div> 
            </div> : <div className='no-selection-message'>No Formula Selected</div> }
           
        </aside>
    );
};

export default CostingPanel;