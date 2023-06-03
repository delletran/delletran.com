// // 01EAVGP763BY2SM8699WA5P9MW
// import { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Alert } from '@material-ui/lab';
// import { setFlashMessage } from 'redux/app/actions';
// import { selectFlashMessage } from 'redux/app/selectors';

// function AlertMessage() {
//   const timer = useRef();
//   const dispatch = useDispatch();
//   const { status, message } = useSelector(selectFlashMessage);
//   const [showAlert, setShowAlert] = useState(true);

//   useEffect(() => {
//     if (message) {
//       setShowAlert(true);
//       clearTimeout(timer.current);
//       timer.current = setTimeout(() => {
//         setShowAlert(false);
//       }, 5000);
//       timer.current = setTimeout(() => {
//         dispatch(setFlashMessage({}));
//       }, 5500);
//     }
//   }, [message]);

//   if (!status || !message) {
//     return (
//       <div className="alert-wrapper">
//         <Alert severity={status}>{message}</Alert>
//       </div>
//     );
//   }

//   return (
//     <div className={`alert-wrapper ${showAlert ? 'show' : ''}`}>
//       <Alert severity={status}>{message}</Alert>
//     </div>
//   );
// }

// export default AlertMessage;