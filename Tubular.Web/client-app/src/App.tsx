import * as React from 'react';
import {DataGrid} from 'tubular-react';
import {ColumnsDefinition} from './ColumnsDefinition';

const App: React.FunctionComponent = () => {
    return (
        <>
            <h2>Tubular</h2>
            <DataGrid
                gridName='Orders'
                columns={ColumnsDefinition}
                dataSource={'http://localhost:51244/api/tubular/paged'}
            />
        </>
    );
};

export default App;
