import styles from '../styles/SignIn.module.css';
import { useState } from 'react';
import {Input} from 'antd';


function SignIn () {

    const [email, setEmail] = useState('');

    <>
    <Input placeholder="Basic usage" />
    {/* <input name="myInput" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email}/> */}
    </>
}

export default SignIn;