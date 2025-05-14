import React from 'react';
import blogData from '../assets/blogs.json';

const LatestBlog = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest From Blog</h2>
          <p className="text-gray-600">
            Elevate your wardrobe with our freshest style tips, trends, and
            inspiration on our blog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogData.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-red-500 text-sm mb-2">{post.subtitle}</div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <div className="text-gray-500 text-sm">
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog; 