import React from "react";

const Square = ({ value, index, handleSquareClick }) => {
  //destructuring props
  // const { value } = props; same as props.value
  // instead pass the destructered prop in the parenthesis
  const handleClick = () => {
    handleSquareClick(index)
  }
  return (
    <>
      <div className="square" onClick={handleClick}>
        {value}
      </div>
    </>
  )
}
export default Square;
