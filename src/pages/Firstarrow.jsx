import firstarrow from '../assets/icons/firstarrow.svg'
import secondarrow from '../assets/icons/secondarrow.svg'
import thirdarrow from '../assets/icons/thirdarrow.svg'

export const Firstsvg = ({ visible, onClose }) => {
  const handleOnClose = () => {
    onClose()
  }
  if (!visible) return null
  //Pasamos dos valores como props al componente Frontpage y validamos en condicional si es true lo vuelve visible, por ende se retorna vacio

  return (
    <>
      <div className="absolute bg-opacity-60 backdrop-blur-sm inset-0 hover:cursor-pointer "></div>
      <img
        src={firstarrow}
        onClick={handleOnClose}
        className="absolute left-[48.5em] pt-4"
      />
    </>
  )
}

export const Secondsvg = ({ visibleone, onCloseOne }) => {
  const handleOnCloseOne = () => {
    onCloseOne()
  }
  if (!visibleone) return null
  //Pasamos dos valores como props al componente Frontpage y validamos en condicional si es true lo vuelve visible, por ende se retorna vacio

  return (
    <>
      <div className="absolute bg-opacity-60 backdrop-blur-sm inset-0 hover:cursor-pointer "></div>
      <img
        src={secondarrow}
        onClick={handleOnCloseOne}
        className="absolute left-[9.5em] pt-[11.5em]"
      />
    </>
  )
}

export const Thirdsvg = ({ visiblethird, onCloseThird }) => {
  const handleOnCloseThird = () => {
    onCloseThird()
  }
  if (!visiblethird) return null
  //Pasamos dos valores como props al componente Frontpage y validamos en condicional si es true lo vuelve visible, por ende se retorna vacio

  return (
    <>
      <div className="absolute bg-opacity-60 backdrop-blur-sm inset-0 hover:cursor-pointer "></div>
      <img
        src={thirdarrow}
        onClick={handleOnCloseThird}
        className="absolute left-[48.9em] pt-[17.9em]"
      />
    </>
  )
}
