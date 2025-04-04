import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import css from "../ContactForm/ContactForm.module.css";
// import css from "../ContactForm/ContactForm"
import { nanoid } from "nanoid";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ValidationSchema =Yup.object().shape({
    username:Yup.string().min(2,"Must contain more than 2 letters").required("This field is required"),
    phoneNumber:Yup.string().min(7, "Enter valid phone number").max(50, "Too long").matches(phoneRegExp,"The phone number scheme is xxx-xx-xx").required("phone number is required"),
})

//export default function ContactForm ({onSubmit}){
    export default function ContactForm (){
    const dispatch = useDispatch();

    // const handleSubmit = (values, actions) =>{   this function has been refactored
    //     const newContact = {
    //         id: nanoid(),
    //         name: values.username,
    //         number: values.phoneNumber,
    //         };
    //      onSubmit(newContact);
    //     actions.resetForm();
    // } 

    const handleSubmit = (values, actions) => {

            const newContact = {
                id: nanoid(),
            name: values.username,
            number: values.phoneNumber,
            };
        dispatch(addContact(newContact));
        actions.resetForm();
      };
    

       // (THE KEY in initial values (username, number) has to be the same as the name of the FIELD)
    return(<Formik initialValues = {{
        username:"",
        phoneNumber:"",
    }}
    validationSchema ={ValidationSchema}
    onSubmit ={handleSubmit}>
        <Form className ={css.form}>
        <label className ={css.formLabel}>Username</label>
        <Field className ={css.formField} type="text" name ="username"/>
        <ErrorMessage className ={css.errorMessage} name ="username" component ="span"/>
        <label className ={css.formLabel}>Phone Number</label>
        <Field className ={css.formField} type="text" name ="phoneNumber"/>
        <ErrorMessage className ={css.errorMessage} name ="phoneNumber" component ="span"/>
        <button className ={css.formButton}type="submit">Add Contact</button>
    

        </Form>
    </Formik>)


}


// ====================

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import css from './ContactForm.module.css';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';

// export default function ContactForm() {
//   const dispatch = useDispatch();

//   const FeedbackSchema = Yup.object().shape({
//     name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
//     number: Yup.string()
//       .required('Required')
//       .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67'),
//   });

//   const handleSubmit = value => {
//     dispatch(addContact(value));
//   };

//   return (
//     <Formik validationSchema={FeedbackSchema} initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
//       <Form className={css.form}>
//         <label htmlFor=''>Name</label>
//         <Field className={css.field} type='text' name='name' id='' />
//         <ErrorMessage className={css.err} name='name' component='span' />
//         <label htmlFor=''>Number</label>
//         <Field className={css.field} type='text' name='number' id='' />
//         <ErrorMessage className={css.err} name='number' component='span' />
//         <button type='submit'>Add contact</button>
//       </Form>
//     </Formik>
//   );
// }