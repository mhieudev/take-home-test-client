interface ISquare {
  value?: string
  onClick?: () => void
}

export const Square = (props: ISquare) => {
  const { value, onClick } = props

  return (
    <div className="square" onClick={ onClick } >
      { value }
    </div>
  )
}