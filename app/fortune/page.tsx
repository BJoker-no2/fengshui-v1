'use client';
import React, { useState } from 'react';

// 模拟测算模板数据
const fortuneTemplates = [
  { id: 1, name: '家居风水测算', description: '分析您的家居环境风水布局，提供改善建议' },
  { id: 2, name: '个人运势测算', description: '基于生辰八字分析个人运势走向' },
  { id: 3, name: '办公室风水评估', description: '评估办公环境对事业发展的影响' },
  { id: 4, name: '购房风水指南', description: '为购房决策提供风水参考' },
];

export default function FortunePage() {
  const [selectedTemplate, setSelectedTemplate] = useState(fortuneTemplates[0]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    gender: 'male',
    question: '',
  });

  // 模拟测算结果
  const mockResult = {
    score: 78,
    summary: '您的家居风水整体良好，但仍有一些需要注意的地方。',
    strengths: [
      '客厅采光充足，有利于家人健康和财运',
      '主卧床头朝向吉位，有助于睡眠质量',
      '厨房位置合理，符合风水原则',
    ],
    suggestions: [
      '卫生间门不宜正对卧室，建议设置隔断或门帘',
      '客厅角落可以放置绿植，增强生气',
      '书房书桌宜面向窗户，但避免背对门',
    ],
    luckyColor: '木色系（绿色、青色）',
    luckyDirection: '东南方',
    advice: '定期清理家中杂物，保持空气流通，可以改善整体运势。',
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // 模拟测算过程
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
    }, 2000);
  };

  // 处理表单输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 重置表单
  const handleReset = () => {
    setFormData({
      name: '',
      birthDate: '',
      gender: 'male',
      question: '',
    });
    setShowResult(false);
  };

  return (
    <div className="py-12 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">运势测算</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            基于传统风水理论的智能测算工具，为您提供个性化的风水分析和改善建议
          </p>
        </div>

        {!showResult ? (
          <div className="max-w-4xl mx-auto">
            {/* 测算模板选择 */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">选择测算类型</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fortuneTemplates.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedTemplate.id === template.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/30'}`}
                  >
                    <h3 className="font-bold mb-2">{template.name}</h3>
                    <p className="text-gray-600 text-sm">{template.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 测算表单 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">{selectedTemplate.name}</h2>
              
              {isCalculating ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-lg">正在进行测算，请稍候...</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">姓名</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="请输入您的姓名"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="birthDate" className="block text-gray-700 mb-2">出生日期</label>
                        <input
                          type="date"
                          id="birthDate"
                          name="birthDate"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="gender" className="block text-gray-700 mb-2">性别</label>
                        <select
                          id="gender"
                          name="gender"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          value={formData.gender}
                          onChange={handleInputChange}
                        >
                          <option value="male">男</option>
                          <option value="female">女</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="question" className="block text-gray-700 mb-2">您最关心的问题（选填）</label>
                      <textarea
                        id="question"
                        name="question"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="请简要描述您最想了解的问题或关注点"
                        value={formData.question}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button type="submit" className="btn-primary w-full md:w-auto">
                        开始测算
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        ) : (
          // 测算结果
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">测算结果</h2>
                <button onClick={handleReset} className="text-primary hover:text-primary/80">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
              
              {/* 整体评分 */}
              <div className="bg-primary/5 rounded-lg p-6 mb-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">{mockResult.score}</div>
                <p className="text-xl">整体风水评分</p>
              </div>
              
              {/* 结果摘要 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">测算总结</h3>
                <p className="text-gray-700">{mockResult.summary}</p>
              </div>
              
              {/* 优势分析 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">优势分析</h3>
                <ul className="space-y-2">
                  {mockResult.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 改善建议 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">改善建议</h3>
                <ul className="space-y-2">
                  {mockResult.suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 幸运信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-neutral p-5 rounded-lg">
                  <h3 className="font-medium text-gray-500 mb-2">幸运颜色</h3>
                  <p className="text-lg font-bold">{mockResult.luckyColor}</p>
                </div>
                <div className="bg-neutral p-5 rounded-lg">
                  <h3 className="font-medium text-gray-500 mb-2">有利方位</h3>
                  <p className="text-lg font-bold">{mockResult.luckyDirection}</p>
                </div>
              </div>
              
              {/* 总结建议 */}
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">总结建议</h3>
                <p className="text-gray-700">{mockResult.advice}</p>
              </div>
              
              <div className="mt-8 text-center">
                <button onClick={handleReset} className="btn-primary">
                  重新测算
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}