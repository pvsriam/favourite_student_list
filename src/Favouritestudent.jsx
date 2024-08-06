import { useContext } from "react";
import { FavouriteListContext } from "./StudentContext";

function Favouritestudentlist() {
    const { favouriteStudentList, setFavouriteStudentList } = useContext(FavouriteListContext);

    function removeFromFavouritelist(id) {
        const updatedList = favouriteStudentList.filter(student => student.id !== id);
        setFavouriteStudentList(updatedList);
    }

    return (
        <>
            
            {favouriteStudentList.map(student => (
                <div key={student.id} style={{ marginBottom: '10px' }}>
                    <span style={{ marginRight: '10px' }}>{student.name}</span>
                    <button 
                        onClick={() => removeFromFavouritelist(student.id)}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: 'red',
                            color: 'black',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </>
    );
}

export default Favouritestudentlist;
