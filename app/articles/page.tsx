'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// 模拟文章数据
const mockArticles = [
  { id: 1, title: '八宅风水基础入门', category: '基础理论', excerpt: '了解传统八宅风水理论，掌握家居布局基本原则', date: '2025-01-15', views: 1245 },
  { id: 2, title: '2025年家居风水布局指南', category: '年度指南', excerpt: '新一年的风水布局建议，提升家居运势', date: '2025-01-10', views: 3421 },
  { id: 3, title: '办公室风水与事业发展', category: '职场应用', excerpt: '如何通过办公室布局提升工作效率和事业运', date: '2024-12-28', views: 2134 },
  { id: 4, title: '易经与风水的关系', category: '理论研究', excerpt: '深入探讨易经理论如何影响传统风水学说', date: '2024-12-20', views: 1876 },
  { id: 5, title: '五行相生相克原理', category: '基础理论', excerpt: '理解五行理论在风水中的应用', date: '2024-12-15', views: 2567 },
  { id: 6, title: '风水与现代科学', category: '现代应用', excerpt: '探讨传统风水理念与现代科学的结合点', date: '2024-12-10', views: 3210 },
];

// 文章分类
const categories = ['全部', '基础理论', '年度指南', '职场应用', '理论研究', '现代应用'];

export default function ArticlesPage() {
  const [articles, setArticles] = useState(mockArticles);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(mockArticles);

  // 过滤文章
  useEffect(() => {
    let result = mockArticles;
    
    // 按分类过滤
    if (selectedCategory !== '全部') {
      result = result.filter(article => article.category === selectedCategory);
    }
    
    // 按搜索词过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.excerpt.toLowerCase().includes(query)
      );
    }
    
    setFilteredArticles(result);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">风水知识</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            探索传统风水文化的奥秘，学习实用的风水技巧，提升生活品质
          </p>
        </div>

        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="搜索文章..."
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

        {/* 文章列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.id} className="card overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <span className="text-6xl">📝</span>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    <Link href={`/articles/${article.id}`}>{article.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-gray-500 text-sm">
                    <span>{article.date}</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {article.views}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-white rounded-xl">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">未找到相关文章</h3>
              <p className="text-gray-600">请尝试调整搜索条件或分类</p>
            </div>
          )}
        </div>

        {/* 分页 */}
        {filteredArticles.length > 0 && (
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