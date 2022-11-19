import React from 'react';
import { TbEdit } from 'react-icons/tb';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg'
          alt=''
        />

        <div className='user'>
          <div className='avatar'>
            <img
              src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg'
              alt=''
            />
          </div>
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`} className='edit_button buttons'>
              <TbEdit />
            </Link>
            <Link to={`/delete?edit=2`} className='delete_button buttons'>
              <AiOutlineDelete />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          laudantium accusantium commodi consectetur illo fuga dolorem iste
          perspiciatis. Ipsum ullam accusamus eos! Reprehenderit commodi
          sapiente ab magni velit provident ipsum. Veniam officiis vero
          consequuntur laboriosam dignissimos voluptate praesentium laborum
          delectus sint?
          <br />
          <br />
          Ipsa expedita, ea iure corporis adipisci quos explicabo tenetur
          nesciunt qui alias, repellendus id, laborum ut maiores enim fuga!
          Temporibus quo dolore sit ducimus, quae perferendis laborum
          dignissimos amet laboriosam saepe laudantium doloribus iure illo porro
          harum itaque alias repellendus quidem suscipit facilis veniam, at
          dicta! Aut, dignissimos nisi.
          <br />
          <br />
          Incidunt necessitatibus alias tempora commodi quo rerum dolores
          recusandae officiis expedita vitae autem optio ab molestiae assumenda
          dolorem, fugiat facilis repudiandae ut perspiciatis magni explicabo?
          Quod minima ut nobis officia! Sed, libero voluptatibus unde quibusdam
          aliquid ipsam nostrum consequuntur, nesciunt culpa soluta rerum
          ducimus quidem neque officiis voluptatum? Maiores error ipsa
          voluptatibus accusantium laudantium iste libero sed tempora esse non.
          Eos accusamus est illum et culpa. Consequatur velit eligendi autem
          sequi debitis aut possimus adipisci asperiores unde consectetur qui
          voluptatum, repellendus blanditiis quia earum distinctio placeat
          provident ab. Eius, aspernatur! Fuga expedita illum nulla?
          <br />
          <br />
          Inventore, provident unde dolorum facilis, temporibus ratione, sequi
          omnis vel repellat facere sit nemo non similique minima repellendus
          consequuntur voluptatem maxime earum! Velit ipsa numquam voluptatem!
          Animi voluptas nesciunt qui dignissimos. Tempore voluptates,
          voluptatem perspiciatis illo vero, rem adipisci molestias aliquid
          officiis veritatis accusantium, doloremque quasi itaque recusandae
          quo. Expedita iusto doloribus vel deserunt dignissimos fugiat!
        </p>
      </div>

      <Menu />
    </div>
  );
};

export default Single;
