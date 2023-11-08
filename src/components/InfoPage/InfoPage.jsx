import React from 'react';

function InfoPage() {
  const listItems = [
    'JAVASCRIPT',
    'REACT.JS',
    'NODE.JS',
    'EXPRESS',
    'MATERIAL UI',
    'CSS',
    'REDUX',
    'PASSPORT',
    'POSTGRESSQL',
  ];

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <p style={{ margin: '0', padding: '0', fontSize: '40px', fontWeight: 'bold' }}>Technologies:</p>
      <div>
        {listItems.map((item, index) => (
          <p key={index} style={{ margin: '10px 0', padding: '0', fontSize: '30px' }}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default InfoPage;
