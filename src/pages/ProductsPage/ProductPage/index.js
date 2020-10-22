import React from 'react';

export default function ProductPage({ match }) {
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  );
}
