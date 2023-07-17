import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastAlert(message, type) {
  switch (type) {
    case type === 'success':
      toast.success(message);
      break;

    case type === 'error':
      toast.error(message);
      break;

    case type === 'info':
      toast.info(message);
      break;

    case type === 'warn':
      toast.warn(message);
      break;

    default:
      toast(message);
      break;
  }
}
