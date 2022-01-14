// import { useSelector } from 'react-redux';
import { Container } from "react-bootstrap";

 
const List = () => {
    const flat = [1, 2, 3, 4];
    const bedroom = ['sevilla', 'cartuja', 'país vasco', 'granda'];
    const bathroom = [1, 2, 2, 1];
    const equiped = ['yes', 'no', 'no', 'yes'];

    return (
        <Container>
            <p>List</p> 
            <ul>
                {flat.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>{item}</p>
                            <p>{bedroom[index]}</p>
                            <p>{bathroom[index]}</p>
                            <p>{equiped[index]}</p>
                        </li>
                    )
                })}
            </ul>
        </Container>
      );
}
    // const state = useSelector((state) => state.reducer);

//     return (
//         <Container>
//         <p>Results</p>
//             {state.values.map(
//                 ({
//                     bedroom,
//                     bathrooms,
//                     equipment,
//                 }) => {
//                 return (
//                 (
//                          <div>
//                             <p>{state}</p>
//                             <p>{bathrooms}</p>
//                             <p>{equipment}</p>
//                         </div>
//                 )
//             )})}
//         </Container>
//     )
// }

export default List;