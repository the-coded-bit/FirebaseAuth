import React from 'react';
import styles from '../login/login.module.css';
import Link from 'next/link';


function Login() {
  return (
    <div className={styles.container}>
        
	<div className={styles.screen}>
    <div className={styles.screen__content}>
			<form className={styles.login}>
				<div className={styles.login__field}>
					<i className={`${styles.login__icon} fas fa-user`}></i>
					<input type="text" className={styles.login__input} placeholder="User name / Email"/>
				</div>
				<div className={styles.login__field}>
					<i className={`${styles.login__icon} fas fa-lock`}></i>
					<input type="password" className={styles.login__input} placeholder="Password"/>
				</div>
				<button className={`${styles.button} ${styles.login__submit}`}>
					<span className={styles.button__text}>Log In Now</span>
					<i className={`${styles.button__icon} fas fa-chevron-right`}></i>
				</button>				
			</form>
			<div className={styles.social__login}>
				<Link href='/'><h3 style={{cursor : 'pointer'}}>Sign in</h3></Link>
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