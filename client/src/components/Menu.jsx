import React from 'react';

const Menu = () => {
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
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map((el) => (
        <div className='post' key={el.id}>
          <img src={el.img} alt='' />
          <h2>{el.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
