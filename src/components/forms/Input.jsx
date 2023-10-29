import styles from '../../styles/Login.module.css'

const Input = ({ ...props }) => {
    return (
        <>
            <label className={styles.label} htmlFor={props.inputName}>{props.inputName}</label>
            <input
                id={props.inputName}
                type={props.inputType}
                className={props.styles ? props.styles : styles.input}
                placeholder={props.inputPlaceholder}
                required
                defaultValue={props.value}
                autoComplete="off"
            />
        </>        
    )
}

export default Input