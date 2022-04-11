
const Form_input = ({ label, group_one, ...other }) => {

  return (
    <div className={group_one}>
      <label>{label}
        <input {...other} />
      </label>
    </div>
  )

}

export default Form_input; 