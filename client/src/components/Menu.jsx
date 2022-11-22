import axios from 'axios';
import React from 'react';

const Menu = ({ cat }) => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/post/?cat=${cat}`);
        setPosts(data);
        console.log(`/post${cat}`);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cat]);
  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map((el) => (
        <div className='post' key={el.id}>
          <img src={`/upload/${el.img}`} alt='' />
          <h2>{el.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
