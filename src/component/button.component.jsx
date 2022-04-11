const Custom_button = ({ type, name, ...others }) => {
  return (
    <div>
      <button type={type}{...others}>{name}</button>
    </div>
  )
}
export default Custom_button; 