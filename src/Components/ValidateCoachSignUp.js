

export default function ValidateCoachSignUp(value) {
  const err ={
    name:'',
    password:'',
    dob:'',
    gender:'',
    mobile:'',
    speciality:''
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
  
  if(value.dob==='')
  err.dob='Date of Birth is required'
  else if(age<20 || age>100)
  err.dob='Age should be between 20 and 100 years'

  if(value.gender==='')
  err.gender='Select your Gender'

  if(value.mobile==='')
  err.mobile='Mobile no. is required'
  else if(value.mobile.length!==10)
  err.mobile='Mobile no. should have 10 digits';

  if(value.speciality==='')
  err.speciality='Speciality is required';


  return err;
}
