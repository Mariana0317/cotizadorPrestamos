import React, { Fragment } from 'react';


//el codigo que va aqui en la llave puedo colocar codigo estandar de javascript


//el codigo que va dentro del return es lo que se va a renderizar
   

const Header = (props) => {


    return  ( 
        <Fragment>
          <h1>{props.titulo} </h1>  
         
          
          
          </Fragment>
           );
}
 

 export default Header;