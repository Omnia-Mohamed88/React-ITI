import React, { useState, useEffect } from 'react';
import Input from '../../reusableCompnent/Input';
import './Form.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
  });
  const [isformsubmited , setisformsubmited] = useState(false)


  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    imageError: '',
  });

  useEffect(() => {
    if (
      !formErrors.nameError &&
      !formErrors.emailError &&
      !formErrors.passwordError &&
      !formErrors.confirmPasswordError &&
      !formErrors.imageError &&
      isformsubmited
    ) {
      console.log('success');
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.nameError = 'Name is required';
    } else if (/\s/.test(formData.name)) {
      errors.nameError = 'Name should not contain spaces';
    }

    if (!formData.email) {
      errors.emailError = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.emailError = 'Email should be in valid format';
    }

    if (!formData.password) {
      errors.passwordError = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.passwordError = 'Password should be at least 8 characters';
    } else if (formData.password.length > 12) {
      errors.passwordError = 'Password should be maximum 12 characters';
    }

    if (!formData.confirmPassword) {
      errors.confirmPasswordError = 'Confirm password is required';
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPasswordError = 'Confirm password should match password';
    }

    if (!formData.image) {
      errors.imageError = 'Image is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisformsubmited(true)
    const isFormValid = validateForm();
    if (isFormValid) {
      console.log('Form data:', formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="label">Name</label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        {formErrors.nameError && <p className="error-message">{formErrors.nameError}</p>}
      </div>

      <div className="form-group">
        <label className="label">Email</label>
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        {formErrors.emailError && <p className="error-message">{formErrors.emailError}</p>}
      </div>

      <div className="form-group">
        <label className="label">Password</label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input-field"
        />
        {formErrors.passwordError && <p className="error-message">{formErrors.passwordError}</p>}
      </div>

      <div className="form-group">
        <label className="label">Confirm Password</label>
        <Input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="input-field"
        />
        {formErrors.confirmPasswordError && <p className="error-message">{formErrors.confirmPasswordError}</p>}
      </div>

      <div className="form-group">
        <label className="label">Upload Image</label>
        <Input
          type="file"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="input-field"
        />
        {formErrors.imageError && <p className="error-message">{formErrors.imageError}</p>}
      </div>

      <button type="submit" className="submit-btn">Register</button>
    </form>
  );
}

export default RegistrationForm;
