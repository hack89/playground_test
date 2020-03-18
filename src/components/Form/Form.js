import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import './formStyle.scss'


const BannerWrapper = styled.div`
 
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    display: flex;
     height: 100%;
    box-sizing: border-box;
    @media(max-width: 1037px){
        flex-direction: column;
        
  }
 
`

const FormFields = styled.div`
    color: white;
    background: black;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        
    button {
        background: white;
        text-transform: uppercase;
        border: 2px solid white;
        padding: 10px 9px;
        color: black;
        width: 130px;
        
    }
    @media(max-width: 1037px){
        width: 100%;
        
  }
    
`

const ElementsText = styled.div`
    height: 20%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    h1 {
        font-size: 55px;
        line-height: .9;
        @media(max-width: 1037px){
            font-size: 45px;
            margin-top: 20px;
  }
    }
    p {
        font-size: 12px;
        line-height: 1.5;
        @media(max-width: 1037px){
            font-size: 10px;
        }
    }
`

const Address = styled.div`
    margin-top: 20px;
`

const BannerText = styled.div`
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    color: white;
    background: black;

    @media(max-width: 1037px){
        width: 100%;
  }
    
`

const SmallErrorMessage = styled.small`
   
    position: absolute;
    bottom: 0;
    left: 0;
    color: red;
    font-family: 'Gotham-Book';
`
const Form = ({id}) => {
    const [isValidMessage, setIsValidMessage] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [formData, setFormData] = useState(
        {   
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            emailError: '',
            messageError: ''
        }
    )

        useEffect(()=>{
            if(isSubmitting){
               
            if(isValid && isValidMessage ){
                setFormData({...formData, emailError: ''})
                setIsSubmitting(false)
                setIsValid(false)
                setIsValidMessage(false)
                alert('Message sent!')
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                    emailError: '',
                    messageError: ''
                })
            }
                 
            }
        },[isValid, isValidMessage, isSubmitting])
    
    const checkEmail = (input) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.trim())) {
           setIsValid(true)
        } else {
            setIsValid(false)
            setFormData({...formData, emailError: 'Invalid email'})
        }
    }

    const checkMessage = (input) => {
         
        if (input.trim().length > 0) {
            setIsValidMessage(true)
        } else {
            setIsValidMessage(false)
            setFormData({...formData, messageError: 'Message required'})
            setTimeout(()=>{
                setFormData({...formData, messageError: ''})
            },5000)
        }
    }


    const onChange =e=> {
        setFormData({...formData, [e.target.id]: e.target.value})
        
    }

    

    const onSubmit=e=> {
        e.preventDefault()
        checkEmail(formData.email)
        checkMessage(formData.message)
        setIsSubmitting(true)
    }

    

    return (
        <BannerWrapper id={id}>
            <BannerText>
                <ElementsText>
                <h1>contact <br/>us.</h1>
                <Address>
                <p>Playground srl </p>
                <p>Via G. Mazzini 3/C, </p>
                <p>Cernusco Sul Naviglio (Milano)</p>
                <p>-</p>
                <p>T +39 0240706003</p>
                </Address>
                </ElementsText>
            </BannerText>
            <FormFields>
                    <form id="form" className="form" onSubmit={onSubmit}>
                        <div className="names">
                        <div className="form-control">
                            <input type="text" id="firstName" onChange={e => onChange(e)} value={formData.firstName}  placeholder="name" />
                            
                        </div>
                        <div className="form-control">
                            <input type="text" onChange={e => onChange(e)} value={formData.lastName}  id="lastName" placeholder="last name" />
                            
                        </div>
                        </div>
                        <div className="form-control">
                            <input type="text" id="email" onChange={e => onChange(e)} value={formData.email} required placeholder="email" />
                            <SmallErrorMessage formData={formData} id='email_error'  isValid={isValid}>
                                 {formData.emailError}
                            </SmallErrorMessage>
                        </div>
                    
                        <div className="form-control">
                            <textarea type="text" id="message" value={formData.message} onChange={e => onChange(e)} required placeholder="message" />
                            <SmallErrorMessage id='message_error' formData={formData}>
                            {!formData.messageError ? '' : formData.messageError 

                            
                            }
                            </SmallErrorMessage>
                        </div>

                        <button className='button' type="submit">send <i className="fas fa-chevron-right"></i></button>
                    </form>
                 
            </FormFields>
        </BannerWrapper>
    )
}

export default Form
