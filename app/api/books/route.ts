// app/api/books/route.ts
import { NextResponse } from 'next/server';

// 模拟书籍数据
const mockBooks = [
  {
    id: '1',
    title: '风水入门与应用',
    author: '李明德',
    category: '基础知识',
    cover: '📚',
    excerpt: '一本全面介绍风水基础知识和实用技巧的入门书籍，适合初学者阅读。',
    publishYear: 2024,
    pages: 320,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: '2',
    title: '现代家居风水指南',
    author: '张华',
    category: '家居风水',
    cover: '🏠',
    excerpt: '结合现代家居设计理念，详细讲解如何打造符合风水原则的居住环境。',
    publishYear: 2023,
    pages: 280,
    rating: 4.5,
    reviews: 98,
  },
  {
    id: '3',
    title: '商业风水与财运',
    author: '王建国',
    category: '商业风水',
    cover: '💼',
    excerpt: '解析商业场所的风水布局与财运关系，助您事业蒸蒸日上。',
    publishYear: 2023,
    pages: 256,
    rating: 4.6,
    reviews: 78,
  },
  {
    id: '4',
    title: '办公风水与事业运',
    author: '刘芳',
    category: '职场风水',
    cover: '🏢',
    excerpt: '提供办公室风水布局指南，助您提升工作效率和事业运势。',
    publishYear: 2022,
    pages: 240,
    rating: 4.4,
    reviews: 67,
  },
  {
    id: '5',
    title: '风水与健康生活',
    author: '陈医师',
    category: '健康风水',
    cover: '🧘‍♂️',
    excerpt: '从风水角度探讨居住环境对健康的影响，提供改善健康的风水建议。',
    publishYear: 2024,
    pages: 272,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: '6',
    title: '风水吉祥物全解',
    author: '赵明',
    category: '风水物品',
    cover: '🔮',
    excerpt: '详解各类风水吉祥物的功效、摆放方法和注意事项。',
    publishYear: 2022,
    pages: 224,
    rating: 4.3,
    reviews: 56,
  },
];

// 书籍详情数据
const mockBookDetails: Record<string, any> = {
  '1': {
    id: '1',
    title: '风水入门与应用',
    author: '李明德',
    category: '基础知识',
    cover: '📚',
    publishYear: 2024,
    pages: 320,
    rating: 4.7,
    reviews: 156,
    description: '本书是一本面向初学者的风水入门书籍，作者李明德先生结合自己多年的风水实践经验，用通俗易懂的语言向读者介绍了风水的基本概念、理论基础和实用技巧。书中详细讲解了八宅风水、玄空飞星等主要风水流派的核心内容，并通过大量的实例说明如何将风水知识应用到日常生活中，帮助读者改善居住环境，提升生活质量。',
    authorIntro: '李明德，著名风水师，从事风水研究与实践二十余年，现任中国风水文化研究会副会长。著有多部风水畅销书籍，在国内外风水界享有盛誉。李老师注重将传统风水理论与现代生活相结合，擅长通过简单实用的方法帮助人们改善居住环境和运势。',
    contents: [
      '第一章 风水基础知识',
      '第二章 风水与五行',
      '第三章 八宅风水入门',
      '第四章 玄空飞星简介',
      '第五章 家居风水布局',
      '第六章 办公室风水',
      '第七章 风水与健康',
      '第八章 风水吉祥物',
      '第九章 风水案例分析',
      '第十章 常见风水问题解答',
    ],
    relatedBooks: [
      { id: '2', title: '现代家居风水指南', author: '张华', category: '家居风水' },
      { id: '6', title: '风水吉祥物全解', author: '赵明', category: '风水物品' },
    ],
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (id) {
    // 返回特定书籍详情
    const book = mockBookDetails[id];
    if (book) {
      return NextResponse.json(book);
    } else {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }
  } else {
    // 返回书籍列表
    return NextResponse.json(mockBooks);
  }
}