import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import classes from './login-modal.module.scss';
import AuthService from '../../services/auth.service';

const baseUserFields = {
    lastname: '',
    firstname: '',
    password: '',
    email: ''
};

export default function LoginModal({visible, setVisible}){
    const [ userFields, setUserFields ] = useState(baseUserFields);

    useEffect(()=>{
        if(visible){
            setUserFields(baseUserFields);
        }
    }, [visible]);

    const updateField = useCallback((value, type) => {
        setUserFields({...userFields, [type]: value});
    }, [userFields]);

    const onSubmit = async e => {
        e.preventDefault();
        let res = await AuthService.register(userFields);
        if(res === true){
            setVisible(false);
        }else{
            console.error(res);
        }
    };

    return(
        <Modal
            isOpen={visible}
            onRequestClose={() => setVisible(false)}
            className={`${classes.loginModal}`}
            disableAutoFocus={true}
            ariaHideApp={false}
            style={{ overlay: { zIndex: 1000, background: 'rgba(0, 0, 0, 0.7)' } }}>
                <div className={classes.formHeader}>
                    <div className={classes.content}>
                        <h2>Sign Up</h2>
                        <p>It's quick and easy.</p>
                        <svg onClick={() => setVisible(false)}
                            width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 17L1 1M17 1L1 17" stroke="#858585" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
                <div className={classes.formContent}>
                    <form onSubmit={onSubmit}>
                        <div className={classes.inlineInput}>
                            <input
                                onChange={e => updateField(e.target.value, 'name')}
                                value={userFields.name}
                                className={''}
                                type="text"
                                placeholder="First name"
                                />
                            <input
                                onChange={e => updateField(e.target.value, 'lastname')}
                                value={userFields.lastname}
                                className={''}
                                type="text"
                                placeholder="Last name"
                                />
                        </div>
                        <input
                            onChange={e => updateField(e.target.value, 'email')}
                            value={userFields.email}
                            className={''}
                            type="email" 
                            placeholder="Email" 
                            />
                        <input
                            onChange={e => updateField(e.target.value, 'password')}
                            value={userFields.password}
                            className={''}
                            type="password"
                            placeholder="New password" 
                            />
                        <p className={classes.tos}>By clicking Sign Up, you agree to our Terms. Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology in our Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                        <button type="submit" className="btn green">Sign up</button>
                    </form>
                </div>
        </Modal>
    )
}