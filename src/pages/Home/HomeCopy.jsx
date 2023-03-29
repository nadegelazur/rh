import React, { useState } from 'react';
import './home.css'
import { Link, useNavigate } from 'react-router-dom';
// import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { onlyTextRegex, addressRegex } from "../../utils/regex";
import { Modal } from 'lanana-modal-component/dist/index'
import '../../styles/components/modal.scss'

import Header from '../../components/Header';
import FormInput from '../../components/FormInput/FormInput';
// import TextField from '../components/TextFieldNew';
// import Dater from '../components/DatePick';
import Button from '../../components/Button/Button';

// import { etats, departments } from '../utils/SelectDatas'
import { addUser } from '../../features/UserSlice';

const Home = () => {
  const dispatch = useDispatch();
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [birthDate, setBirthDate] = useState('');
  // const [startDate, setStartDate] = useState('');
  // const [street, setStreet] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [zipCode, setZipCode] = useState('');
  // const [department, setDepartment] = useState('');
  // console.log(firstName)
  
  const [modal, setModal] = useState(false);

  const[values, setValues] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    setValues({
      firstName: '',
      lastName: '',
      birthDate: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: '',
    })
    // console.log(values)
    dispatch(addUser({
      firstName: values.firstName,
      lastName: values.lastName,
      birthDate: values.birthDate,
      startDate: values.startDate,
      street: values.street,
      city: values.city,
      state: values.state,
      zipCode: values.zipCode,
      department: values.department,
    }))
    
    setModal(true);
  }
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  // console.log(values)

  return (
    <div className="home_wrapper">
      <div className="home_container__box_header">
        <Header>HRnet</Header>
        <div className='link_bloc'>
          <Link to="employee-list" aria-label="To employee list">
            View Current Employees
          </Link>
        </div>
      </div>

      <div className='box_form'>     
        <form className="form-background"> 
          <FormInput name="firstName"
                     type="text"
                     onChange={onChange} 
                     label="First Name" 
                     placeholder="first name"
                     pattern="^[A-Za-z]{3,16}$"
                     errorMessage="first name should be 3-16 characters and shouldn't 
                     include any special character and number !"
                     required={true}
          />
          <FormInput  name="lastName" 
                      type="text"
                      onChange={onChange} 
                      label="Last Name" 
                      placeholder="last name"
                      pattern="^[A-Za-z]{3,16}$"
                      errorMessage="last name should be 3-16 characters and shouldn't 
                      include any special character and number !"
                      required={true}
          />
          <FormInput name="birthDate"
                     type="date"
                     onChange={onChange}
                     label="Birth Day" 
                     placeholder="date of birthday"
                     required={true}
          />
          <FormInput name="startDate"
                     type="date" 
                     onChange={onChange} 
                     label="Start Day"     
                     placeholder="start of date"
                     required={true}
          />
          <FormInput name="street"
                     type="text" 
                     onChange={onChange} 
                     label="Street" 
                     placeholder="street"
                     pattern="^[A-Za-z0-9]{3,16}$"
                     errorMessage="street should be 3-16 characters and shouldn't 
                     include any special character !"
                     required={true}
          />
          <FormInput name="city"
                     type="text" 
                     onChange={onChange} 
                     label="Sity" 
                     placeholder="city"
                     pattern="^[A-Za-z]{3,16}$"
                     errorMessage="city should be 3-16 characters and shouldn't 
                      include any special character and number!"
                      required={true}
          />
          <FormInput name="state" 
                     onChange={onChange} 
                     label="State" 
                     placeholder="options"
                     required={true}
          />
          <FormInput name="zipCode"
                     type="number" 
                     onChange={onChange} 
                     label="Zip Code" 
                     placeholder="35000"
                     pattern="^[0-9]{5}$"
                     errorMessage="zip code should be only 5 number"
                     required={true}
          />
          <FormInput name="department"
                     onChange={onChange} 
                     label="Department" 
                     placeholder="options"
                     required={true}
          />
          <Button type="submit"
                  onClick={handleAddUser}
          >
            Save
          </Button>
          
        </form>
      </div>
      <Modal title={ 'Employee was successfully created' }
             isOpen={modal}
             isClose={() => setModal(false)}
      />
    </div> 
  )
}
export default Home;

