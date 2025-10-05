import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // 模拟数据
  const featuredArticles = [
    { id: 1, title: '八宅风水基础入门', excerpt: '了解传统八宅风水理论，掌握家居布局基本原则', category: '基础理论' },
    { id: 2, title: '2025年家居风水布局指南', excerpt: '新一年的风水布局建议，提升家居运势', category: '年度指南' },
    { id: 3, title: '办公室风水与事业发展', excerpt: '如何通过办公室布局提升工作效率和事业运', category: '职场应用' },
  ];

  const mainFeatures = [
    {
      title: '风水知识',
      description: '探索传统风水理论与实践应用，提升生活质量',
      icon: '📚',
      link: '/articles',
    },
    {
      title: '书籍资源',
      description: '精选经典风水书籍，深入了解东方智慧',
      icon: '📖',
      link: '/books',
    },
    {
      title: '运势测算',
      description: '基于传统算法的智能测算工具，预测个人运势',
      icon: '🔮',
      link: '/fortune',
    },
    {
      title: '风水指南',
      description: '家居与办公环境的风水优化方案',
      icon: '🏠',
      link: '/guides',
    },
  ];

  return (
    <div>
      {/* 英雄区域 */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                探索传统智慧<br />提升生活品质
              </h1>
              <p className="text-xl mb-8 text-white/90">
                专业的风水文化资源平台，提供知识、工具与指导
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/articles" className="btn-primary">
                  开始探索
                </Link>
                <Link href="/fortune" className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-neutral transition-colors">
                  免费测算
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-xl transform rotate-3">
                <div className="bg-neutral p-4 rounded-lg">
                  <div className="text-center font-serif text-primary text-2xl">风水智慧</div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {['金木水火土', '阴阳平衡', '天人合一', '五行相生'].map((item, index) => (
                      <div key={index} className="bg-white p-3 rounded shadow-sm text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 功能区域 */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <h2 className="section-title">主要功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
              <Link key={index} href={feature.link} className="card p-6 group">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-primary font-medium">
                  查看详情
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 精选文章 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold">精选文章</h2>
            <Link href="/articles" className="text-primary font-medium flex items-center">
              查看全部
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
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
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link href={`/articles/${article.id}`} className="text-primary font-medium flex items-center">
                    阅读全文
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section className="py-16 bg-gradient-to-br from-dark to-dark/80 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">关于我们</h2>
              <p className="text-white/80 mb-4">
                我们致力于传承和弘扬中华传统风水文化，通过现代科技手段，让古老的智慧更好地服务当代生活。
              </p>
              <p className="text-white/80 mb-6">
                无论您是风水爱好者，还是希望改善生活环境的普通人，我们都能为您提供专业、实用的知识和工具。
              </p>
              <Link href="/about" className="btn-secondary">
                了解更多
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">{['🧠', '📚', '🔍', '💡'][item - 1]}</div>
                    <div className="text-white/90 font-medium">
                      {['专业团队', '优质内容', '智能工具', '实用指南'][item - 1]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 风水贴士 */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <h2 className="section-title">每日风水贴士</h2>
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="text-5xl mb-6 text-center">✨</div>
            <p className="text-lg text-center text-gray-700 mb-6">
              "客厅保持整洁通透，有助于财气流通。避免在沙发后面放置镜子，以免反射财运。"
            </p>
            <div className="text-center">
              <Link href="/guides" className="btn-primary inline-flex items-center">
                查看更多贴士
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}