import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const useAlert = (options = {}) => {
  const cfg = {
    position: 'bottom-left',
    theme: 'dark',
    ...options,
  }

  const alert = {
    info: (msg) => toast.info(msg, cfg),
    warn: (msg) => toast.warn(msg, cfg),
    success: (msg) => toast.success(msg, cfg),
    error: (msg) => toast.error(msg, cfg),
  }

  return { AlertContainer: ToastContainer, alert }
}
