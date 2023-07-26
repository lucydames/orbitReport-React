import React from 'react';

const Table = ({ sat }) => {
  return (
    <table className="centered-table">
      {/* Table header */}
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>

      {/* Table body */}
      <tbody>
        {sat.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;