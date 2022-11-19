import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. cor',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi porro accusamus, enim eius laborum ipsum at tenetur perspiciatis minus quia maxime hic est dolores error sed dignissimos eaque ipsam deleniti.
      Numquam perspiciatis eaque ipsam exercitationem quis! Accusamus laudantium repellendus veritatis eos reprehenderit accusantium numquam, similique tempore perspiciatis. Ratione error ad eveniet, laborum fugiat minus saepe, ex quia quis cum et.`,
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi porro accusamus, enim eius laborum ipsum at tenetur perspiciatis minus quia maxime hic est dolores error sed dignissimos eaque ipsam deleniti.
      Numquam perspiciatis eaque ipsam exercitationem quis! Accusamus laudantium repellendus veritatis eos reprehenderit accusantium numquam, similique tempore perspiciatis. Ratione error ad eveniet, laborum fugiat minus saepe, ex quia quis cum et.`,
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi porro accusamus, enim eius laborum ipsum at tenetur perspiciatis minus quia maxime hic est dolores error sed dignissimos eaque ipsam deleniti.
      Numquam perspiciatis eaque ipsam exercitationem quis! Accusamus laudantium repellendus veritatis eos reprehenderit accusantium numquam, similique tempore perspiciatis. Ratione error ad eveniet, laborum fugiat minus saepe, ex quia quis cum et.`,
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi porro accusamus, enim eius laborum ipsum at tenetur perspiciatis minus quia maxime hic est dolores error sed dignissimos eaque ipsam deleniti.
      Numquam perspiciatis eaque ipsam exercitationem quis! Accusamus laudantium repellendus veritatis eos reprehenderit accusantium numquam, similique tempore perspiciatis. Ratione error ad eveniet, laborum fugiat minus saepe, ex quia quis cum et.`,
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg',
    },
  ];
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((el) => (
          <div className='post' key={el.id}>
            <div className='image'>
              <img src={el.img} alt='' />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${el.id}`}>
                <h1>{el.title}</h1>
              </Link>
              <p>{el.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
