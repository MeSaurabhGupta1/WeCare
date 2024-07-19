

export default function ValidateUserSignUp(value) {
    const err ={
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
    }
    const today = new Date();
    const birthDate = new Date(value.dob);
    const age = today.getFullYear() - birthDate.getFullYear();
  
    if(value.name==='')
    err.name='Name is required'
    else if(value.name.length<3 || value.name.length>50)
    err.name='Name should have 3 to 50 characters';
  
    if(value.password==='')
    err.password='Password is required';
    else if(value.password.length<3 || value.password.length>10)
    err.password='Password should have 3 to 10 characters';

    if(value.mobile==='')
    err.mobile='Mobile no. is required'
    else if(value.mobile.length!==10)
    err.mobile='Mobile no. should have 10 digits';

    if(value.email==='')
    err.email='Email is required'
    
    if(value.dob==='')
    err.dob='Date of Birth is required'
    else if(age<20 || age>100)
    err.dob='Age should be between 20 and 100 years'
  
    if(value.gender==='')
    err.gender='Select your Gender'
  
    if(value.pin==='')
    err.pin='Pin is required'
    else if(value.pin.length!==6)
    err.pin='Pin should be of 6 digits'
  
    if(value.city==='')
    err.city='City is required'
    else if(value.city.length<6 || value.city.length>20)
    err.city='City should have 6 to 20 characters';
  
    if(value.state==='')
    err.state='State is required'
    else if(value.state.length<6 || value.state.length>20)
    err.state='State should have 6 to 20 characters';

    if(value.country==='')
    err.country='Country is required'
    else if(value.country.length<6 || value.country.length>20)
    err.country='Country should have 6 to 20 characters';
  
    return err;
  }
  