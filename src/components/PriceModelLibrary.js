import React, { useState } from 'react';

const PriceModelLibrary = () => {
    const [records, setRecords] = useState([
        { id: 1, name: 'Record 1', column1: 'Link to PriceModelLibrary', column2: 'Column 2', column3: 'Column 3', column4: 'Column 4', column5: 'Column 5', column6: 'Column 6', column7: 'Column 7', column8: 'Column 8', column9: 'Column 9' },
        { id: 2, name: 'Record 2', column1: 'Link to PriceModelLibrary', column2: 'Column 2', column3: 'Column 3', column4: 'Column 4', column5: 'Column 5', column6: 'Column 6', column7: 'Column 7', column8: 'Column 8', column9: 'Column 9' },
        { id: 3, name: 'Record 3', column1: 'Link to PriceModelLibrary', column2: 'Column 2', column3: 'Column 3', column4: 'Column 4', column5: 'Column 5', column6: 'Column 6', column7: 'Column 7', column8: 'Column 8', column9: 'Column 9' }
    ]);

    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredRecords = records.filter((record) => {
        return record.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <div>
            <div>
                <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by name" />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Link</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        <th>Column 4</th>
                        <th>Column 5</th>
                        <th>Column 6</th>
                        <th>Column 7</th>
                        <th>Column 8</th>
                        <th>Column 9</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRecords.map((record) => {
                        return (
                            <tr key={record.id}>
                                <td><a href="/price-model-workbench">{record.column1}</a></td>
                                <td>{record.column2}</td>
                                <td>{record.column3}</td>
                                <td>{record.column4}</td>
                                <td>{record.column5}</td>
                                <td>{record.column6}</td>
                                <td>{record.column7}</td>
                                <td>{record.column8}</td>
                                <td>{record.column9}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PriceModelLibrary;
