import React from 'react';
import './LinearPricingModel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRightToLine } from '@fortawesome/free-solid-svg-icons';


const LinearPricingModel = () => {

    const expandOrCollapseColGroup = (className) => {
        document.querySelectorAll(`.${className}`).forEach(element => {
            if (element.style.visibility === 'collapse') {
                element.style.visibility = 'visible';
                element.style.fontSize = 'inherit';
                if (element.tagName === 'SPAN') element.style.display = 'inline-block'; // fix alignment
            } else {
                element.style.visibility = 'collapse';
                element.style.fontSize = '0';
                if (element.tagName === 'SPAN') element.style.display = 'none'; // fix alignment
            }
        });
    };

    const ToggleButton = (props) => (
        <button className='toggle-button' onClick={() => expandOrCollapseColGroup(props.colGroupClassName)}>
            <FontAwesomeIcon icon={faArrowsLeftRightToLine} size="xl" />
        </button>
    );

    return (
        <section className="linear-pricing-model">
            <div className="page-title"><h1>Linear Pricing Model</h1></div>
            <div className="table-wrapper">
                <table>
                    <colgroup>
                        <col span='17' className='secondary-information'></col>
                        <col span='21' className='material-specifications'></col>
                        <col span='18' className='supplier-inputs'></col>
                        <col span='8' className='price-parameters'></col>
                        <col span='7' className='board-paper'></col>
                        <col span='9'></col>
                        <col span='5' className='price-mechanism'></col>
                    </colgroup>
                    <thead>
                        <tr className='categories'>
                            <th colSpan='18' className='gray'>
                                <span className='secondary-information'>Secondary Information - SAP Data</span>
                                <ToggleButton colGroupClassName='secondary-information'></ToggleButton>
                            </th>
                            <th colSpan='21' className='gold'>
                                <span className='material-specifications'>Material Specifications</span>
                                <ToggleButton colGroupClassName='material-specifications'></ToggleButton>
                            </th>
                            <th colSpan='18' className='red'>
                                <span className='supplier-inputs'>Supplier Inputs - Specifications, Parameters</span>
                                <ToggleButton colGroupClassName='supplier-inputs'></ToggleButton>
                            </th>
                            <th colSpan='8'>
                                <span className='price-parameters'>Calculated Price Parameters</span>
                                <ToggleButton colGroupClassName='price-parameters'></ToggleButton>
                            </th>
                            <th colSpan='7' className='green'>
                                <span className='board-paper'>Board - Paper</span>
                                <ToggleButton colGroupClassName='board-paper'></ToggleButton>
                            </th>
                            <th colSpan='9' className='green'></th>
                            <th colSpan='5'>
                                <span className='price-mechanism'>Price Mechanism</span>
                                <ToggleButton colGroupClassName='price-mechanism'></ToggleButton>
                            </th>
                        </tr>
                        <tr className='input-output'>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td></td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Formula</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td></td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td>Input</td>
                            <td></td>
                            <td>Formula</td>
                            <td>Formula</td>
                            <td>Formula</td>
                            <td>Formula</td>
                            <td>Formula</td>
                            <td>Formula</td>
                            <td>Formula</td>
                            <td></td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td></td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td></td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td>Output</td>
                            <td></td>
                        </tr>
                        <tr className='column-names'>
                            <td>GCAS #</td>
                            <td>SAP Material Description</td>
                            <td>Invoice Price</td>
                            <td>Total price w/o discount</td>
                            <td>Final Price Currency</td>
                            <td>Unit of measure</td>
                            <td>SA #</td>
                            <td>SA Line</td>
                            <td>MPMP</td>
                            <td>Transport Mode</td>
                            <td>Origin Country</td>
                            <td>Origin City</td>
                            <td>Origin Port</td>
                            <td>Destination Country</td>
                            <td>Destination City</td>
                            <td>Destination Port</td>
                            <td>Equipment Type</td>
                            <td></td>
                            <td>P&G Plant Name</td>
                            <td>Inner Length mm</td>
                            <td>Inner Width mm</td>
                            <td>Inner Depth mm</td>
                            <td>Type of case</td>
                            <td>Substrate outside</td>
                            <td>Substrate inside</td>
                            <td>BCT Newton</td>
                            <td>Est. Volume/yr Munits</td>
                            <td>Frequency of production run (weeks)</td>
                            <td>Run Size Quantity</td>
                            <td>Printing technology </td>
                            <td>Number of colors outside</td>
                            <td>Number of colors inside</td>
                            <td>Printing Feature 1</td>
                            <td>Coverage Feature 1</td>
                            <td>Printing Feature 2</td>
                            <td>Coverage Feature 2</td>
                            <td>Fluting type coefficient 1</td>
                            <td>Fluting type coefficient 2</td>
                            <td></td>
                            <td>Supplier Production Site</td>
                            <td>Number of box per sheet</td>
                            <td>Manufacturing process</td>
                            <td>Pallets (Yes / No)</td>
                            <td>Drop Trailers (Yes / No)</td>
                            <td>Warehousing (Yes / No)</td>
                            <td>Special or Double Dunnage (Yes / No)</td>
                            <td>Type 1</td>
                            <td>Grammage 1</td>
                            <td>Type 2</td>
                            <td> Grammage 2</td>
                            <td>Type 3</td>
                            <td>Grammage 3</td>
                            <td>Type 4</td>
                            <td>Grammage 4</td>
                            <td>Type 5</td>
                            <td>Grammage 5</td>
                            <td></td>
                            <td>Blank Sheet Length mm</td>
                            <td>Blank Sheet Width mm</td>
                            <td>Fluting Type</td>
                            <td>Scrap Rate %</td>
                            <td>Surface</td>
                            <td>Paper source country</td>
                            <td>Composition</td>
                            <td></td>
                            <td>Board 1 (Currency/sqm)</td>
                            <td>Board 2 (Currency/sqm)</td>
                            <td>Board 3 (Currency/sqm)</td>
                            <td>Board 4 (Currency/sqm)</td>
                            <td>Board 5 (Currency/sqm)</td>
                            <td>Scrap Cost</td>
                            <td></td>
                            <td>Total Paper Costs</td>
                            <td>Total Printing Costs</td>
                            <td>Total Conversion Costs</td>
                            <td>Set-up cost</td>
                            <td>Total Manufacturing Costs</td>
                            <td>Logistics Costs</td>
                            <td>Transport Costs</td>
                            <td>Total Transport & Logistics Costs</td>
                            <td></td>
                            <td>YoY Discount</td>
                            <td>Additional Discount</td>
                            <td>FX Rate (Raw Mat / Local =)</td>
                            <td>Raw Material Currency</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>90000442</td>
                            <td>Corrugate Material 1</td>
                            <td>684.40</td>
                            <td>716.10</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00010</td>
                            <td>00034983</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>2</td>
                            <td>Silver</td>
                            <td>10%</td>
                            <td>Glossy</td>
                            <td>10%</td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td>
                            <td></td>
                            <td>174.2</td>
                            <td>232.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>452.8</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000443</td>
                            <td>Corrugate Material 2</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00010</td>
                            <td>00034984</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td>
                            <td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000444</td>
                            <td>Corrugate Material 3</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00020</td>
                            <td>00034985</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td>
                            <td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000445</td>
                            <td>Corrugate Material 4</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00030</td>
                            <td>00034986</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000446</td>
                            <td>Corrugate Material 5</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00040</td>
                            <td>00034987</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000447</td>
                            <td>Corrugate Material 6</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00050</td>
                            <td>00034988</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000448</td>
                            <td>Corrugate Material 7</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00060</td>
                            <td>00034989</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000449</td>
                            <td>Corrugate Material 8</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00070</td>
                            <td>00034990</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000450</td>
                            <td>Corrugate Material 9</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00080</td>
                            <td>00034991</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000451</td>
                            <td>Corrugate Material 10</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00090</td>
                            <td>00034992</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000452</td>
                            <td>Corrugate Material 11</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00100</td>
                            <td>00034993</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000453</td>
                            <td>Corrugate Material 12</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00110</td>
                            <td>00034994</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000454</td>
                            <td>Corrugate Material 13</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00120</td>
                            <td>00034995</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                        <tr>
                            <td>90000455</td>
                            <td>Corrugate Material 14</td>
                            <td>494.29</td>
                            <td>517.17</td>
                            <td>EUR</td>
                            <td>1000EA</td>
                            <td>5500066049</td>
                            <td>00130</td>
                            <td>00034996</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>AMIENS</td>
                            <td>378</td>
                            <td>190</td>
                            <td>367</td>
                            <td>AC </td>
                            <td>White</td>
                            <td>White</td>
                            <td>3000</td>
                            <td> 960 </td>
                            <td> 48 </td>
                            <td>20.00</td>
                            <td>Flexo</td>
                            <td>1</td>
                            <td>0</td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>N/A - No Feature</td>
                            <td></td>
                            <td>B</td>
                            <td>E</td>
                            <td></td>
                            <td>Supplier X Location A</td>
                            <td>1</td>
                            <td>Inliner</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>WTLC</td>
                            <td>120</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>90</td>
                            <td>FL</td>
                            <td>120</td>
                            <td></td>
                            <td>1183</td>
                            <td>570</td>
                            <td>BE</td>
                            <td>8%</td>
                            <td>0.67</td>
                            <td>France</td>
                            <td>WTLC 120 / FL 90 / FL 90 / FL 90 / FL 120</td>
                            <td></td>
                            <td>65.9</td>
                            <td>47.3</td>
                            <td>35.0</td>
                            <td>44.2</td>
                            <td>46.7</td>
                            <td>19.1</td><td></td>
                            <td>174.2</td>
                            <td>33.0</td>
                            <td>216.5</td>
                            <td>4.4</td>
                            <td>253.9</td>
                            <td>30.3</td>
                            <td>58.8</td>
                            <td>89.1</td>
                            <td></td>
                            <td>2.97%</td>
                            <td>1.50%</td>
                            <td>1</td>
                            <td>EUR</td><td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};
export default LinearPricingModel;
