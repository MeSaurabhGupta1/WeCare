import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, {useState} from 'react';
import axios from 'axios';
import loginValidation from './loginValidation';
import user from '../images/user.jpg'
import { useNavigate } from 'react-router-dom'
export default function UserLogin() {
  const [data, setData] = useState({
    id:'',
    password:''
  })
  const [formErrors, setFormErrors] = useState({
    id:'',
    password:''
  })
  const[errorFlag, setErrorFlag] = useState(false)
  
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    let {name, value} = e.target;
    setData({...data, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    setFormErrors(loginValidation(data))
    let err = loginValidation(data)
    if(err.id==='' && err.password===''){
      console.log('shi hai');
      axios.get(`http://localhost:3000/users?id=${data.id}&password=${data.password}`)
      .then(response => {
        if(response.data.length){
          setData({
            id:'',
            password:''
          })
          navigate('/userhome')
        }
        else{
          setErrorFlag(true)
          setTimeout(() => setErrorFlag(false), 2000)
        }
      })
      .catch(err => {console.log(err)})
    }
  }
  return (
    <>  
       <Form onSubmit={handleSubmit} style={{width:'40%', margin:'5% auto', background:'black',padding:'10px'}}>
      <div style={{display:'flex', justifyContent:'center'}}>
      <img src={user} alt='user' style={{height:'30px', width:'30px'}} />
      <h3 style={{color:'white', textAlign:'center'}}>Login as User</h3>
      </div>
      <Row style={{margin:'5px 3px'}}>
        
          <Form.Control type='text' placeholder='UserId' id='id' name='id' value={data.id} onChange={(e) => {handleChange(e); console.log('hello')}} />
          {formErrors.id && <p style={{color:'red'}}>{formErrors.id}</p>}
        
      </Row>
      <Row style={{margin:'5px 3px'}}>

          <Form.Control type='password' placeholder='password' id='password' name='password' value={data.password} onChange={handleChange}/>
          {formErrors.password && <p style={{color:'red'}}>{formErrors.password}</p>}
          {errorFlag && <p style={{color:'red'}}>Enter valid credentials</p>}
      </Row>
   

      <Button className='btn btn-primary' type="submit" style={{width:'100%',marginTop:'20px'}}>
        Submit
      </Button>
    </Form>
    </>
  )
}
