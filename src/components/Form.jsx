import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const Form = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email:'',
      phone:'',
      password:'',
      confirmPassword:'',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'Must be 15 characters or less').min(4,'Must be charaters or more').required('Required'),
      email:Yup.string().email('Invalid email address').required('Required'),
      password:Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,'Invalid password').required('Required'),
      confirmPassword:Yup.string().oneOf([Yup.ref("password"),null],'password must match').required("Required"),
      phone:Yup.string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/,'Invalid phone')
    }),
    onSubmit: (values)   =>{
      window.alert("form submitted")
      console.log(values);
    }
  });

  return (
    <div className="container">
        <form onSubmit={formik.handleSubmit}>
            <h2>Validate Form</h2>

            <label htmlFor="">You name</label>
            <input type="text" 
            id='name'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='error'>{formik.errors.name}</div>
            ) : null}


            <label htmlFor="">Email address</label>
            <input type="text"
            id='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error'>{formik.errors.email}</div>
            ) : null}


            <label htmlFor="">Password</label>
            <input type="password" 
            id='password'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            />
             {formik.touched.password && formik.errors.password ? (
              <div className='error'>{formik.errors.password}</div>
            ) : null}


            <label htmlFor="">Comfirm Password</label>
            <input type="password" 
            id='confirmPassword'
            name='confirmPassword'
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className='error'>{formik.errors.confirmPassword}</div>
            ) : null}


            <label htmlFor="">Phone number</label>
            <input type="text" 
            id='phone'
            name='phone'
            onChange={formik.handleChange}
            value={formik.values.phone}
            />

            {formik.touched.phone && formik.errors.phone ? (
              <div className='error'>{formik.errors.phone}</div>
            ) : null}


            <button type='submmit'>Submit</button>
        </form>
    </div>
  )
}

export default Form