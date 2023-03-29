import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { onlyTextRegex, addressRegex } from "../utils/regex";
import { Modal } from 'lanana-modal-component/dist/index'
import '../styles/components/modal.scss'

import Header from '../components/Header';
import TextField from '../components/TextFieldNew';
import Dater from '../components/DatePick';
import Button from '../components/Button';

import { etats, departments } from '../utils/SelectDatas'
import { addUser } from '../features/UserSlice';

const Home = () => {
  const dispatch = useDispatch();

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

  const handleAddUser = () => {
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
    // when buuton submit ouvrir le Modal
    setModal(true);
  }

  const validate = Yup.object({
    firstName: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .max(15, 'Must be 15 characters or less')
      .matches(onlyTextRegex, "Not special characters and not number")
      .required('Required'),
    lastName: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .max(20, 'Must be 20 characters or less')
      .matches(onlyTextRegex, "Not special characters and not number")
      .required('Required'),
    street: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .max(15, 'Must be 15 characters or less')
      .matches(addressRegex, "No special characters")
      .required('Required'),
    city: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .max(15, 'Must be 15 characters or less')
      .matches(onlyTextRegex, "Not special characters and not number")
      .required('Required'),
  })
  return (
    <div className="home_container">
      <div className="home_container__box_header">
        <Header>HRnet</Header>
        <div className='link_bloc'>
          <Link to="employee-list" aria-label="To employee list">
            View Current Employees
          </Link>
        </div>
      </div>

      <div className='home_container__box_form'>
        <Formik
          // initialValues={
          //   { 
          //     firstName: '',
          //     lastName: '',
          //     birthDate: '',
          //     startDate: '',
          //     street: '',
          //     city: '',
          //     state: '',
          //     zipCode: '',
          //     department: '',
          //   }
          // }
          validationSchema={validate}
          onSubmit={ values  => {
            console.log(values)
          }} >
        
          { formik => 
            <div>
              <Form className="home_container__box_form__form">
                <div className='home_container__box_form__form__container__box_one__input_bloc'>

                  <div className='home_container__box_form__form__container__box_one__init_bloc'>
                    <TextField 
                      label="First Name"
                      value={values.firstName}
                      onChange={(e) => setValues({...values, firstName: e.target.value })}
                      inputProps={{type: 'text', placeholder: 'Jhon'}} 
                      name="firstName"
                      />
                    <TextField 
                      label="Last Name" 
                      value={values.lastName}
                      onChange={(e) => setValues({...values, lastName: e.target.value })}
                      inputProps={{type: 'text', placeholder: 'Doe'}}
                      name="lastName"
                      />
                  </div>
                  
                  <div className='home_container__box_form__form__container__box_one__date_bloc'>
                    <Field  as={Dater}
                            value={values.birthDate}
                            onChange={(e) => setValues({...values, birthDate: e.target.value })}
                            name="birthDate" />
                    
                    <Field  as={Dater}
                            value={values.startDate} 
                            onChange={(e) => setValues({...values, startDate: e.target.value })}
                            name="startDate" />  
                  </div>

                  <div className='home_container__box_form__form__container__box_one__adresse_bloc'>
                    <fieldset>
                      <legend>Adresse</legend>
                      <div className='adresse_bloc-1'>
                        <TextField 
                          label="Street" 
                          value={values.street}
                          onChange={(e) => setValues({...values, street: e.target.value })}
                          inputProps={{type: 'text', placeholder: '5 Parc Avenue'}} 
                          name="street"
                          />
                        <TextField 
                          label="City" 
                          value={values.city}
                          onChange={(e) => setValues({...values, city: e.target.value })}
                          inputProps={{type: 'text', placeholder: 'New York'}} 
                          name="city"
                          />
                      </div>

                      <div className='adresse_bloc-1'>
                        <div className='input_container'>
                          <label htmlFor="state">State</label>
                          <Field  as="select"
                                  value={values.state}
                                  onChange={(e) => setValues({...values, state: e.target.value })}
                                  name="state"
                                  placeholder="Alabama"
                                  className="select_container__select" > 
                                            
                                    { etats.map((option, index) => {
                                      return (
                                          <option className='select_container__option'
                                                  value={option.name}
                                                  key={index}>
                                                  {option.name}
                                                  

                                          </option>
                                      )}) 
                                    }
                          </Field> 
                        </div>
                        <div className='input_container'>
                        <TextField 
                          label="Zip Code" 
                          value={values.zipCode}
                          onChange={(e) => setValues({...values, zipCode: e.target.value })}
                          inputProps={{type: 'number', placeholder: '13000'}} 
                          name="zipCode"
                          />
                        </div>
        
                      </div>
                    </fieldset>
                  </div>

                  <div className='home_container__box_form__form__container__box_one__departement_bloc'>
                    <div className='input_container'>
                      <label className=''>Departement</label>
                      <Field  as="select"
                              value={values.department}
                              onChange={(e) => setValues({...values, department: e.target.value })}
                              name="department"
                              placeholder="Sales"
                      >     
                        { departments.map((option, index) => {
                          return (
                              <option value={option}
                                      key={index}>
                                      {option}
                              </option>
                          )}) 
                        } 
                      </Field>     
                    </div>
                  </div>                       

                  <div className="home_container__box_form__form__container__input_button">
                    <Button 
                      type="submit"
                      role="button"
                      onClick={ handleAddUser } >
                        Save
                    </Button>
                  </div>   
                </div>
              </Form>
            </div>
          }
        </Formik>
      </div>

      <Modal  title={ 'Employee was successfully created' }
              isOpen={modal}
              isClose={ () => setModal(false) } >
      </Modal>       
    </div> 
  )
}
export default Home;

