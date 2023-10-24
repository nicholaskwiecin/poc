import React, { memo, useState, useRef,useEffect } from 'react';
import { Handle, Position, NodeToolbar, useUpdateNodeInternals, useNodeId, useNodes } from 'reactflow';

const CostElementNode = (({ data }) => {

  const nodeId = useNodeId();
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState(data.label);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
   //   data.onRenameNode(nodeId, event.target.value);
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


  const onDelete = (event) => {
    data.onDeleteNode(nodeId);
    console.log(event.target.value);
    console.log(nodeId)
  };

  const onRename = () => {
    setIsRenaming(true);
   }


  return (
    <>
      <NodeToolbar isVisible={data.toolbarVisible} position={data.toolbarPosition}>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onRename}>Rename</button>
      </NodeToolbar>
      <Handle
        type="target"
        position={Position.Top}
      />
      {
      isRenaming ?
       <input autoFocus className="nodrag" type="text" onBlur={onRenameBlur} onKeyDown={onKeyDown} defaultValue={renameValue} /> 
       : 
      <div>
        {data.label}
      </div>
      }

      <Handle
        type="source"
        position={Position.Bottom}
      />
    </>
  );
});

export default CostElementNode;
