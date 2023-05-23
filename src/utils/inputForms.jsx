export const InputForm = ({ label, value, type, onChange }) => {

    return(
        <div className="column">
            <label>{label}</label>
            <input 
                value={value}
                type={type}
                onChange={onChange}
            />
        </div>
    )

}