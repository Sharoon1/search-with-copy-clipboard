import { toast } from "react-toastify";
window.notify = (msg, type) => {

    const options = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };
    switch (type) {
        case 'error':
            toast.error(msg, options);
            break;
        case 'success':
            toast.success(msg, options);
            break;
        case 'info':
            toast.info(msg, options)
            break;
        case 'warning':
            toast.warning(msg, options)
            break;
        default:
            toast(msg, options)
    }
}