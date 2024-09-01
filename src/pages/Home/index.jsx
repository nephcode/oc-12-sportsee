import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByUserId } from '../../utils/apiHandler';

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserByUserId(id);
      setUser(data);
    };

    fetchUser();
  }, [id]);
  return (
    <>
      <div>{id}</div>
      <div>{user?.firstName}</div>
    </>
  );
};

export default Profile;
