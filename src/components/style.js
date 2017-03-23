export const labelStyle = {
  textAlign: 'left',
  margin: '10px',
  fontWeight: 'bold',
  paddingLeft: '20px'
}

export const textBoxStyle = (validEmail) => {
  return {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: validEmail !== false ? '1px solid #ccc' : validEmail === false && '1px solid #D43939',
    borderRadius: '4px',
    boxSizing: 'border-box',
  }
}
