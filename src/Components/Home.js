import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import user from '../images/user.jpg'
import coach from '../images/coach.jpg'
import { useNavigate, Link } from 'react-router-dom';
export default function Home() {
  
    const navigate = useNavigate();
  return (
    <div style={{background:'grey', height:'100%'}}>
        <h3 style={{textAlign:'center', padding:'5px'}}> we care. Health is our top priority.</h3>
        {/* <Button variant="primary" style={{width:'100%', margin:'5px'}} onClick={() => navigate('/searchWal')}>Search</Button> */}
       <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '444px'}}>
       <Card style={{ width: '18rem', margin:'15px', background:'black' }}>
      <Card.Img variant="top" src={coach} />
      <Card.Body>
        <Button variant="primary" style={{width:'100%', margin:'5px'}} onClick={() => navigate('/coachLogin')}>Login</Button>
        <Button variant="primary" style={{width:'100%', margin:'5px'}} onClick={() => navigate('/coachSignUp')}>Register</Button>
        {/* <span style={{color: 'white', display: 'block', textAlign: 'center', fontSize: '8px', marginTop: '12px'}}>Don't have an account?</span>
        <span style={{color: 'white', display: 'block', textAlign: 'center', fontSize: '12px'}}>Click here to &nbsp; 
          <Link to = './CoachSignUp'>register...</Link></span>   */}
             </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin:'15px', background:'black' }}>
      <Card.Img variant="top" src={user} />
      <Card.Body>
        <Button variant="primary" style={{width:'100%', margin:'5px'}} onClick={() => navigate('/userLogin')}>Login as User</Button>
        <Button variant="primary" style={{width:'100%', margin:'5px'}} onClick={() => navigate('/userSignUp')}>Register as User</Button>
      </Card.Body>
    </Card>
       </div>

       {/* <button onClick={() => {navigate("/TableComponent/")}}>Button</button>
       <button onClick={() => {navigate("/table/")}}>Button</button>
       <button onClick={() => {navigate("/atc/")}}>Atc</button> */}
    </div>
  )
}
