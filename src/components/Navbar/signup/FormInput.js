import React from 'react';
import { useFormContext } from 'react-hook-form';
import './style.css';

function FormInput({ name, label,inputType, validation  }) {
    const {
        register,
        formState: { errors },
        watch
    } = useFormContext();
    
    const password = watch("password");

    return (
        <div className={`${name}-container`}>
            <label className="form__label" htmlFor={name}>
                {label}
            </label>
            <input
                className="form__input"
                type="inputTpye"
                {...register(name, validation)}
            />
            {errors[name] && <p className="error">{errors[name].message}</p>}
        </div>
    );
}


export default FormInput;
