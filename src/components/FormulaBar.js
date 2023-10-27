import React from 'react';

const FormulaBar = ({ selectedFormula }) => {

  const substituteDescription = (description) => {
    let newDescription = description.replace('%INPUTS%', selectedFormula.inputNodes.reduce((accumulator, currentValue,index) => {
      return accumulator + currentValue.data.label + (selectedFormula.inputNodes.length - 1 === index ? '' :', ');
    },''));
    return newDescription;
  }

  const substituteFormula = (description) => {

    // TODO: Support other type of formula nodes
    if (selectedFormula.formulaNode.data.type === 'formula_sum') {
      let summation = selectedFormula.inputNodes.reduce((accumulator, currentValue,index) => {
        accumulator.value += parseInt(currentValue.data.costPerUnit);
        accumulator.descriptorText += `${currentValue.data.label}(${currentValue.data.costPerUnit})${selectedFormula.inputNodes.length - 1 === index ? '' :', '}`
        return accumulator;
      },{value: 0, descriptorText:'('})
      return `${selectedFormula.formulaNode.data.label} Cost (${summation.value}) = Sum of ${summation.descriptorText})`;
    }
    else {
      return 'Formula not supported'
    }
  }

  return (
    <aside className='formula-bar'>
      {Object.keys(selectedFormula.formulaNode).length ? <div>
        <h2>Formula Bar</h2>
        <div className='formula-description'>
          {substituteDescription(selectedFormula.formulaNode.data.description)}
        </div>
        <h2>Reference Material</h2>
        <div className='formula-calucation'>
          {substituteFormula()}
        </div>
      </div> : <div className='no-selection-message'>No Formula Selected</div>}
    </aside>
  );

}
export default FormulaBar;