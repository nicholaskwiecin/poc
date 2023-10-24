import React, { useState,useRef} from 'react';
import { Handle, Position, NodeToolbar, useNodeId } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'
import './CostElementNode.scss';

const CostElementNode = (({ data }) => {

  const nodeId = useNodeId();
  const nodeRef = useRef(null);
  const [isRenaming, setIsRenaming] = useState(false);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {

      // FIXME: This should use a better method to dispatch the event rather than on the window
      // This should be done via a custom event listener or a ref passed down from the parent
      window.dispatchEvent(new CustomEvent("nodeRename",{ detail: { nodeId: nodeId, label: event.target.value }}));
      setIsRenaming(false);
    }
    else if (event.key === 'Escape') {
      setIsRenaming(false);
    }
  }

  const onRenameBlur = () => {
    setIsRenaming(false);
  }

  const onRename = () => {
    setIsRenaming(true);
  }


  return (
    <>
      <NodeToolbar  isVisible={data.toolbarVisible} position={data.toolbarPosition}>
        <div ref={nodeRef} className='button-toolbar'>
          {/* Add a delete button here and implement in the Price Model Workbench */}
          <button className='rename-button' label="Rename" onClick={onRename}><FontAwesomeIcon icon={faSquarePen} /></button>
        </div>
      </NodeToolbar>
      <Handle
        type="target"
        position={data.type.includes('input_child') ? Position.Left : Position.Top}
      />
      {
        isRenaming ?
          <input autoFocus className="nodrag rename-input" type="text" onBlur={onRenameBlur} onKeyDown={onKeyDown} defaultValue={data.label} />
          : data.label
      }
{
  data.type.includes('input_child') ? <></> 
  :  
  <Handle
  type="source"
  position={Position.Bottom}
/>
}
    
    </>
  );
});

export default CostElementNode;
