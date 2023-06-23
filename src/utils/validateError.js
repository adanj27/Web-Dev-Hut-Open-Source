const ERRORS = {
  ERR_NETWORK: 'No se pudo realizar la solicitud, intente de nuevo más tarde',
  ERR_BAD_REQUEST:
    'No se pudo realizar la solicitud, intente de nuevo más tarde',
}

const defaultError = 'Ocurrió un error desconocido'

export const validateError = (err) => ERRORS[err] || defaultError
