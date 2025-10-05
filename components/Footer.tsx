import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于我们 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">风水智慧</h3>
            <p className="text-gray-400 mb-4">
              传承中华传统风水文化，让古老智慧服务现代生活
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">快速链接</h4>
            <ul className="space-y-2">
              {['关于我们', '联系我们', '隐私政策', '使用条款'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 功能导航 */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">功能导航</h4>
            <ul className="space-y-2">
              {[
                { label: '风水知识', href: '/articles' },
                { label: '书籍资源', href: '/books' },
                { label: '运势测算', href: '/fortune' },
                { label: '风水指南', href: '/guides' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">联系方式</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@fengshui.com
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +86 123 4567 8910
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} 风水智慧. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}