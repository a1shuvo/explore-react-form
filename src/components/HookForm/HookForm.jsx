import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted', name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={nameOnChange} type="text" placeholder='Name' />
                <br />
                <input onChange={emailOnChange} type="email" name="email" placeholder='Email' />
                <br />
                <input onChange={passwordOnChange} type="password" name="password" placeholder='password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;