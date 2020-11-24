import React from 'react'
import propTypes from 'prop-types'



 const Congrats = (props) => {
  
      if(props.succes){
       return(
         <div data-test='component-congrats'>
         <span data-test='congrats-message'>
           Congratulations! You Guessed the word!
          </span>
         </div>
       )
      }else{
      return(
      <div data-test='component-congrats'>
      <span data-test='congrats-message'></span>
      </div>
        )
      }
      
    }
        Congrats.propTypes= {
          succes : propTypes.bool.isRequired
        }    

export default Congrats