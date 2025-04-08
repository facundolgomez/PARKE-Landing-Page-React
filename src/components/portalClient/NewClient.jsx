import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Modal, Alert } from 'react-bootstrap';

const NewClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    nameCompany: '',
    email: '',
    phoneNumber: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Usuario requerido';
    if (!formData.password) newErrors.password = 'Contraseña requerida';
    if (formData.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (!formData.nameCompany.trim()) newErrors.nameCompany = 'Empresa requerida';
    if (!formData.email.includes('@')) newErrors.email = 'Email inválido';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Teléfono requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://localhost:7185/api/Client/Create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('user-token')}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear cliente');
      }

      setShowSuccess(true);
      setTimeout(() => {
        navigate('/portalCliente');
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
      setErrors(prev => ({ ...prev, form: error.message }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={true} onHide={() => navigate('/portalCliente')} centered>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Cliente</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        {showSuccess && (
          <Alert variant="success" className="mb-4">
            Cliente creado exitosamente!
          </Alert>
        )}

        {errors.form && (
          <Alert variant="danger" className="mb-4">
            {errors.form}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Usuario*</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña*</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Empresa*</Form.Label>
            <Form.Control
              type="text"
              name="nameCompany"
              value={formData.nameCompany}
              onChange={handleChange}
              isInvalid={!!errors.nameCompany}
            />
            <Form.Control.Feedback type="invalid">
              {errors.nameCompany}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teléfono*</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              isInvalid={!!errors.phoneNumber}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-end gap-2">
            <Button 
              variant="secondary" 
              onClick={() => navigate('/portalCliente')}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button 
              variant="primary" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creando...' : 'Crear Cliente'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewClient;