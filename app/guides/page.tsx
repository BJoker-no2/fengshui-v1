'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// 模拟指南数据
const mockGuides = [
  { id: 1, title: '客厅风水布局全攻略', category: '家居风水', excerpt: '客厅是家庭活动中心，合理的风水布局能提升家人运势', image: '🏠', difficulty: '初级', readTime: '10分钟' },
  { id: 2, title: '办公室招财风水布置', category: '办公风水', excerpt: '如何通过办公室布局提升财运和事业运', image: '💼', difficulty: '中级', readTime: '15分钟' },
  { id: 3, title: '卧室风水与健康睡眠', category: '家居风水', excerpt: '改善卧室风水，提高睡眠质量，增进健康', image: '🛏️', difficulty: '初级', readTime: '8分钟' },
  { id: 4, title: '厨房风水安全指南', category: '家居风水', excerpt: '厨房布局的风水禁忌与化解方法', image: '🍳', difficulty: '中级', readTime: '12分钟' },
  { id: 5, title: '店铺风水旺财布局', category: '商业风水', excerpt: '提升店铺财运的风水布局技巧', image: '🏪', difficulty: '高级', readTime: '20分钟' },
  { id: 6, title: '书房风水与学业事业', category: '家居风水', excerpt: '优化书房环境，提高学习和工作效率', image: '📚', difficulty: '初级', readTime: '10分钟' },
];

// 指南分类
const categories = ['全部', '家居风水', '办公风水', '商业风水'];

// 难度等级
const difficultyLevels = ['全部', '初级', '中级', '高级'];

export default function GuidesPage() {
  const [guides, setGuides] = useState(mockGuides);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedDifficulty, setSelectedDifficulty] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGuides, setFilteredGuides] = useState(mockGuides);

  // 过滤指南
  useEffect(() => {
    let result = mockGuides;
    
    // 按分类过滤
    if (selectedCategory !== '全部') {
      result = result.filter(guide => guide.category === selectedCategory);
    }
    
    // 按难度过滤
    if (selectedDifficulty !== '全部') {
      result = result.filter(guide => guide.difficulty === selectedDifficulty);
    }
    
    // 按搜索词过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(guide => 
        guide.title.toLowerCase().includes(query) || 
        guide.excerpt.toLowerCase().includes(query)
      );
    }
    
    setFilteredGuides(result);
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  return (
    <div className="py-12 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">风水指南</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            实用的家居、办公和商业风水指南，帮助您改善环境，提升运势
          </p>
        </div>

        {/* 搜索和筛选 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="搜索指南..."
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
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                {difficultyLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
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

        {/* 难度标签 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {difficultyLevels.filter(level => level !== '全部').map((level) => (
            <button
              key={level}
              onClick={() => setSelectedDifficulty(level)}
              className={`px-4 py-2 rounded-full text-sm ${selectedDifficulty === level ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* 指南列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide) => (
              <Link href={`/guides/${guide.id}`} key={guide.id} className="card overflow-hidden group">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <span className="text-8xl transition-transform duration-300 group-hover:scale-110">{guide.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                      {guide.category}
                    </div>
                    <div className={`inline-block text-xs px-2 py-1 rounded-full ${guide.difficulty === '初级' ? 'bg-green-100 text-green-800' : guide.difficulty === '中级' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {guide.difficulty}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{guide.excerpt}</p>
                  <div className="flex justify-between items-center text-gray-500 text-sm">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {guide.readTime}
                    </span>
                    <span className="flex items-center">
                      阅读全文
                      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-white rounded-xl">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">未找到相关指南</h3>
              <p className="text-gray-600">请尝试调整搜索条件或筛选器</p>
            </div>
          )}
        </div>

        {/* 分页 */}
        {filteredGuides.length > 0 && (
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