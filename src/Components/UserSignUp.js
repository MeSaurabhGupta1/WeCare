import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, {useState} from 'react';
import user from '../images/user.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import ValidateUserSignUp from './ValidateUserSignUp';

export default function UserSignUp() {
    const navigate = useNavigate()
    const [data1, setData1] = useState({
      name:'',
      password:'',
      mobile:'',
      email:'',
      dob:'',
      gender:'',
      pin:'',
      city:'',
      state:'',
      country:''
    })
    const [formErrors, setFormErrors] = useState({
      name:'',
      password:'',
      mobile:'',
      email:'',
      dob:'',
      gender:'',
      pin:'',
      city:'',
      state:'',
      country:''
    })
    const[record, setRecord] = useState()
    const handleChange = (e) => {
      let {name, value} = e.target;
      setData1({...data1, [name]:value})
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(ValidateUserSignUp(data1))
      let err = ValidateUserSignUp(data1)
      if(err.name==='' && err.password==='' && err.mobile==='' && err.email==='' && err.dob==='' && 
        err.gender==='' && err.pin==='' && err.city==='' && err.state==='' && err.country==='' ){
        axios.post('http://localhost:3000/users', data1)
      .then(response => { setRecord(response.data)
          setData1({
            name:'',
            password:'',
            mobile:'',
            email:'',
            dob:'',
            gender:'',
            pin:'',
            city:'', 
            state:'', 
            country:''
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
      {record ? 
      <div><img src={user} alt='coach' style={{display:'block', marginLeft:'auto', marginRight:'auto', marginTop:'30px', height:'200px', width:'200px'}}/>
      <h2 style={{textAlign:'center', marginTop:'20px'}}>Account created successfully!</h2>
      <h4 style={{textAlign:'center'}}>Your User id is: {record.id}</h4>
      <Button variant="primary" style={{display:'block', marginLeft:'auto', marginRight:'auto', marginTop:'10px',  width:'120px'}} onClick={() => navigate('/userLogin')}>Login Now</Button>
      </div> :
      <Form onSubmit={handleSubmit} style={{width:'70%', margin:'5% auto', background:'black',padding:'10px'}}>
      <div style={{display:'flex', justifyContent:'center'}}>
      <img src={user} alt='coach' style={{height:'30px', width:'30px'}} />
      <h3 style={{color:'white', textAlign:'center'}} >User Profile</h3>
      </div>
      <Row style={{margin:'5px 3px'}}>
        <Col>
        <label htmlFor='name' style={{color:'white', fontSize:'20px'}}>Name</label>
          <Form.Control type='text' id='name' name='name' value={data1.name} onChange={handleChange}/>
          {formErrors.name && <p style={{color:'red'}}>{formErrors.name}</p>}
        </Col>
        <Col>
        <label htmlFor='password' style={{color:'white', fontSize:'20px'}}>Password</label>
          <Form.Control type='password' id='password' name='password' value={data1.password} onChange={handleChange}/>
          {formErrors.password && <p style={{color:'red'}}>{formErrors.password}</p>}
        </Col>
      </Row>
      <Row style={{margin:'5px 3px'}}>
        <Col>
        <label htmlFor='mobile' style={{color:'white', fontSize:'20px'}}>Moblile No.</label>
          <Form.Control type='text' id='mobile' name='mobile' value={data1.mobile} onChange={handleChange}/>
          {formErrors.mobile && <p style={{color:'red'}}>{formErrors.mobile}</p>}
        </Col>
        <Col>
        <label htmlFor='email' style={{color:'white', fontSize:'20px'}}>Email</label><br/>
        <Form.Control type='email' id='email' name='email' value={data1.email} onChange={handleChange}/>
        {formErrors.email && <p style={{color:'red'}}>{formErrors.email}</p>}
        </Col>
      </Row>
      <Row style={{margin:'5px 3px'}}>
        <Col>
        <label htmlFor='dob' style={{color:'white', fontSize:'20px'}}>Date of Birth</label>
          <Form.Control type='date' id='dob' name='dob' value={data1.dob} onChange={handleChange}/>
          {formErrors.dob && <p style={{color:'red'}}>{formErrors.dob}</p>}
        </Col>
        <Col>
        <label htmlFor='gender' style={{color:'white', fontSize:'20px'}}>Gender</label><br/>
          <Form.Check type='radio' checked={data1.gender==='M'} label='Male' inline style={{color: 'white'}} id='male' name='gender' value='M' onChange={handleChange}/>
          <Form.Check type='radio' checked={data1.gender==='F'} label='Female' inline style={{color:'white'}} id='female' name='gender' value='F' onChange={handleChange}/>
          {formErrors.gender && <p style={{color:'red'}}>{formErrors.gender}</p>}
        </Col>
      </Row>
      <Row style={{margin:'5px 3px'}}>
        <Col>
        <label htmlFor='pin' style={{color:'white', fontSize:'20px'}}>Pin Code</label>
          <Form.Control type='text' id='pin' name='pin' value={data1.pin} onChange={handleChange}/>
          {formErrors.pin && <p style={{color:'red'}}>{formErrors.pin}</p>}
        </Col>
        <Col>
        <label htmlFor='city' style={{color:'white', fontSize:'20px'}}>City</label>
          <Form.Control type='text' id='city' name='city' value={data1.city} onChange={handleChange}/>
          {formErrors.city && <p style={{color:'red'}}>{formErrors.city}</p>}
        </Col>
      </Row>
      <Row style={{margin:'5px 3px'}}>
        <Col>
        <label htmlFor='state' style={{color:'white', fontSize:'20px'}}>State</label>
          <Form.Control type='text' id='state' name='state' value={data1.state} onChange={handleChange}/>
          {formErrors.state && <p style={{color:'red'}}>{formErrors.state}</p>}
        </Col>
        <Col>
        <label htmlFor='country' style={{color:'white', fontSize:'20px'}}>Country</label>
          <Form.Control type='text' id='country' name='country' value={data1.country} onChange={handleChange}/>
          {formErrors.country && <p style={{color:'red'}}>{formErrors.country}</p>}
        </Col>
      </Row>
      <Button className='btn btn-success' type="submit" style={{width:'100%'}}>
        Submit
      </Button>
    </Form>
      }
         
    </>
  )
}
