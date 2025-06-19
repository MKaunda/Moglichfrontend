import {useState}  from 'react';
import '/index.css';

 function CreateAccount(){
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  function handlePasswordChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Check if passwords match
    if(confirmPassword !== ''){
      if(password === confirmPassword) {
        setPasswordsMatch(true);
      } else {
        setPasswordsMatch(false);
      }
    }
  }

  function handleConfirmPasswordChange(event) {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);

    //setConfirmPassword(event.target.value)
    if(newConfirmPassword === password) {
        setPasswordsMatch(true);
      } else {
        setPasswordsMatch(false);
      }
  }

    return(
        <form>
<input
  type="email"
  id="Email"
  name="Email"
  required
/>
<input
  type="password"
  id="password"
  name="password"
  required
  value={password}
  onChange={handlePasswordChange}
/>
   <input
  type="password"
  id="confirmPassword"
  name="confirmPassword"
  required
  value={confirmPassword}
  onChange={handleConfirmPasswordChange}
/>
<p>{passwordsMatch ? " " : "Passwords dont match"}</p>

  <button type="submit">Create Account</button>
    <p>Already have an account? <a href="/login">Login</a></p>
        </form>
    )
 }
 export default CreateAccount;