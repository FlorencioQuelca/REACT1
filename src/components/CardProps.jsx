import React from 'react'

const CardProps = ({props}) => {
 //console.log(props)
const objectColor={
    color:'#FFF',
    backgroundColor:props.color
}
  return (
    <div style={objectColor} >
    <h2 >{props.title}</h2>
    <ul >
        <li>{props.list[0]}</li>
        <li>{props.list[1]}</li>
        <li>{props.list[2]}</li>
        <li>{props.list[3]}</li>
    </ul>
    </div>
  )
}

export default CardProps