import React from "react";
import './CostElementLibrary.scss';

const CostElementLibrary = () => {

    const costElements = [
        {
            category: "Materials",
            elements: [
                {
                    name: "Feedstock"
                },
                {
                    name: "Fees"
                }
            ]
        },
        {
            category:"Conversion",
            elements:[
                {
                    name: "Equipment",
                },
                {
                    name: "Energy",
                }
            ]
        },
        {
            category:"Logistics",
            elements:[
                {
                    name: "Lane",
                },
                {
                    name: "Warehousing",
                }
            ]
        }
    ]

    const onDragStart = (event, elementName) => {
        event.dataTransfer.setData('application/reactflow', elementName);
        event.dataTransfer.effectAllowed = 'move';
      };
    
      return (
        <aside className="cost-element-library">
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
