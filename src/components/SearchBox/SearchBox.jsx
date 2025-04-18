import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";


// export default function SearchBox({value, onSearch}){
//     return (
//         <div className={css.searchBox}>
//             <p className={css.searchTitle}>Find contacts by name</p>
//             <input className={css.searchInput} type ="text" value={value} onChange={(e) =>onSearch(e.target.value)}></input>
//         </div>
//     )
// }

// =================refactoring======================================
export default function SearchBox(){
    const dispatch = useDispatch();
    
    const filter = event => {
      dispatch(changeFilter(event.target.value));
    };
    return (
        <div className={css.searchBox}>
            <p className={css.searchTitle}>Find contacts by name</p>
            <input className={css.searchInput} type ="text" onChange={filter}></input>
        </div>
    )
}