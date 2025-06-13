import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProfileCard from '../components/HomeDetails/ProfileCard/ProfileCard';
import NotFound from '../components/common/NotFound';
import Footer from '../components/common/Footer';

const FavoriteScreen = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const res = localStorage.getItem('fevorite');
    if (res) setData(JSON.parse(res));
  }, []);

  const handleNavigation = (item: any) => {
    navigate('/details', { state: { userData: item } });
  };

  const removeItem = async (item: any) => {
    const updatedData = data.filter((favItem: any) => favItem.id !== item.id);
    setData(updatedData);
    localStorage.setItem('fevorite', JSON.stringify(updatedData));
  };

  return (
    <>
      <Header isUserFullyOnboarded />
      {data.length > 0 ? (
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] lg:px-36  p-10 items-center justify-center">
            {data?.map((item: any, index) => {
              const fullName = `${item?.userDetails?.personalDetails?.firstName} ${item?.userDetails?.personalDetails?.middleName} ${item?.userDetails?.personalDetails?.lastName}`;
              return (
                <ProfileCard
                  key={item?.id}
                  dob={item?.userDetails?.personalDetails?.dateOfBirth}
                  city={item?.userDetails?.addressDetails?.city}
                  occupation={item?.userDetails?.basicDetails?.occupation}
                  photo={
                    item?.photoDetails?.profilePhoto ??
                    'https://bmd.gov.bd/file/img/nwp/notfound.png'
                  }
                  name={fullName}
                  onClick={() => handleNavigation(item)}
                  handleRemoveFromFavorite={() => removeItem(item)}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <NotFound
          image={require('../assets/Not Found.png')}
          label="Nothing in Fevorite"
        />
      )}
      <Footer />
    </>
  );
};

export default FavoriteScreen;
