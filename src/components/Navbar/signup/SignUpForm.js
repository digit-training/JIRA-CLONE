import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import './style.css';
import { Height } from '@mui/icons-material';

function SignUpForm() {
    const methods = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/home');
    };

    return (
        <div style={{ height: "70vh" }}>
            <div className="form">
                <FormProvider {...methods}>
                    <form onSubmit={onSubmit} className="form-body">
                        <FormInput
                            name="firstName"
                            label="First Name"
                            inputType="text"
                            validation={{ required: "First name is required" }}
                        />
                        <FormInput
                            name="lastName"
                            label="Last Name"
                            inputType="text"
                        />
                        <FormInput
                            name="email"
                            label="Email"
                            inputType="email"
                            validation={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
                        />
                        <FormInput
                            name="password"
                            label="Password"
                            inputType="password"
                            validation={{ required: "Password is required", minLength: 6 }}
                        />
                        <FormInput
                            name="confirmPassword"
                            label="Confirm Password"
                            inputType="password"
                            validation={{
                                required: "Confirm Password is required",
                                validate: (value) => value === methods.watch("password") || "Passwords do not match",
                            }}
                        />
                        <div className="footer">
                            <button className="submit btn" type="submit">Submit</button>
                            <button className="login btn" onClick={() => navigate('/')}>Login</button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );

}

export default SignUpForm;

