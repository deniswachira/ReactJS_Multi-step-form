import React, { useState } from 'react'

const Form = () => {
    const [page, setPage] = useState(0);
    const FormTitles = ["Sign up", "Personal info", "Other info"];
  return (
    <div className="form">
        <div className="progressbar"></div>
        <div className="form-container">
            <div className="form-header"></div>
            <div className="body"></div>
            <div className="footer"></div>
        </div>
    </div>
  )
}

export default Form