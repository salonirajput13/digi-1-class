import React from 'react' 
import {useFormik} from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
    name:Yup.string()
    .required('Name is required')
    .min(3, 'name must be atleast  3 characters')
    .max(15, 'name must be at most  15 characters'),
    email : Yup.string()
    .email('Invalid Email ')
    .required("Email is required"),
    password : Yup.string()
    .required("Password is required")
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Password must not exceed 15 characters')
})

const Signup = () => {
    // step1 : formik initialization
    const SignupForm = useFormik({
        initialValues: {
            name:'',
            email:'',
            password:'',
        },
    
        onSubmit: async(values,action) =>{
            console.log(values);
            const res = await fetch('http://localhost:3000/user/add',{
                method:"POST",
                body: JSON.stringify(values),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            console.log(res.status)
            action.resetForm()

            if (res.status === 200){
                enqueueSnackbar('Signup successful', { variant: 'success' })
                }else{
                    enqueueSnackbar('Signup failed', { variant: 'error'})
            }
        },
            

        validationSchema: SignupSchema
       })
    return (
        <div className='container'>
            <div className="col">
                <div className="card w-25 d-block mx-auto">
                    <div className="card-header">
                        <h3>Signup</h3>
                    </div>
                    <div className="card-body">
                        {/*/step2 : handling when submit */}
                        <form onSubmit={SignupForm.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <span style={{color: 'red', fontSize:'10'}}>{SignupForm.touched.name && SignupForm.errors.name}</span>
                            <input type="text" className="form-control mb-4"
                             id="name"
                             onChange={SignupForm.handleChange}
                             value={SignupForm.values.name} />
                           
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <span style={{color: 'red', fontSize:'10'}}>{SignupForm.touched.email && SignupForm.errors.email}</span>
                            <input type="text" className="form-control mb-4" 
                             id="email"
                             onChange={SignupForm.handleChange}
                             value={SignupForm.values.email} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <span style={{color: 'red', fontSize:'10'}}>{SignupForm.touched.password && SignupForm.errors.password}</span>
                            <input type="text" className="form-control mb-4"
                             id="password"
                             onChange={SignupForm.handleChange}
                             value={SignupForm.values.password} />
                        </div>
                        <button type='submit' className="btn btn-primary">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    </div >
    
  )
}

export default Signup