import React from 'react'

const SignUpInfo = ({formData, setFormData}) => {
  return (
    <div className='sign-up-container'>
      <input type="email" placeholder='email...'
      value={formData.email}
      onChange={(event) =>
        setFormData({ ...formData, email: event.target.value })
      } />
      <input type="password" placeholder='Password...' 
      value={formData.password}
      onChange={(event) =>
        setFormData({ ...formData, password: event.target.value })
      }/>
    </div>
  )
}

export default SignUpInfo