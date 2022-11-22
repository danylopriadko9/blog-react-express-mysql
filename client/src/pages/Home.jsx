import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent;
};

const Home = () => {
  const cat = useLocation().search;
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/post${cat}`);
        setPosts(data);
        console.log(`/post${cat}`);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cat]);

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((el) => (
          <div className='post' key={el.id}>
            <div className='image'>
              <img src={`../upload/${el.img}`} alt='' />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${el.id}`}>
                <h1>{el.title}</h1>
              </Link>
              <p>{getText(el.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
