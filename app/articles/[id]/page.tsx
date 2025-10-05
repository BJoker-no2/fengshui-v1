import React from 'react';
import { useParams, notFound } from 'next/navigation';

// 模拟文章详情数据
const mockArticleDetail = {
  id: 1,
  title: '八宅风水基础入门',
  category: '基础理论',
  date: '2025-01-15',
  views: 1245,
  content: `
    <h2>什么是八宅风水？</h2>
    <p>八宅风水是中国传统风水学说中的一个重要分支，主要研究住宅与居住者之间的关系。它将住宅分为八个方位，每个方位对应不同的吉凶属性。</p>
    
    <h2>八宅风水的基本概念</h2>
    <p>八宅风水基于洛书九宫和后天八卦理论，将住宅划分为八个方位：</p>
    <ul>
      <li><strong>生气方</strong>：主健康、长寿、积极向上</li>
      <li><strong>延年方</strong>：主婚姻、感情、和谐</li>
      <li><strong>天医方</strong>：主健康、疾病康复</li>
      <li><strong>伏位方</strong>：主平顺、稳定</li>
      <li><strong>绝命方</strong>：主不利、危险</li>
      <li><strong>五鬼方</strong>：主是非、灾难</li>
      <li><strong>六煞方</strong>：主桃花、婚外情</li>
      <li><strong>祸害方</strong>：主疾病、口舌</li>
    </ul>
    
    <h2>如何确定命卦？</h2>
    <p>在八宅风水中，首先需要确定居住者的命卦，然后根据命卦确定住宅的吉凶方位。命卦分为东四命和西四命。</p>
    
    <h2>东四命与西四命</h2>
    <p>根据出生年份，可以计算出个人的命卦：</p>
    <ul>
      <li><strong>东四命</strong>：适合居住在东四宅，包括震宅、巽宅、离宅、坎宅</li>
      <li><strong>西四命</strong>：适合居住在西四宅，包括乾宅、坤宅、艮宅、兑宅</li>
    </ul>
    
    <h2>八宅风水的应用原则</h2>
    <p>在家居布局中，应该：</p>
    <ol>
      <li>将主卧、客厅等重要空间布置在吉方</li>
      <li>避免在凶方设置卧室或经常活动的区域</li>
      <li>合理利用风水吉祥物化解凶方的不利影响</li>
      <li>保持吉方的通风和采光良好</li>
    </ol>
    
    <h2>常见的风水布局技巧</h2>
    <p>1. <strong>开门见吉</strong>：住宅大门最好朝向生气方或延年方</p>
    <p>2. <strong>卧室布置</strong>：主卧床头不宜朝向绝命方或五鬼方</p>
    <p>3. <strong>厨房位置</strong>：厨房不宜设在天医方，以免影响健康</p>
    <p>4. <strong>书房布置</strong>：书桌宜设在生气方，有利于学习和工作</p>
    
    <h2>总结</h2>
    <p>八宅风水是一门实用的学问，通过合理的布局和调整，可以改善居住环境，提升生活质量。当然，风水理论需要灵活应用，结合现代生活方式进行适当调整。</p>
  `,
  relatedArticles: [
    { id: 5, title: '五行相生相克原理' },
    { id: 2, title: '2025年家居风水布局指南' },
    { id: 4, title: '易经与风水的关系' },
  ],
};

export default function ArticleDetail() {
  const params = useParams();
  const articleId = params.id as string;
  
  // 在实际应用中，这里应该从API获取文章详情
  const article = mockArticleDetail; // 模拟数据，实际应该根据ID查询
  
  if (!article) {
    notFound();
  }
  
  return (
    <div className="py-12 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 文章头部 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="h-64 bg-primary/10 flex items-center justify-center">
              <span className="text-8xl">📝</span>
            </div>
            <div className="p-8">
              <div className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-4">
                {article.category}
              </div>
              <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
              <div className="flex justify-between items-center text-gray-500 mb-6">
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
          
          {/* 文章内容 */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          
          {/* 相关文章 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">相关阅读</h3>
            <div className="space-y-4">
              {article.relatedArticles.map((related) => (
                <div key={related.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <a href={`/articles/${related.id}`} className="text-lg font-medium hover:text-primary transition-colors">
                    {related.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* 返回列表 */}
          <div className="mt-8 text-center">
            <a href="/articles" className="inline-flex items-center text-primary font-medium">
              <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              返回文章列表
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}