'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// 模拟书籍数据
const mockBooks = [
  { id: 1, title: '风水入门与应用', author: '张明', category: '基础入门', cover: '📚', rating: 4.8, reviews: 124 },
  { id: 2, title: '八宅明镜详解', author: '李华', category: '理论研究', cover: '📖', rating: 4.6, reviews: 98 },
  { id: 3, title: '现代家居风水布局', author: '王强', category: '家居应用', cover: '🏠', rating: 4.7, reviews: 156 },
  { id: 4, title: '阳宅三要通解', author: '刘芳', category: '经典解读', cover: '📜', rating: 4.9, reviews: 87 },
  { id: 5, title: '易经与风水实践', author: '赵伟', category: '理论研究', cover: '🔮', rating: 4.5, reviews: 103 },
  { id: 6, title: '办公室风水指南', author: '陈静', category: '职场应用', cover: '💼', rating: 4.4, reviews: 76 },
];

// 书籍分类
const categories = ['全部', '基础入门', '理论研究', '家居应用', '经典解读', '职场应用'];

export default function BooksPage() {
  const [books, setBooks] = useState(mockBooks);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(mockBooks);

  // 过滤书籍
  useEffect(() => {
    let result = mockBooks;
    
    // 按分类过滤
    if (selectedCategory !== '全部') {
      result = result.filter(book => book.category === selectedCategory);
    }
    
    // 按搜索词过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
      );
    }
    
    setFilteredBooks(result);
  }, [selectedCategory, searchQuery]);

  // 渲染星级评分
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="py-12 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">书籍资源</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            精选风水经典著作和现代应用指南，助您深入了解传统风水文化
          </p>
        </div>

        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="搜索书籍或作者..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 分类标签 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${selectedCategory === category ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 书籍列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Link href={`/books/${book.id}`} key={book.id} className="card overflow-hidden group">
                <div className="h-64 bg-primary/10 flex items-center justify-center">
                  <span className="text-8xl transition-transform duration-300 group-hover:scale-110">{book.cover}</span>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">
                    {book.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{book.author}</p>
                  <div className="flex justify-between items-center">
                    {renderRating(book.rating)}
                    <span className="text-gray-500 text-sm">({book.reviews} 条评价)</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-white rounded-xl">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">未找到相关书籍</h3>
              <p className="text-gray-600">请尝试调整搜索条件或分类</p>
            </div>
          )}
        </div>

        {/* 分页 */}
        {filteredBooks.length > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-flex rounded-md shadow">
              <button className="px-4 py-2 border border-gray-300 rounded-l-lg text-gray-600 bg-white hover:bg-gray-50">
                上一页
              </button>
              <button className="px-4 py-2 border-t border-b border-gray-300 text-primary bg-white hover:bg-gray-50 font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-r-lg text-gray-600 bg-white hover:bg-gray-50">
                下一页
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}