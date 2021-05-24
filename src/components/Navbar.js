import React, { Component } from 'react';
import styles from './navbar.module.css'
import burgerlogo from '../assets/burgerlogo.png'
class Navbar extends Component {
    render() {
        return (
            <div className={styles.navbar}>
                <div className={styles.brgrlogo}>
                    <img src={burgerlogo} alt="" />
                    <h3>TK<span id={styles.lg}>Burgers</span></h3>
                </div>
                <div className={styles.loginSection}>
                    <a href=''><h3>Login</h3></a>
                </div>
            </div>
        );
    }
}

export default Navbar;