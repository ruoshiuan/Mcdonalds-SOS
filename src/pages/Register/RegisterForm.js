import React, { useState } from 'react'
import firebase, { usersCollection } from '../../firestore_db'
import { useHistory } from 'react-router-dom'
import './login.css'
const RegisterForm = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({ name: '', lastname: '', email: '', password: '' })
  const [register, setRigister] = useState(false)
  const [error, setError] = useState('')
  const formTitle = register ? '註冊' : '登入'
  const formGreet = register ? '成為會員，體驗自助點餐' : '您好，歡迎使用自助點餐!'
  const handleSubmit = (e) => {
    e.preventDefault()
    if (register) {
      if (formData.lastname === '' || formData.name === '') {
        setError('尚有欄位未輸入')
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(formData.email, formData.password)
          .then(res => {
            handleStoreRegisterUser(res)
            handleRedirection()
          })
          .catch(e => {
            console.log(e)
            if (e.code === 'auth/email-already-in-use') {
              setError('此Email已被註冊')
            } else if (formData.email === '') {
              setError('請輸入正確的Email')
            } else if (formData.password.length < 6) {
              setError('密碼長度至少6字符以上')
            } else {
              setError('伺服器內部錯誤')
            }
          })
      }
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(res => {
          if (res.user.email === formData.email) {
            localStorage.setItem('email', JSON.stringify(formData.email))
            handleRedirection()
          }
        })
        .catch(e => {
          console.log(e)
          if (formData.email === '' || formData.password === '') {
            setError('尚有欄位未輸入')
          } else if (e.code === 'auth/user-not-found') {
            setError('此信箱尚未註冊')
          } else {
            setError('信箱或密碼有誤')
          }
        })
    }
  }
  const handleRedirection = () => {
    history.push('/')
  }
  const handleStoreRegisterUser = (data) => {
    const currentTime = new Date().toLocaleString()
    usersCollection.doc(data.user.uid).set({
      uid: data.user.uid,
      email: data.user.email,
      lastname: formData.lastname,
      name: formData.name,
      time: currentTime
    })
      .catch(e => {
        console.log(e)
      })
  }
  const handleGoogleSignin = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        handleStoreRegisterUser(result)
        handleRedirection()
      })
      .catch(e => {
        console.log(e)
      })
  }
  const handleRigister = () => {
    setRigister(!register)
    setFormData({ name: '', lastname: '', email: '', password: '' })
    setError('')
  }

  return (
    <div className="form_container">
        <form className="loginForm" onSubmit={ handleSubmit }>
          <h1 className="title">
            { formTitle }
          </h1>
          <h2 className="greet">
            { formGreet }
          </h2>
          <div style={{ fontSize: '14px', marginLeft: '0', fontWeight: '500', color: '#C50406' }}>◎本服務需開啟定位功能以取得完整資訊</div>
          {
          register
            ? <>
              <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="ip lastnameInput"
                  placeholder="姓氏"
                  onChange={e => setFormData({ ...formData, lastname: e.target.value })}
                  value={ formData.lastname }
              />
              <input
                  type="text"
                  id="name"
                  name="name"
                  className="ip nameInput"
                  placeholder="名字"
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  value={ formData.name }
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
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                value={ formData.email }
            />
            <input
                type="password"
                id="password"
                name="password"
                className="ip passwordInput"
                placeholder="密碼"
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                value={ formData.password }
            />
            <br/>
            {error ? <div className="errorMsg">{error}</div> : null}
            <button
                className="submit_button"
                type="submit"
            >
                { formTitle }
            </button>

            <div className="hint">
                { register ? '已經是會員？' : '尚未成為會員？' }
                <span
                    className="switchlink"
                    onClick={() => handleRigister()}
                > 點此 </span>
                 { register ? '開始登入' : '開始註冊' }
            </div>
        </form>
        { register
          ? null
          : <button className="googleLogin" onClick={() => handleGoogleSignin()}><strong>G+</strong> 使用Google帳戶登入</button>}
    </div>
  )
}

export default RegisterForm
