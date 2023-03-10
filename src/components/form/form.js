// import React from 'react'
// import { useForm, ValidationError } from '@formspree/react';

// export default function Form() {
//   const [state, handleSubmit] = useForm("mpzerqww");
//   if (state.succeeded) {
//       return <p>Thank you!</p>;
//   }
//   return (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form></div>
//   );
// }
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

export default function Form() {
  const [state, handleSubmit] = useForm("mpzerqww");
  if (state.succeeded) {
      return <p>Thank you!</p>;
  }
  return (
    <div style={{height:'100vh'}}>
    <div style={{
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',

      fontFamily: 'Open Sans, sans-serif',
      marginBottom:'20px'
    }}>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'250px',
        padding: '20px',
        border: '3px solid black',
       // background:'#ADFF2F',
       background:'#E4E6F1',
        borderRadius:'5%'
      }}>
        <label htmlFor="email" style={{ marginBottom: '10px', fontWeight:'600' }}>
          Get in touch !
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="Your email address"
          style={{ width: '100%', marginBottom: '20px', border: '1px solid black' }}
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          style={{ width: '100%', height: '150px', marginBottom: '20px', resize:'none', border: '1px solid black' }}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} style={{ width: '100%', height:'30px' , background:'black', color:'white', fontWeight:'700'}}>
          Submit
        </button>
      </form></div>
      <p className='email'
          style={{
            textAlign: "center",
            margin:'0px'
          }}
        >
          <a href="mailto:vishvshahwork@gmail.com" style={{fontWeight:'1000' , color: "transparent",
              WebkitTextStroke: `2px #ADFF2F`}}>vishvshahwork@gmail.com</a>
          
        </p>
    </div>
  );
}
