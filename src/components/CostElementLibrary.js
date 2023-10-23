import React from "react";
import './CostElementLibrary.scss';
import database from '../database.json';

const CostElementLibrary = () => {

    const costElements = database.price_model_cost_element_library;

    const onDragStart = (event, elementName) => {
        event.dataTransfer.setData('application/reactflow', elementName);
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
                                        <div key={index} className="element" onDragStart={(event) => onDragStart(event, element.name)} draggable>{element.name}</div>
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
