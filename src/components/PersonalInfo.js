import React from 'react'

const PersonalInfo = ({formData, setFormData}) => {
  return (
    <div className='personal-info-container'>
      <input type="text" placeholder='FirstName...'
      value={formData.firstName}
      onChange={(event) =>
        setFormData({ ...formData, firstName: event.target.value })
      } />
      <input type="text" placeholder='LastName...' 
      value={formData.lastName}
      onChange={(event) =>
        setFormData({ ...formData, lastName: event.target.value })
      }/>
      <input type="text" placeholder='Username...' 
      value={formData.username}
      onChange={(event) =>
        setFormData({ ...formData, username: event.target.value })
      }/>
    </div>
  )
}

export default PersonalInfo