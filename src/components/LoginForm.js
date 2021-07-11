import React,{ useState } from 'react'
import '../css/login.css'
const LoginForm = () => {
  const [formData,setFormData] = useState({name:'', lastname:'', email:'', password:''})
  const [register,setRigister] = useState(true)
  const [loading,setLoading] = useState(false)
  let formTitle = register ? '註冊' : '登入'
  let formGreet = register ? '您好，很高興見到您!' : '您好，歡迎使用自助點餐!'
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="form_container">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1 className="title">
            { formTitle }
          </h1>
          <h2 className="greet">
            { formGreet }
          </h2>
          {
          register ?
          <>
            <input
                type="text"
                id="lastname"
                name="lastname"
                className="ip lastnameInput"
                placeholder="姓氏"
                onChange={e => setFormData({...formData,lastname: e.target.value})}
                value={formData.lastname}
            />
            <input
                type="text"
                id="name"
                name="name"
                className="ip nameInput"
                placeholder="名字"
                onChange={e => setFormData({...formData,name: e.target.value})}
                value={formData.name}
            />
          </>
          : null
          }
            <input
                type="email"
                id="email"
                name="email"
                className="ip emailInput"
                placeholder="Email"
                onChange={e => setFormData({...formData,email: e.target.value})}
                value={formData.email}
            />
            <input
                type="password"
                id="password"
                name="password"
                className="ip passwordInput"
                placeholder="密碼"
                onChange={e => setFormData({...formData,password: e.target.value})}
                value={formData.password}
            />
            <br/>
            <button
                className="submit_button"
                type="submit"
                disabled={ loading }
            >
                { formTitle }
            </button>

            <div className="hint">
                {register ? '已經是會員？' : '尚未成為會員？'}
                <span
                    className="switchlink"
                    onClick={() => setRigister(!register)}
                > 點此 </span>
                 { register ? '開始登入' : '開始註冊' }
            </div>
        </form>

    </div>
  )
}

export default LoginForm
