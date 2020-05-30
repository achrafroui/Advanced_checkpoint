import React from 'react';
import PropTypes from 'prop-types';


const ProductTable = (props) =>

  { 
    const myStyle ={
      border : '2px solid black',
      backgroundColor: 'DodgerBlue',
      padding: '8px',
      textAlign: 'center'
    }
    const myStyle1 ={
      border : '2px solid black',
      backgroundColor: 'red',
      padding: '8px',
      textAlign: 'center'
    }
    return (
      <>
      <table style={{borderCollapse: 'collapse' }}>
        <tr >
          <th style={myStyle1}>Name</th>
          <th style={myStyle1}>Category</th>
          <th style={myStyle1}>Price</th>
        </tr>
        { props.product.map( (product,i) => (
          <tr key ={i}>
            <td style={myStyle}>{product.name}</td>
            <td style={myStyle}>{product.category}</td>
            <td style={myStyle}>{product.price}</td>
       
          </tr>
        )) }
      </table>
      </>
    );
        }
  
    ProductTable.propTypes = {
           name: PropTypes.string,
           price: PropTypes.number,
          category : PropTypes.oneOf(['clothes', 'electronics'])
   };
        
 export default ProductTable;