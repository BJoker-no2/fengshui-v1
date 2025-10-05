// app/api/articles/route.ts
import { NextResponse } from 'next/server';

// 模拟文章数据
const mockArticles = [
  {
    id: '1',
    title: '八宅风水基础入门',
    category: '基础知识',
    image: '🏠',
    excerpt: '八宅风水是中国传统风水流派之一，本文将介绍八宅风水的基本概念和应用方法...',
    publishDate: '2025-01-15',
    readTime: '15分钟',
    views: 3456,
  },
  {
    id: '2',
    title: '风水与现代家居设计',
    category: '现代应用',
    image: '🪑',
    excerpt: '如何将传统风水理念融入现代家居设计中，创造舒适和谐的生活环境...',
    publishDate: '2025-01-10',
    readTime: '12分钟',
    views: 2345,
  },
  {
    id: '3',
    title: '办公室风水布局指南',
    category: '职场风水',
    image: '💼',
    excerpt: '合理的办公室风水布局能够提升工作效率和事业运势，本文提供实用建议...',
    publishDate: '2025-01-05',
    readTime: '10分钟',
    views: 1890,
  },
  {
    id: '4',
    title: '财位布置与招财方法',
    category: '招财旺运',
    image: '💰',
    excerpt: '了解家中财位的确定方法和布置技巧，有效提升财运和家庭运势...',
    publishDate: '2025-01-01',
    readTime: '8分钟',
    views: 5678,
  },
  {
    id: '5',
    title: '生肖与风水的关系',
    category: '生肖文化',
    image: '🐉',
    excerpt: '不同生肖的人如何根据自身特点选择适合的风水布局和装饰...',
    publishDate: '2024-12-28',
    readTime: '10分钟',
    views: 2901,
  },
  {
    id: '6',
    title: '风水植物的选择与摆放',
    category: '植物风水',
    image: '🌿',
    excerpt: '适合室内摆放的风水植物推荐，以及不同植物的摆放位置和功效...',
    publishDate: '2024-12-25',
    readTime: '12分钟',
    views: 2134,
  },
];

// 文章详情数据
const mockArticleDetails: Record<string, any> = {
  '1': {
    id: '1',
    title: '八宅风水基础入门',
    category: '基础知识',
    publishDate: '2025-01-15',
    readTime: '15分钟',
    views: 3456,
    content: `
      <h2>什么是八宅风水？</h2>
      <p>八宅风水是中国传统风水学中的重要流派之一，它将住宅分为八个方位，并根据居住者的命卦确定吉方和凶方。八宅风水注重方位与居住者的配合，认为不同的方位对不同的人有不同的影响。</p>
      
      <h2>八宅风水的基本概念</h2>
      <p>八宅风水以八卦为基础，将住宅分为八个方位：</p>
      <ul>
        <li>东方：震卦</li>
        <li>东南方：巽卦</li>
        <li>南方：离卦</li>
        <li>西南方：坤卦</li>
        <li>西方：兑卦</li>
        <li>西北方：乾卦</li>
        <li>北方：坎卦</li>
        <li>东北方：艮卦</li>
      </ul>
      
      <div className="bg-primary/5 p-4 rounded-lg my-6">
        <h3 className="font-bold mb-2">八宅风水要点：</h3>
        <ul>
          <li>根据出生年份确定命卦</li>
          <li>命卦分为东四命和西四命</li>
          <li>东四命适合住在东四宅，西四命适合住在西四宅</li>
          <li>重要房间如卧室、客厅等应设在吉方</li>
        </ul>
      </div>
      
      <h2>如何确定命卦？</h2>
      <p>命卦的确定方法根据性别和出生年份有所不同：</p>
      <h3>男性命卦计算方法：</h3>
      <p>（100 - 出生年份最后两位数）÷ 9，余数即为命卦数</p>
      <h3>女性命卦计算方法：</h3>
      <p>（出生年份最后两位数 - 4）÷ 9，余数即为命卦数</p>
      <p>如果余数为0，则命卦数为9。</p>
      
      <h2>东四命与西四命</h2>
      <p>根据命卦数，可以将人分为东四命和西四命：</p>
      <ul>
        <li><strong>东四命</strong>：命卦数为1（坎）、3（震）、4（巽）、9（离）</li>
        <li><strong>西四命</strong>：命卦数为2（坤）、5（中宫，男性为坤，女性为艮）、6（乾）、7（兑）、8（艮）</li>
      </ul>
      
      <h2>八宅吉凶方位</h2>
      <p>每个命卦都有四个吉方和四个凶方：</p>
      <h3>东四命的吉方：</h3>
      <ul>
        <li>生气方：主健康、长寿、人缘好</li>
        <li>天医方：主健康、财运、贵人相助</li>
        <li>延年方：主婚姻、感情、事业</li>
        <li>伏位方：主平顺、稳定、延续</li>
      </ul>
      
      <h3>西四命的吉方：</h3>
      <ul>
        <li>生气方：主健康、长寿、人缘好</li>
        <li>天医方：主健康、财运、贵人相助</li>
        <li>延年方：主婚姻、感情、事业</li>
        <li>伏位方：主平顺、稳定、延续</li>
      </ul>
      
      <h3>四凶方：</h3>
      <ul>
        <li>绝命方：主疾病、灾难、破财</li>
        <li>五鬼方：主小人、是非、口舌</li>
        <li>六煞方：主桃花、感情困扰</li>
        <li>祸害方：主争吵、矛盾、不安</li>
      </ul>
      
      <h2>八宅风水的应用</h2>
      <p>在实际应用中，八宅风水主要关注以下几个方面：</p>
      <ol>
        <li><strong>卧室位置</strong>：应设在命卦的吉方，特别是天医方或延年方</li>
        <li><strong>床位摆放</strong>：床头应朝向吉方，避免朝向凶方</li>
        <li><strong>大门朝向</strong>：大门是气口，应设在吉方，避免设在凶方</li>
        <li><strong>厨房位置</strong>：厨房代表财运和健康，应设在相对次要的方位</li>
        <li><strong>卫生间位置</strong>：卫生间是浊气聚集之地，应设在凶方</li>
      </ol>
      
      <div className="bg-warning/10 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
        <h3 className="font-bold mb-2">风水调整建议：</h3>
        <ul>
          <li>如果吉方有缺陷，可以通过摆放吉祥物、植物等进行化解</li>
          <li>凶方可以通过设置卫生间、储物间等次要功能区来压制</li>
          <li>注意保持房屋的通风和采光，保持室内空气流通</li>
          <li>定期清理杂物，保持家居环境整洁有序</li>
        </ul>
      </div>
      
      <h2>八宅风水的局限性</h2>
      <p>虽然八宅风水是一种实用的风水理论，但它也有一定的局限性：</p>
      <ul>
        <li>八宅风水主要关注方位，相对忽视了时间因素</li>
        <li>它基于传统的住宅结构，对现代建筑形式的适应性有限</li>
        <li>只考虑了居住者的命卦，没有考虑家庭成员的不同需求</li>
      </ul>
      
      <h2>结语</h2>
      <p>八宅风水是中国传统风水文化的重要组成部分，通过合理应用八宅风水理论，可以改善居住环境，提升生活质量。但在实际应用中，应结合现代科学知识和个人实际情况，灵活运用，不应生搬硬套。</p>
    `,
    relatedArticles: [
      { id: '2', title: '风水与现代家居设计', category: '现代应用' },
      { id: '4', title: '财位布置与招财方法', category: '招财旺运' },
    ],
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (id) {
    // 返回特定文章详情
    const article = mockArticleDetails[id];
    if (article) {
      return NextResponse.json(article);
    } else {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
  } else {
    // 返回文章列表
    return NextResponse.json(mockArticles);
  }
}