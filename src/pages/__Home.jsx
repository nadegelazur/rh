import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Dater from '../components/DatePick';
import SelectField from '../components/SelectField';

import { etats, departments } from '../utils/SelectDatas'

import { submitForm } from '../features/HomeSlice';
import {
  selectState,
  selectDepartment,
  inputFirstName,
  inputLastName,
  inputStreet,
  inputCity,
  inputZipCode,
  inputBirthDate,
  inputStartDate,
} from '../utils/homeCompoProp';

import { validationFormSchema } from '../utils/utils';



const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [zipCode, setZipCode] = useState();

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
            initialValues={{
              firstName: "",
              lastName: "",
              birthDate: "",
              startDate: "",
              street: "",
              city: "",
              states: "",
              zipCode: "",
              department: "",
            }}
            validationSchema={validationFormSchema}
            onSubmit={(value, { resetForm }) => {
              dispatch(submitForm(value));

              setIsOpen(true);
              resetForm();
          }} >
          {({ errors, touched, isSubmiting }) => (
            <Form className="home_container__box_form__form">
              <div className='home_container__box_form__form__container__box_one__input_bloc'>
                    
                <div className='home_container__box_form__form__container__box_one__init_bloc'>
                  <Field as={TextInput}
                         name={inputFirstName.idName}
                         {...inputFirstName}
                  />  
                    {errors.firstName && touched.firstName}
                  <div className={errors.firstName ? "error active" : "error"}>
                    {errors.firstName}
                  </div> 

                  <Field as={TextInput}
                        name={inputLastName.idName}
                        {...inputLastName}
                  />
                    {errors.lastName && touched.lastName}
                  <div className={errors.lastName ? "error active" : "error"}>
                    {errors.lastName}
                  </div>  
                </div>

                <div className='home_container__box_form__form__container__box_one__data_bloc'>
                  <Field name="birthDate" as={Dater} {...inputBirthDate} />
                    {errors.birthDate && touched.birthDate}
                  <div className={errors.birthDate ? "error active" : "error"}>
                      {errors.birthDate}
                  </div>
                  <Field name="startDate" as={Dater} {...inputStartDate} />
                    {errors.startDate && touched.startDate}
                  <div className={errors.startDate ? "error active" : "error"}>
                    {errors.startDate}
                  </div>
                </div> 

                <div className='home_container__box_form__form__container__box_one__adresse_bloc'>
                  <fieldset>
                    <legend>Adresse</legend>
                    <div className='adresse_bloc-1'>
                      <Field as={TextInput}
                             name={inputStreet.idName}
                             {...inputStreet}
                      />
                        {errors.street && touched.street}
                      <div className={errors.street ? "error active" : "error"}>
                        {errors.street}
                      </div>

                      <Field as={TextInput}
                             name={inputCity.idName}
                             {...inputCity}
                      />
                        {errors.city && touched.city}
                      <div className={errors.city ? "error active" : "error"}>
                        {errors.city}
                      </div>                    
                    </div>
                    <div className='adresse_bloc-1'>
                      <div className='input_container'>
                        <label className=''>State</label>
                        <Field as="select"
                              name={selectState.idName}
                              placeholder="Alabama">                              
                          { etats.map((option, index) => {
                            return (
                                <option value={option.name}
                                        key={index}>
                                        {option.name}
                                </option>
                            )}) 
                          }
                        </Field>  
                          {errors.states && touched.states}
                        <div className={errors.states ? "error active" : "error"}>
                          {errors.states}
                        </div>
                      </div>
                      {/* <Field name={selectState.idName}
                             as={SelectField}
                             {...selectState}
                      />
                        {errors.states && touched.states}
                      <div className={errors.states ? "error active" : "error"}>
                          {errors.states}
                      </div> */}
                      

                      {/* <label htmlFor="zip-code">Zip Code</label>
                      {/* <input  id="zip-code"
                              type="number"
                              required="required"
                              onChange={(e) => setZipCode(e.target.value)}
                      />   
                      <Field  type="number"
                              required="required">

                      </Field>
                      {errors.zipCode && touched.zipCode}
                      <div className={errors.zipCode ? "error active" : "error"}>
                        {errors.zipCode}
                      </div> */}
                                              
                    </div>
                  </fieldset>
                </div> 
                <div className='home_container__box_form__form__container__box_one__departement_bloc'>
                  <div className='input_container'>
                    <label className=''>Departement</label>
                    <Field as="select"
                            name={selectDepartment.idName}
                            placeholder="Sales">     
                      { departments.map((option, index) => {
                        return (
                            <option value={option}
                                    key={index}>
                                    {option}
                            </option>
                        )}) 
                      } 
                    </Field>   
                      {errors.department && touched.department}
                    <div className={errors.department ? "error active" : "error"}>
                      {errors.department}
                    </div>     
                  </div>
                  
                </div>             
                <div className="home_container__box_form__form__container__input_button">
                  <button className="" type="submit" role="button">
                    Save
                  </button>
                </div>  
              </div>
            </Form>
          )}  
          </Formik>
        </div>
       
    </div>
  )
}

export default Home;