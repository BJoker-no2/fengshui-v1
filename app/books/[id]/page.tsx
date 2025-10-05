import React from 'react';
import { useParams, notFound } from 'next/navigation';

// 模拟书籍详情数据
const mockBookDetail = {
  id: 1,
  title: '风水入门与应用',
  author: '张明',
  category: '基础入门',
  cover: '📚',
  rating: 4.8,
  reviews: 124,
  publishDate: '2024-01-15',
  pages: 320,
  description: '这是一本全面介绍风水基础知识和实践应用的入门级书籍。作者张明结合多年风水研究经验，用通俗易懂的语言讲解复杂的风水理论，同时提供丰富的实例和案例分析，帮助读者轻松掌握家居、办公等环境的风水布局技巧。',
  authorBio: '张明，知名风水师，从事风水研究和实践工作二十余年，曾为众多知名企业和家庭提供风水咨询服务。出版过多部风水专著，在业界享有盛誉。',
  tableOfContents: [
    '第一章：风水概述',
    '第二章：五行理论基础',
    '第三章：八卦与方位',
    '第四章：住宅风水基本要素',
    '第五章：客厅风水布局',
    '第六章：卧室风水要点',
    '第七章：厨房与卫生间风水',
    '第八章：办公室风水布置',
    '第九章：商业店铺风水',
    '第十章：风水吉祥物的选择与摆放',
  ],
  relatedBooks: [
    { id: 3, title: '现代家居风水布局', author: '王强', cover: '🏠' },
    { id: 2, title: '八宅明镜详解', author: '李华', cover: '📖' },
  ],
};

export default function BookDetail() {
  const params = useParams();
  const bookId = params.id as string;
  
  // 在实际应用中，这里应该从API获取书籍详情
  const book = mockBookDetail; // 模拟数据，实际应该根据ID查询
  
  if (!book) {
    notFound();
  }
  
  // 渲染星级评分
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-lg font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="py-12 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* 书籍详情 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="flex flex-col md:flex-row">
              {/* 封面 */}
              <div className="md:w-1/3 h-80 bg-primary/10 flex items-center justify-center p-8">
                <span className="text-12xl">{book.cover}</span>
              </div>
              
              {/* 基本信息 */}
              <div className="md:w-2/3 p-8">
                <div className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-4">
                  {book.category}
                </div>
                <h1 className="text-3xl font-bold mb-3">{book.title}</h1>
                <p className="text-gray-600 mb-4">作者：{book.author}</p>
                
                <div className="mb-6">
                  {renderRating(book.rating)}
                  <p className="text-gray-500 text-sm">{book.reviews} 条评价</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-gray-500 text-sm">出版日期</p>
                    <p>{book.publishDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">页数</p>
                    <p>{book.pages}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="btn-primary flex-1">
                    阅读电子书
                  </button>
                  <button className="btn-secondary flex-1">
                    购买纸质书
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* 内容简介 */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">内容简介</h2>
            <p className="text-gray-700 leading-relaxed">
              {book.description}
            </p>
          </div>
          
          {/* 作者介绍 */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">作者介绍</h2>
            <div className="flex items-start">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {book.authorBio}
              </p>
            </div>
          </div>
          
          {/* 目录 */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">目录</h2>
            <ol className="space-y-2">
              {book.tableOfContents.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4 text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ol>
          </div>
          
          {/* 相关书籍 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">相关推荐</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {book.relatedBooks.map((related) => (
                <a href={`/books/${related.id}`} key={related.id} className="flex items-center group">
                  <div className="w-20 h-24 bg-primary/10 rounded-lg flex items-center justify-center mr-4 text-3xl">
                    {related.cover}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium hover:text-primary transition-colors">{related.title}</h4>
                    <p className="text-gray-600">{related.author}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* 返回列表 */}
          <div className="mt-8 text-center">
            <a href="/books" className="inline-flex items-center text-primary font-medium">
              <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              返回书籍列表
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}