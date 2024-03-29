import React, { useState } from 'react';
import './component.css';
import {Form, FormGroup, Label, Input} from 'reactstrap';

const AddCompany =(props) =>{
  const initialState = {company_name:'',
                        founding_year:'',
                        industry:'',
                        status:'',
                        annual:''}

  const[company, setCompany] = useState(initialState)

  const handleInputChange = event =>{
    const {name, value} = event.target
    setCompany({...company, [name]:value})
  }

  return(
    <Form
      onSubmit ={event=>{
        event.preventDefault();
        props.addCompany(company)
        setCompany(initialState)
      }}
      >
        <FormGroup>
          <Label> Company Name</Label>
          <Input type="text" name="company_name" value={company.company_name} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label>Founding Year </Label>
          <Input type="text" name="founding_year" value={company.founding_year} onChange={handleInputChange}/>
        </FormGroup>
        <FormGroup>
          <Label> Industry </Label>
          <Input type="text" name="industry" value={company.industry} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label> Status </Label>
          <Input type="select" name="status" value={company.status} onChange={handleInputChange}>
              <option> Researching</option>
              <option> Pending Approval </option>
              <option> Approved </option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label> Annual Revenue </Label>
          <Input type="text" name="annual" value={company.annual} onChange={handleInputChange} />
        </FormGroup>

      <button className="submitButton">Add new company</button>
    </Form>
  )
}

export default AddCompany;
