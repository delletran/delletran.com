// import { useEffect, useRef, useState } from 'react';
// import styles from '@/styles/Admin.module.scss'
// import { setAlert, selectEagles } from '@/features/eagles/eagles-slice'
// import { useAppSelector, useAppDispatch } from '@/services/hooks'

// import { AlertTitle, Alert, Stack } from '@mui/material';

// function AlertMessage() {
//   const { alert: { title, message, highlight, type } } = useAppSelector(selectEagles)
//   const dispatch = useAppDispatch()
//   const timer: any = useRef();
//   const [showAlert, setShowAlert] = useState(false)

//   useEffect(() => {
//     if (message) {
//       setShowAlert(true);
//       clearTimeout(timer.current);
//       timer.current = setTimeout(() => {
//         setShowAlert(false);
//       }, 5000);
//       timer.current = setTimeout(() => {
//         // dispatch(setAlert({}));
//       }, 5500);
//     }
//   }, [message]);

//   return ( showAlert
//     ? ( <Stack sx={{ width: '100%' }} spacing={2} className={styles.alert_container}>
//           <Alert severity={type}>
//             {title && <AlertTitle>{title}</AlertTitle>}
//             {message}<strong>{highlight ? ` - ${highlight}` : ''}</strong>
//           </Alert>
//         </Stack> )
//     : null
//   );
// }

// export default AlertMessage
