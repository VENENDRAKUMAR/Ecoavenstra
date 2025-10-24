import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://ecoavenstra-be.onrender.com/api/v1/admin/articles');
        const articles = response.data.articles;
        setBlogs(articles);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="w-full h-96 bg-gray-800 animate-pulse rounded-xl"></div>;
  }

  return (
    <div className=''>
      <div className='text-white text-3xl sm:text-5xl flex justify-center font-semibold pt-4 pb-10 sm:pb-20'>Our Blogs</div>
      <div className='flex flex-wrap justify-center'>
        {blogs.map(blog => (
          <div key={blog.id} className='max-w-md sm:max-w-lg lg:max-w-xl w-full md:w-4/5 flex flex-col rounded-xl mx-4 my-6 bg-[#1e1e1e] shadow-md'>
            <div className='img'>
              <img className='rounded-t-xl w-full h-64 object-cover' src={blog.coverImage} alt={blog.title} />
            </div>
            <div className='px-6 py-4 flex flex-col justify-between flex-1'>
              <div>
                <div className='text-xl font-bold text-white'>{blog.category}</div>
                <div className='text-lg font-semibold mt-2 text-gray-300'>{blog.title}</div>
              </div>
              <div className='text-gray-500 mt-4'>{blog.shortDescription}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='px-6 md:px-10 flex justify-center md:justify-end'>
        <button onClick={() => navigate("/blog")} className='text-white bg-[#1c3987] px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 hover:bg-blue-900 focus:outline-none'>
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
