import {Form,Button,Checkbox,Input, Row,Col} from "antd";
import axios from "axios";
import uuid from "react-uuid";
import { Link, useNavigate } from "react-router-dom";

function Registerform() {

const navigate=useNavigate()
const onFinish=(values)=>{
    axios.post("http://localhost:4000/user",values).then(res=>console.log("Values has been posted")).catch(err=>console.log(err))
    navigate("/login")
	}
	const id=uuid()
	console.log(id)
  return (
    <>
    <Row>
      <Col span={10} offset = {7} > 

      <Form 
      autoComplete="off"
      labelCol={{span:10}} 
      wrapperCol={{span:14}}
	  onFinish={onFinish}
      >

      <Form.Item 
      name ="firstName" 
      label ="firstName"
      rules = {[
        {
          required:true,
          message:"Enter your first  name",
        },
        {whitespace:true},
        {min:3}

      ]}
       hasFeedback
       >
        <Input placeholder="Type your first name"/>
      </Form.Item>

      <Form.Item 
      name ="lastName" 
      label ="lastName" 
      rules = {[
        {
          required:true,
          message:"Enter your last  name",
        },
        {whitespace:true},

      ]}
      hasFeedback
      >
        <Input placeholder="Type your last name"/>
      </Form.Item>

      <Form.Item
       name ="email" 
       label ="email"
       rules = {[
        {
          required:true,
          message:"Enter your email",
        },
        {type:"email",message:"enter valid email"},
      ]}
        hasFeedback
        >
        <Input placeholder="Type your email"/>
      </Form.Item>

      <Form.Item 
      name ="password" 
      label ="password" 
      rules = {[
        {
          required:true,
        },
        {min:6},
        // {
        //   validator:(_,value)=>
        //   value && value.includes("A")
        //   ? Promise.resolve()
        //   :Promise.reject("password does not match the critria")
        // }

      ]}
      hasFeedback
      >
        <Input.Password placeholder="Type your password"/>
      </Form.Item>

      <Form.Item 
      name ="confirmpassword"
       label ="confirmpassword" 
       dependencies={['password']}
       rules = {[
        {
          required:true,
        },
        ({getFieldValue})=>({
          validator(_,value){
           if(!value|| getFieldValue('password')=== value){
            return Promise.resolve()
           } 
           return Promise.reject("Password did not match")
          }

        })
      ]}
       hasFeedback>
        <Input.Password placeholder="confirm your password"/>
      </Form.Item>

      <Form.Item 
      name ="agreement"
      wrapperCol={{span:24}}  
      valuePropName="checked"
      rules = {[
        {
          validator:(_,value)=>
          value
          ? Promise.resolve()
          :Promise.reject("plz click on check box")
        }
    
      ]}
      >
      
        <Checkbox > I agree with <a href ='a'>Terms and condition</a>
        </Checkbox>
      </Form.Item>
    
      <Form.Item  wrapperCol={{span:24}} >
        <Button block type ="primary" htmlType='submit'>
          Register
        </Button>
      </Form.Item>

      <Form.Item> 
        Already have an account ?
        <Link to="/login">signup</Link>
      </Form.Item>

      </Form>
      </Col>
    </Row>
    </>
  );
    }
export default Registerform;