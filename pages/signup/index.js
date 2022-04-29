import React, {useEffect, useState, useContext} from 'react'
import styles from '../signup/signup.module.css';
import Link from 'next/link';
import { authContext } from '../../contexts/authWrapper';

function Signup() {
	const {authUser} = useContext(authContext);

	useEffect(() =>{
		if(authUser){

		}
		else{
			console.log('user not logged in');
		}
	}, []);
	console.log('render of signup');
	return (
		<div className={styles.main}>
			<input className={styles.input} type="checkbox" id="chk" aria-hidden="true" />

			<div className={styles.signup}>
				<form>
					<label className={styles.label} htmlFor="chk" aria-hidden="true">Sign up</label>
					<input className={styles.input} type="text" name="txt" placeholder="User name" required="" />
					<input className={styles.input} type="email" name="email" placeholder="Email" required="" />
					<input className={styles.input} type="password" name="pswd" placeholder="Password" required="" />
					<button className={styles.button}>Sign up</button>
				</form>
			</div>

			<div className={styles.login}>
				<Link href='/login' className={styles.label}>Login</Link>
			</div>
		</div>
	)
}

export default Signup