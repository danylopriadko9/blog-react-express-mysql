import React from 'react';
import { TbEdit } from 'react-icons/tb';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import '../style.scss';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent;
};

const Single = () => {
  const location = useLocation();
  const postId = location.pathname.split('/')[2];
  const [post, setPost] = React.useState([]);
  const navigate = useNavigate();

  const { currentUser } = React.useContext(AuthContext);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/post/${postId}`);
        setPost(data);
        console.log(`/post/${location}`);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [postId]);

  const deletePost = async () => {
    try {
      await axios.delete(`/post/${postId}`);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='single'>
      <div className='content'>
        <div className='image-container'>
          <img src={`../upload/${post?.img}`} alt='' />
        </div>

        <div className='user'>
          <div className='avatar'>
            <img src={post?.userImg} alt='' />
          </div>
          <div className='info'>
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className='edit'>
              <Link
                to={`/write?edit=2`}
                className='edit_button buttons'
                state={post}
              >
                <TbEdit />
              </Link>

              <div onClick={deletePost} className='delete_button buttons'>
                <AiOutlineDelete />
              </div>
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        {getText(post?.desc)}
      </div>

      <Menu cat={post?.cat} />
    </div>
  );
};

export default Single;
