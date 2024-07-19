

export default function loginValidation(value) {
    const err ={
      id:'',
      password:'',

    }
  
    if(value.id==='')
    err.id='Id field is required'
  
    if(value.password==='')
    err.password='Password is required';
    
    return err;
  }
  