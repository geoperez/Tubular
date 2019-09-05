import * as React from 'react';
import {DataGrid} from 'tubular-react';
import {ColumnsDefinition} from './ColumnsDefinition';
import { getTubularClient } from './services/fetch';

const App: React.FunctionComponent = () => {
    return (
        <>
            <h2>Tubular</h2>
            <DataGrid
                gridName='Orders'
                columns={ColumnsDefinition}
                dataSource={getTubularClient('/api/tubular/paged')}
            />
        </>
    );
};

export default App;
