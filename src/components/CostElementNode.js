import React, { useState} from 'react';
import { Handle, Position, NodeToolbar, useNodeId } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'
import './CostElementNode.scss';

const CostElementNode = (({ data }) => {

  const nodeId = useNodeId();
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState(data.label);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      data.onRenameNode(nodeId, event.target.value);
      setIsRenaming(false);
    }
    else if (event.key === 'Escape') {
      setIsRenaming(false);
      setRenameValue(data.label);
    }
  }

  const onRenameBlur = () => {
    setIsRenaming(false);
    setRenameValue(data.label);
  }

  const onRename = () => {
    setIsRenaming(true);
  }


  return (
    <>
      <NodeToolbar isVisible={data.toolbarVisible} position={data.toolbarPosition}>
        <div className='button-toolbar'>
          {/* Add a delete button here and implement in the Price Model Workbench */}
          <button className='rename-button' label="Rename" onClick={onRename}><FontAwesomeIcon icon={faSquarePen} /></button>
        </div>
      </NodeToolbar>
      <Handle
        type="target"
        position={Position.Top}
      />
      {
        isRenaming ?
          <input autoFocus className="nodrag rename-input" type="text" onBlur={onRenameBlur} onKeyDown={onKeyDown} defaultValue={renameValue} />
          : data.label
      }

      <Handle
        type="source"
        position={Position.Bottom}
      />
    </>
  );
});

export default CostElementNode;
