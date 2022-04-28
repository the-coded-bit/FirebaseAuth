import React from 'react'
import styles from '../signup/signup.module.css';
import Link from 'next/dist/client/link';

function Signup() {
  return (
    <div className={styles.main}>  	
		<input className={styles.input} type="checkbox" id="chk" aria-hidden="true"/>

			<div className={styles.signup}>
				<form>
					<label className = {styles.label}for="chk" aria-hidden="true">Sign up</label>
					<input className={styles.input} type="text" name="txt" placeholder="User name" required=""/>
					<input className={styles.input} type="email" name="email" placeholder="Email" required=""/>
					<input className={styles.input} type="password" name="pswd" placeholder="Password" required=""/>
					<button className={styles.button}>Sign up</button>
				</form>
			</div>

			<div className={styles.login}>
				<Link href = '/login' className ={styles.label}>Login</Link>
			</div>
	</div>
  )
}

export default Signup