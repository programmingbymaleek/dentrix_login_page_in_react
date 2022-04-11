// import './App.css';
import './form.style.scss'
import Form_input from './component/input.componet';


function App() {
  return (
    <div className='container'>
      <div className='outer'>
        <div id='login_logo'></div>
        <form action="" class="form">
          <legend>Login</legend>
          <div className="child_forms">
            <div>
              <Form_input label='Organization' group_one='group_one' type={'text'} id={'organization'} />
              <Form_input label='Username' group_one='group_one' type={'text'} id={'username'} />

              <Form_input label='Password' group_one='group_one' type={'password'} id={'password'} />
              <div className='span_margin'>
                <span id="forgot_pass"><a href="#">forgot password?</a></span>
              </div>
            </div>
            <div className='login_div'>
              <input type="submit" name='send' id='send' value="Log in" />
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
