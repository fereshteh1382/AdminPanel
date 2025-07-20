

export default function pageCreate() {
  return (
/*     <div className="container">
      <input type="radio" name="toggle" id="login" defaultChecked />
      <input type="radio" name="toggle" id="signup" />

      <div className="toggle-buttons">
        <label htmlFor="login">ورود</label>
        <label htmlFor="signup">ثبت‌نام</label>
        <div className="toggle-slider"></div>
      </div>


    </div> */
    <div className="toggle-buttons">
    <input type="radio" name="toggle" id="login" defaultChecked />
<label htmlFor="login">ورود</label>

<input type="radio" name="toggle" id="register" />
<label htmlFor="register">ثبت‌نام</label>

    </div>
   
  )
}
