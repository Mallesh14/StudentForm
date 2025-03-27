import * as Yup from "yup";
import React from'react';
import {Form, Formik}from 'formik';
import { ErrorMessage,Field } from 'formik';

function EmployeeFeedbackForm(props){
   const initialValues={
    fullname:"",
    email:"",
    department:"",//select
    rating:"",
    feedback:"",
   }
   const validationSchema = Yup.object({
    fullName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Full name is required"),
    email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
    department: Yup.string().required("Department is required"),
    rating:
    Yup.number()
    .min(1, "Minimum rating is 1")
    .max(5, "Maximum rating is 5")
    .required("Rating is required"),
    feedback: Yup.string().max(200, "Feedback should be under 200 characters"),
    });

    const handleSubmit=(values,{resetForm})=>{
        alert("Form Submitted Successfully!!!");
        resetForm();
    };

return (
     <div className='form-container'>
                <h2>EMPLOYEE FEEDBACK FORM</h2>
                <Formik initialValues={initialValues}
                validationSchema={validationSchema}
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

                <div className='department'>
                <Field as='select' name='department'>
                    <option value="">Department</option>
                    <option value='Sales'>Sales</option>
                    <option value='Development'>Development</option>
                    <option value='Research'>Research</option>
                    </Field>
                    <ErrorMessage name="department" component="div" className="error"/>
               </div>
                <div>
                    <label>Rating: </label>
                    <Field type="text" name="rating"/>
                    <ErrorMessage name="rating" component="div" className="error"/>
                </div> 
                <div>
                    <label>Feedback:</label>
                    <Field type="text" name="feedback"/>
                    <ErrorMessage name="feedback" component="div" className="error"/>
                </div>

               <div>
                <button type='submit'>Submit</button>
               </div>
              </Form>
              </Formik>
            </div>
)
}
export default EmployeeFeedbackForm;