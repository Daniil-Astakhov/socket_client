import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Main.module.scss"

const FIELDS = {
    USERNAME: "username",
    ROOM: "room",
}
const Main = () => {

    const { USERNAME, ROOM } = FIELDS;

    const [values, setValues] = useState({ [USERNAME]:"" , [ROOM]: ""});

    const handleChange = ({ target: { value, name } }) => {
        setValues({...values, [name]: value})
    };

    const handleClick = (e) => {
        const isDisabled = Object.values(values).some(value => !value);
        console.log(isDisabled)
        if (isDisabled) e.preventDefault();
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Join</h1>
                <form className={styles.form}>
                    <div className={styles.group}>
                        <input 
                          type="text" 
                          name="username" 
                          value={values[USERNAME]}
                          placeholder="Username"
                          className={styles.input}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                        />
                    </div>
                    <div className={styles.group}>
                        <input 
                          type="text" 
                          name="room" 
                          value={values[ROOM]}
                          placeholder="Room"
                          className={styles.input}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                        />
                    </div>
                    <Link 
                      className={styles.group} 
                      to={`/chat?name=${values[USERNAME]}&room=${values[ROOM]}`}
                      onClick={handleClick}>
                        <button type="submit" className={styles.button}>
                            Sign In
                        </button>

                    </Link>
                </form>
                
            </div>
        </div>
    )
};
export default Main;