import React, { useEffect, useContext, useState } from 'react';
import styles from '../login/login.module.css';
import Link from 'next/link';
import { authContext } from '../../contexts/authWrapper';

function Login() {

	const { loadingStatus, authUser, setloading, setauthUser, login } = useContext(authContext);

	// local states
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');

	useEffect(() => {
		console.log('useEffect of login');
		console.log('user status =', authUser);
		console.log('loading status', loadingStatus);
		if (!authUser && !loadingStatus) {
			// it means we still don't have user
			console.log(`we still don't have user`);
			// setauthUser({name : 'arpit'});
		}
		else {
			// we have user
			console.log('yay!!! we got user');
		}
	}, [authUser]);



	//handling login event
	const handleLogin = async (e) => {
		e.preventDefault();
		console.log('login button clicked');
		if (email != '' && password != '') {
			try {
				const user = await login(email, password);
				console.log(user);
				setauthUser(user);
			} catch (err) {
				console.log(err);
			}
		}
	}


	console.log('render of login');
	return (
		<div className={styles.container}>

			<div className={styles.screen}>
				<div className={styles.screen__content}>
					<form className={styles.login}>
						<div className={styles.login__field}>
							<i className={`${styles.login__icon} fas fa-user`}></i>
							<input type="text" className={styles.login__input} placeholder="User name / Email" value={email} onChange={(e) => setemail(e.target.value)} />
						</div>
						<div className={styles.login__field}>
							<i className={`${styles.login__icon} fas fa-lock`}></i>
							<input type="password" className={styles.login__input} placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
						</div>
						<button onClick={(e) => handleLogin(e)}>Log in</button>
					
					</form>
					<div className={styles.social__login}>
						<Link href='/'><h3 style={{ cursor: 'pointer' }}>Sign in</h3></Link>
					</div>
				</div>
				<div className={styles.screen__background}>
					<span className={`${styles.screen__background__shape} ${styles.screen__background__shape4}`}></span>
					<span className={`${styles.screen__background__shape} ${styles.screen__background__shape3}`}></span>
					<span className={`${styles.screen__background__shape} ${styles.screen__background__shape2}`}></span>
					<span className={`${styles.screen__background__shape} ${styles.screen__background__shape1}`}></span>
				</div>
			</div>
		</div>
	)
}

export default Login