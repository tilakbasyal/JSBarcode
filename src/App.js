import React from 'react';
import MyBarcode from './MyBarcode';

export default function App() {
  return (
    <div>
      <MyBarcode value={"Welcome Tilak"} displayValue={true}/><br />
    </div>
  )
}