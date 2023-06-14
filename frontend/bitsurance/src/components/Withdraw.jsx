import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const WithdrawForm = () => {
  const [rows, setRows] = useState([{ tokenId: '' }]);

  const handleChange = (i, e) => {
    const { name, value } = e.target;
    const newRows = [...rows];
    newRows[i][name] = value;
    setRows(newRows);
  };

  const addRow = () => {
    setRows(prevRows => [...prevRows, { tokenId: '' }]);
  };

  return (
    <Form className="vault-form p-5 rounded" style={{backgroundColor:'#2B2A3D'}}>
      <Form.Group className="mb-3">
        <Form.Label className="text-white">NFT Contract Address</Form.Label>
        <Form.Control type="text" placeholder="Enter NFT Contract Address" className="form-control-sm"/>
      </Form.Group>
      {rows.map((item, idx) => (
        <Row className="mb-3" key={idx}>
          <Form.Group as={Col}>
            <Form.Label className="text-white">Token ID</Form.Label>
            <Form.Control type="text" name="tokenId" value={item.tokenId} onChange={e => handleChange(idx, e)} className="form-control-sm"/>
          </Form.Group>
        </Row>
      ))}
      <Button variant="primary" onClick={addRow}>Add another TokenID</Button>
      <Button variant="outline-light" type="submit" className="w-100 mt-3">
        Withdraw
      </Button>
    </Form>
  );
};

export default WithdrawForm;
