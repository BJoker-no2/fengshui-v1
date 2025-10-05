import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';

// 模拟指南详情数据
const mockGuideDetail = {
  id: 1,
  title: '客厅风水布局全攻略',
  category: '家居风水',
  image: '🏠',
  difficulty: '初级',
  readTime: '10分钟',
  publishDate: '2025-01-10',
  views: 2345,
  content: `
    <h2>客厅的重要性</h2>
    <p>客厅是家庭活动的中心，也是接待客人的主要场所，其风水布局对整个家庭的运势有着重要影响。良好的客厅风水能够促进家庭和谐，增强财运，提升整体运势。</p>
    
    <h2>客厅方位与布局</h2>
    <p>根据风水学原理，客厅的最佳方位是住宅的东南方或正南方，这两个方位能够接收更多的阳光和正能量。</p>
    
    <div className="bg-primary/5 p-4 rounded-lg my-6">
      <h3 className="font-bold mb-2">布局要点：</h3>
      <ul>
        <li>客厅应宽敞明亮，避免过于拥挤</li>
        <li>沙发应背靠实墙，不宜背后无靠</li>
        <li>茶几与沙发的距离要适中，不宜过近或过远</li>
        <li>电视不宜正对窗户，以免反光影响观看</li>
      </ul>
    </div>
    
    <h2>沙发摆放的风水讲究</h2>
    <p>沙发是客厅的核心家具，其摆放位置和方式对风水有重要影响：</p>
    <ol>
      <li><strong>背靠实墙</strong>：沙发背后最好有实体墙壁作为依靠，象征有靠山，有助于事业和家庭稳定</li>
      <li><strong>避免横梁压顶</strong>：沙发上方不宜有横梁，否则会给人带来压迫感，影响运势</li>
      <li><strong>不宜正对大门</strong>：沙发正对大门容易导致财气外泄，可设置屏风或植物作为遮挡</li>
      <li><strong>沙发套数</strong>：沙发最好是整套摆放，避免半套或零散摆放，象征家庭完整和谐</li>
    </ol>
    
    <h2>茶几的选择与摆放</h2>
    <p>茶几是沙发的重要搭配家具，选择合适的茶几并正确摆放：</p>
    <ul>
      <li>茶几形状以圆形或椭圆形为佳，避免带尖锐棱角的形状</li>
      <li>茶几高度应与沙发座位高度相当，不宜过高或过低</li>
      <li>茶几面积不宜过大，一般占客厅面积的1/4左右为宜</li>
      <li>茶几上不宜堆放过多杂物，保持整洁有序</li>
    </ul>
    
    <h2>客厅照明的风水</h2>
    <p>合理的照明能够提升客厅的能量：</p>
    <ul>
      <li>客厅应保持充足的自然光线，白天尽量打开窗帘</li>
      <li>灯光应柔和适中，避免过于刺眼或昏暗</li>
      <li>可使用多层次照明，包括主灯、壁灯、落地灯等</li>
      <li>灯具形状和颜色应与整体装修风格协调</li>
    </ul>
    
    <div className="bg-warning/10 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
      <h3 className="font-bold mb-2">风水禁忌：</h3>
      <ul>
        <li>客厅不宜有镜子正对大门，以免反射财气</li>
        <li>不宜在客厅摆放尖锐或有刺的植物</li>
        <li>沙发不宜摆放在空调下方，以免气流直冲</li>
        <li>客厅地面不宜高低不平，应保持平整</li>
      </ul>
    </div>
    
    <h2>客厅装饰的风水建议</h2>
    <p>适当的装饰能够提升客厅的风水能量：</p>
    <ul>
      <li>可摆放象征吉祥的装饰品，如福字、中国结等</li>
      <li>选择圆形或椭圆形的装饰画，避免尖锐形状</li>
      <li>客厅植物以叶大、圆润的为主，如发财树、绿萝等</li>
      <li>装饰色彩应根据客厅方位选择，如南方可用红色，东方可用绿色</li>
    </ul>
    
    <h2>不同户型的客厅风水调整</h2>
    <p>针对不同户型的客厅，可采取相应的风水调整措施：</p>
    <ul>
      <li><strong>长方形客厅</strong>：可使用家具或隔断将空间适当分隔，避免过于狭长</li>
      <li><strong>正方形客厅</strong>：家具布置应避免过于集中，保持中心区域通透</li>
      <li><strong>异形客厅</strong>：可利用家具和装饰来弥补形状缺陷，创造和谐的空间感</li>
    </ul>
    
    <h2>总结</h2>
    <p>客厅风水是家居风水中的重要组成部分，通过合理的布局和装饰，能够创造一个舒适、和谐、充满正能量的生活空间，提升家人的运势和生活质量。</p>
  `,
  tips: [
    '定期清理客厅，保持整洁，有助于财气流通',
    '在客厅东南方位摆放招财植物，有助于提升财运',
    '客厅色调应温暖和谐，避免过于冷色调',
    '沙发上可放置靠垫，增加舒适度的同时提升风水能量',
  ],
  relatedGuides: [
    { id: 3, title: '卧室风水与健康睡眠', category: '家居风水' },
    { id: 6, title: '书房风水与学业事业', category: '家居风水' },
  ],
};

export default function GuideDetail() {
  const params = useParams();
  const guideId = params.id as string;
  
  // 在实际应用中，这里应该从API获取指南详情
  const guide = mockGuideDetail; // 模拟数据，实际应该根据ID查询
  
  if (!guide) {
    notFound();
  }

  return (
    <div className="py-12 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 指南头部 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="h-64 bg-primary/10 flex items-center justify-center">
              <span className="text-8xl">{guide.image}</span>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  {guide.category}
                </div>
                <div className={`inline-block text-xs px-2 py-1 rounded-full ${guide.difficulty === '初级' ? 'bg-green-100 text-green-800' : guide.difficulty === '中级' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                  {guide.difficulty}
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
              <div className="flex flex-wrap gap-4 text-gray-500 mb-6">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {guide.publishDate}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {guide.readTime}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {guide.views}
                </span>
              </div>
            </div>
          </div>
          
          {/* 指南内容 */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: guide.content }} />
          </div>
          
          {/* 实用贴士 */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">实用贴士</h3>
            <ul className="space-y-3">
              {guide.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 相关指南 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">相关指南</h3>
            <div className="space-y-4">
              {guide.relatedGuides.map((related) => (
                <Link href={`/guides/${related.id}`} key={related.id} className="flex items-start p-4 border rounded-lg hover:bg-neutral transition-colors">
                  <div className="mr-4 text-2xl">🏠</div>
                  <div>
                    <div className="text-sm text-primary mb-1">{related.category}</div>
                    <h4 className="text-lg font-medium hover:text-primary transition-colors">{related.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* 返回列表 */}
          <div className="mt-8 text-center">
            <a href="/guides" className="inline-flex items-center text-primary font-medium">
              <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              返回指南列表
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}