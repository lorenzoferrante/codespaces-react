import React , { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { baseNodeStyle, baseNodeStyle2 } from './Styles';

import '@reactflow/node-resizer/dist/style.css';

const baseNodetSyle: CSSProperties = {
    backgroundColor: '#123456',
    padding: 10,
    color: '#fff'
}

class BaseNode extends React.Component<NodeProps> {

    render() {
        return (
            <>
                <div style={baseNodeStyle} >
                    <Handle type="target" position={Position.Left} />
                    <div>
                        <div>
                            Label: <strong>{this.props.data.label}</strong>
                        </div>
                    </div>
                    <Handle type="source" position={Position.Right} id="a" />
                    <Handle type="source" position={Position.Right} id="b" />
                </div>
            </>
        );
    }

}

export default memo(BaseNode);