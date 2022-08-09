import React from 'react';
import { useState } from 'react';
import { Button, TextField, InputAdornment } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Cookies from 'js-cookie';
import { signin } from '../../services/auth';
import './styles.css';

const Signin = () => {
    const [signinForm, setSigninForm] = useState({
        email: '',
        password: '',
    })

    const signinHandle = async () => {
        console.log(signinForm);
        // const res = await signin(signinForm);
        // console.log(res);
        // if(res.message === "success"){
        //     Cookies.set('token', res.token);
        //     Cookies.set('user_id' ,res.user_id);
        //     console.log(res)
        //     window.location.reload();
        // }else{
        //     setSigninForm({...signinForm,annouce:res.message});
        // }
    }
    return <div>
        <form autoComplete='off'>
            <div className='auth_signin_form'>
                <TextField
                    required
                    type="email"
                    placeholder='email'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MailIcon />
                            </InputAdornment>
                        ),
                    }}
                    onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
                />
                <TextField
                    required
                    placeholder='password'
                    error={false}
                    id="input-with-icon-textfield"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <VpnKeyIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end" onClick={() => setSigninForm(pre => ({ ...pre, showPassword: !pre.showPassword }))}>
                            </InputAdornment>
                        ),
                    }}
                    onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}

                />
                <Button variant="contained" color="primary" href="#contained-buttons" onClick={signinHandle}>
                    Đăng nhập
                </Button>
            </div>
        </form>
    </div>
}

export default Signin;