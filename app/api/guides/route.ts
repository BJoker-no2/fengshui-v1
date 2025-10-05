// app/api/guides/route.ts
import { NextResponse } from 'next/server';

// 模拟指南数据
const mockGuides = [
  {
    id: '1',
    title: '客厅风水布局全攻略',
    category: '家居风水',
    image: '🏠',
    difficulty: '初级',
    excerpt: '详细介绍客厅风水布局的要点和禁忌，助您打造和谐舒适的客厅环境。',
    readTime: '10分钟',
    publishDate: '2025-01-10',
    views: 2345,
  },
  {
    id: '2',
    title: '办公桌风水摆放技巧',
    category: '办公风水',
    image: '💻',
    difficulty: '初级',
    excerpt: '合理的办公桌摆放能够提升工作效率和事业运势，本文提供实用建议。',
    readTime: '8分钟',
    publishDate: '2025-01-08',
    views: 1890,
  },
  {
    id: '3',
    title: '卧室风水与健康睡眠',
    category: '家居风水',
    image: '🛏️',
    difficulty: '中级',
    excerpt: '卧室风水对睡眠质量和健康有重要影响，了解如何优化卧室风水。',
    readTime: '12分钟',
    publishDate: '2025-01-05',
    views: 3456,
  },
  {
    id: '4',
    title: '商铺风水选址与布局',
    category: '商业风水',
    image: '🏪',
    difficulty: '高级',
    excerpt: '详细讲解商铺选址的风水要点和内部布局技巧，助您生意兴隆。',
    readTime: '15分钟',
    publishDate: '2025-01-01',
    views: 1234,
  },
  {
    id: '5',
    title: '厨房风水与家庭健康',
    category: '家居风水',
    image: '🍳',
    difficulty: '中级',
    excerpt: '厨房是家庭健康的重要场所，了解厨房风水的关键要点。',
    readTime: '10分钟',
    publishDate: '2024-12-28',
    views: 1987,
  },
  {
    id: '6',
    title: '书房风水与学业事业',
    category: '家居风水',
    image: '📖',
    difficulty: '中级',
    excerpt: '良好的书房风水有助于提升学习效率和工作专注力，本文提供详细指南。',
    readTime: '11分钟',
    publishDate: '2024-12-25',
    views: 2678,
  },
];

// 指南详情数据
const mockGuideDetails: Record<string, any> = {
  '1': {
    id: '1',
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
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (id) {
    // 返回特定指南详情
    const guide = mockGuideDetails[id];
    if (guide) {
      return NextResponse.json(guide);
    } else {
      return NextResponse.json({ error: 'Guide not found' }, { status: 404 });
    }
  } else {
    // 返回指南列表
    return NextResponse.json(mockGuides);
  }
}