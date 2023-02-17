import React from 'react'

const Avatar = ({children,backgroundColor,cursor,color,px,py,borderRadius,fontSize,textDecoration}) => {
  const style={
    backgroundColor: backgroundColor,
    cursor: cursor || null,
    color: color || 'black',
    padding: `${px} ${py}`,
    textAlign: "center",
    borderRadius,
    fontSize,
    textDecoration: textDecoration || "none",
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
