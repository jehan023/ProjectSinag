// import { useState, useEffect, memo } from 'react';
// import axios from 'axios';

// async function UseFetch(sheetID) {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     try {
//         setLoading(true);
//         await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1yg8ET-05HTyTipGyvNVDZ1T3WuOBc1vNwwz4N8ifPRA/values/${sheetID}!A1:K`,
//             {
//                 params: {
//                     key: 'AIzaSyDfmsbf3ilW3D0fXotyabO1pFLX8CrsKws'
//                 }
//             }).then(response => {
//                 setData(response.data);
//             }).catch(error => {
//                 setError(error);
//             }).finally(() => {
//                 setLoading(false);
//             });
//     } catch (error) {
//         console.error(error);
//     }

//     return { data, loading, error };
// }

// export default memo(UseFetch);