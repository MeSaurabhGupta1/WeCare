import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import coach from '../images/coach.jpg'
import ValidateCoachSignUp from './ValidateCoachSignUp';
export default function CoachSignUp() {
const[data, setData] = useState({
  name:'',
  password:'',
  dob:'',
  gender:'',
  mobile:'',
  speciality:''
})
const[formErrors, setFormErrors] = useState({
  name:'',
  password:'',
  dob:'',
  gender:'',
  mobile:'',
  speciality:''
})
const[record, setRecord] = useState()
//const[flag, setFlag] = useState(false)
const handleChange = (e) => {
  let {name, value} = e.target;
  setData({...data,[name]:value})
}
const navigate = useNavigate()
const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(ValidateCoachSignUp(data))
  let err = ValidateCoachSignUp(data)
  if(err.name==='' && err.password==='' && err.dob==='' && err.gender==='' && err.mobile==='' && err.speciality==='' ){
      axios.post('http://localhost:3000/coaches', data)
      .then(response => { setRecord(response.data)
          setData({
            name:'',
            password:'',
            dob:'',
            gender:'',
            mobile:'',
            speciality:''
              })
              console.log(response.data)
              //setFlag(true);
              e.target.reset();
              //setTimeout(() => {setFlag(false)}, 3000);
      })
      .catch(err => console.log(err))
    }
}

  return (
    <>
    {record ? <div>
      
      <img src={coach} alt='coach' style={{display:'block', marginLeft:'auto', marginRight:'auto', marginTop:'30px', height:'200px', width:'200px'}}/>
      <h2 style={{textAlign:'center', marginTop:'20px'}}>You are a certified user now!</h2>
      <h4 style={{textAlign:'center'}}>Your user id is: {record.id}</h4>
      <Button variant="primary" style={{display:'block', marginLeft:'auto', marginRight:'auto', marginTop:'10px',  width:'120px'}} onClick={() => navigate('/coachLogin')}>Login Now</Button>
    </div> :
      <Form style={{width:'70%', margin:'5% auto', background:'black',padding:'10px'}} onSubmit={handleSubmit}>
      <div style={{display:'flex', justifyContent:'center'}}>
      <img src={coach} alt='coach ' style={{height:'30px', width:'30px'}} />
      <h3 style={{color:'white', textAlign:'center'}}>User Profile</h3>
      </div>
      <Row style={{margin:'5px 3px'}}>
        <Col>
        <label htmlFor='name' style={{color:'white', fontSize:'20px'}}>Name</label>
          <Form.Control type='text' onChange={handleChange} id='name' name='name' value={data.name} />
          {formErrors.name && <p style={{color:'red'}}>{formErrors.name}</p>}
        </Col>
        <Col>
        <label htmlFor='password' style={{color:'white', fontSize:'20px'}}>Password</label>
          <Form.Control type='password' onChange={handleChange} id='password' name='password' value={data.password}/>
          {formErrors.password && <p style={{color:'red'}}>{formErrors.password}</p>}
          {console.log(formErrors.password)}
        </Col>
      </Row>
      <Row style={{margin:'5px 3px'}}>
        <Col>
        <label htmlFor='dob' style={{color:'white', fontSize:'20px'}}>Date of Birth</label>
          <Form.Control type='date' onChange={handleChange} id='dob' name='dob' value={data.dob}/>
          {formErrors.dob && <p style={{color:'red'}}>{formErrors.dob}</p>}
        </Col>
        <Col>
        <label htmlFor='gender' style={{color:'white', fontSize:'20px'}}>Gender</label><br/>
          <Form.Check type='radio' onChange={handleChange} checked={data.gender==='M'} label='Male' inline style={{color: 'white'}} id='male' name='gender' value='M'/>
          <Form.Check type='radio' onChange={handleChange} checked={data.gender==='F'} label='Female' inline style={{color:'white'}} id='female' name='gender' value='F'/>
          {formErrors.gender && <p style={{color:'red'}}>{formErrors.gender}</p>}
        </Col>
      </Row>
      <Row style={{margin:'5px 3px'}}>
        <Col>
        <label htmlFor='mobile' style={{color:'white', fontSize:'20px'}}>Mobile No.</label>
          <Form.Control type='text' onChange={handleChange} id='mobile' name='mobile' value={data.mobile}/>
          {formErrors.mobile && <p style={{color:'red'}}>{formErrors.mobile}</p>}
        </Col>
        <Col>
        <label htmlFor='speciality' style={{color:'white', fontSize:'20px'}}>Speciality</label>
          <Form.Control type='text' onChange={handleChange} id='speciality' name='speciality' value={data.speciality}/>
          {formErrors.speciality && <p style={{color:'red'}}>{formErrors.speciality}</p>}
        </Col>
      </Row>

      <Button className='btn btn-success' type="submit" style={{width:'100%'}}>
        Submit
      </Button>
    </Form>
     }
    
    </>
  );
}

