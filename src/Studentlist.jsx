import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FavouriteListContext } from "./StudentContext";

function Studentlist() {
    const [studentList] = useState([
        { id: 1, name: 'Bharath' },
        { id: 2, name: 'Praveen' },
        { id: 3, name: 'Kumar' },
        { id: 4, name: 'Ramya' },
        { id: 5, name: 'Monica' },
    ]);

    const { favouriteStudentList, setFavouriteStudentList } = useContext(FavouriteListContext);
    const navigate = useNavigate();

    function addtoFavouritelist(student) {
        setFavouriteStudentList([...favouriteStudentList, student]);
       
    }

    const remainingStudents = studentList.filter(
        student => !favouriteStudentList.some(fav => fav.id === student.id)
    );

    return (
        <>

            {remainingStudents.map(student => (
                <div key={student.id} style={{ marginBottom: '10px' }}>
                    <span>{student.id}.{student.name}</span>
                    <button 
                        onClick={() => addtoFavouritelist(student)}
                        style={{
                            marginLeft:'100px',
                            padding: '15px',
                            backgroundColor: 'black',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            borderRadius:'20px'
                        }}
                    >
                        Add to Favourite
                    </button>
                </div>
            ))}
        </>
    );
}

export default Studentlist;
