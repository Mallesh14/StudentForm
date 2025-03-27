import React from'react';
import {Form, Formik}from 'formik';
import { ErrorMessage,Field } from 'formik';
function StudentRegistrationForm(){
    const initialValues={
            name:"",
            email:"",
            phone:"",
            password:"",
            conformPassword:"",
            course:"",
            terms:false,
    };
    const validate=(values)=>{
        const errors={};

        if(!values.name)
        {
            errors.name="Full Name is Required";
        }
        if(!values.email)
        {
            errors.email="Email is Required";
        }
        else if(!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/){    //  \w can contain alphabets ,numbers,underscores eg:malles.143

             errors.email="Invalid Email Address"
        }
        if(!values.phone){
           errors.phone="Phonee Number is Required";
         }
         else if(!/[^\d]{10}$/)
         {
            errors.phone="Invalid Phone Number";
         }
         if(!values.password)
         {
            errors.password="Password is Required";
         }
         else if(values.password.length<6)
         {
            errors.password="Your Password must be atleast 6 characters"
         }
         if(!values.confirmPassword)
            {
               errors.password="Conform your password";
            }
            else if(values.confirmPassword!==values.password)
            {
               errors.password="Password do not match";
            }
            if(!values.course){
                errors.course="Select the Course";
            }
            if(!values.terms)
            {
                errors.terms="Please agree to terms and conditions";
            }
return errors;
    };
    const handleSubmit=(values,{resetForm})=>{
        alert("Form Submitted Successfully!!!");
        resetForm();
    };
    return(
        <div className='form-container'>
            <h2>STUDENT REGISTRATION</h2>
            <Formik initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit} >
          <Form>
            <div>
                <label>Full Name:</label>
                <Field type="text" name="name"/>
                <ErrorMessage name="name" component="div" className="error"/>
            </div>

            <div>
                <label>Email:</label>
                <Field type="email" name="email"/>
                <ErrorMessage name="email" component="div" className="error"/>
            </div>

            <div>
                <label>Phone:</label>
                <Field type="text" name="phone"/>
                <ErrorMessage name="phone" component="div" className="error"/>
            </div>
            <div>
                <label>Password: </label>
                <Field type="password" name="password"/>
                <ErrorMessage name="password" component="div" className="error"/>
            </div> 
            <div>
                <label>Confirm Password: </label>
                <Field type="password" name="confirmPassword"/>
                <ErrorMessage name="confirmPassword" component="div" className="error"/>
            </div>
           <div className='course'>
            <Field as='select' name='course'>
                <option value="">Select</option>
                <option value='Web Development'>Web Development</option>
                <option value='AI'>AI</option>
                <option value='Data Science'>Data Science</option>
                </Field>
                <ErrorMessage name="course" component="div" className="error"/>
           </div>
           <div>
            <Field type="checkbox" name="terms"/>
                I Agree to the Terms And Conditions
            <ErrorMessage name="terms" component="div" className="error"/>
           </div>
           <div>
            <button type='submit'>Register</button>
           </div>
          </Form>
          </Formik>
        </div>
    )
}
export default StudentRegistrationForm;