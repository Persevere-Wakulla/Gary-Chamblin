
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../layout/RootLayout';
import { useContext } from 'react';
import BackButton from '../components/BackButton';

const DeleteAccount = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext)

    const handleDeleteUser = () => {
        confirm('Are you sure you wish to delete this Account')
        alert('Account Deleted!')

        const deleteUser = async () => {
            await fetch(`http://localhost:3000/users/${user._id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: "cors"
            }).then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })
        }
        deleteUser();
        setUser('')
        navigate('/')
    }
    return (
        <div className="text-center">
            <h1>Delete Account</h1>
            <BackButton />
                <h3>Are you sure you want to delete this account?</h3>
            <div className="d-flex justify-content-center gap-2">

                <NavLink onClick={handleDeleteUser} className="bg-danger w-25 rounded-4 p-2 fs-4 text-black">Yes</NavLink>
               <NavLink to='/account' className='fs-4 text-black bg-primary w-25 rounded-4 p-2'>No</NavLink>
            </div>
        </div>
    )
}

export default DeleteAccount