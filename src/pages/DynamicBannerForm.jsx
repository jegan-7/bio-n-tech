

import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import './DynamicBannerForm.css'

const DynamicBannerForm = ({ onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Heading</Form.Label>
        <Form.Control
          type="text"
          placeholder="heading..."
          {...register("heading")}
           className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Sub Heading</Form.Label>
        <Form.Control
          type="text"
          placeholder="sub-heading..."
          {...register("subHeading")}
           className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="description..."
          {...register("description")}
           className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Paste image URL"
          {...register("image")}
           className="custom-input"
        />
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button variant="success" type="submit">Next</Button>
      </div>
    </Form>
  );
};

export default DynamicBannerForm;
