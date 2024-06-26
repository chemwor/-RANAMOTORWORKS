"use client"
import React, {Component, useRef} from 'react';
import {InlineWidget} from 'react-calendly'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   user_name: string;
   user_email: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

class Calendly extends Component {
    componentDidMount() {
        // whatever stuff you need here
    }
    componentWillUnmount() {
        // whatever cleanup stuff you need here
    }
    render(){
        return (
            <div>
                <InlineWidget url="https://calendly.com/username/15min" />
            </div>
        );
    }
}

const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = (data: FormData) => {
      if (form.current) {
         emailjs.sendForm('service_070078r', 'template_lojvsvb', form.current, 'mtLgOuG25NnIwGeKm')
            .then((result) => {
               const notify = () => toast('Message sent successfully', { position: 'top-center' });
               notify();
               reset();
               console.log(result.text);
            }, (error) => {
               console.log(error.text);
            });
      } else {
         console.error("Form reference is null");
      }
   };

   return (
       <form ref={form} onSubmit={handleSubmit(sendEmail)}>
           {/*<h3>Send Messaged</h3>*/}
           {/*<div className="messages"></div>*/}
           {/*<div className="row controls">*/}
           {/*   <div className="col-12">*/}
           {/*      <div className="input-group-meta form-group mb-30">*/}
           {/*         <label htmlFor="">Name*</label>*/}
           {/*         <input type="text" {...register("user_name")} name="user_name" placeholder="Your Name*" />*/}
           {/*         <p className="form_error">{errors.user_name?.message}</p>*/}
           {/*      </div>*/}
           {/*   </div>*/}
           {/*   <div className="col-12">*/}
           {/*      <div className="input-group-meta form-group mb-40">*/}
           {/*         <label htmlFor="">Email*</label>*/}
           {/*         <input type="email" {...register("user_email")} placeholder="Email Address*" name="user_email" />*/}
           {/*         <p className="form_error">{errors.user_email?.message}</p>*/}
           {/*      </div>*/}
           {/*   </div>*/}
           {/*   <div className="col-12">*/}
           {/*      <div className="input-group-meta form-group mb-35">*/}
           {/*         <textarea {...register("message")} placeholder="Your message*"></textarea>*/}
           {/*         <p className="form_error">{errors.message?.message}</p>*/}
           {/*      </div>*/}
           {/*   </div>*/}
           {/*   <div className="col-12">*/}
           {/*      <button type='submit' className="btn-nine text-uppercase rounded-3 fw-normal w-100">Send Message</button>*/}
           {/*   </div>*/}
           {/*</div>*/}
           {/*<iframe src="https://app.urable.com/form/7paJFikNwRT4EVV82GHz/NNTjwtuhy5lTjQe8gyxo" scrolling="no"*/}
           {/*         height="990px" width="100%"></iframe>*/}
           <InlineWidget url="https://calendly.com/nsingh-imiu" />
       </form>
   )
}

export default ContactForm
