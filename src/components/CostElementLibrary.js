import React from "react";
import './CostElementLibrary.scss';
import database from '../database.json';

const CostElementLibrary = () => {

    const costElements = database.price_model_cost_element_library;

    const onDragStart = (event, element) => {
        event.dataTransfer.setData('application/reactflow', JSON.stringify(element));
        event.dataTransfer.effectAllowed = 'move';
      };
    
      return (
        <aside className="cost-element-library">
            <h2>Cost Element Library</h2>
            {
                costElements.map((category, index) => {
                    return (
                        <div key={index}>
                            <div className="category">{category.category}</div>
                            {
                                category.elements.map((element, index) => {
                                    return (
                                        <div key={index} className="element" onDragStart={(event) => onDragStart(event, element)} draggable>{element.label}</div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </aside>
      );

 }
export default CostElementLibrary;
