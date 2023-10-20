import React from 'react';

const FormulaBar = ({selectedFormula}) => {



      return (
        <aside>
          FormulaBar Reference Material {JSON.stringify(selectedFormula)}
          {Object.keys(selectedFormula.formulaNode).length ? <div>

          </div>: <div className='no-selection-message'>No Formula Selected</div>}
        </aside>
      );

 }
export default FormulaBar;