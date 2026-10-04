import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Trần Thọ Xương - Blog cá nhân',
  description: 'Đéo có nỗi buồn nào đáng sợ bằng buồn ỉa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="site-branding">
            <h1 className="site-title-logo"><Link href="/">Trần Thọ Xương</Link></h1>
            <p className="site-description">Đéo có nỗi buồn nào đáng sợ bằng buồn ỉa</p>
        </div>

        <header className="top-bar">
            <div className="top-bar-inner">
                <nav className="nav-menu">
                    <ul>
                        <li><Link href="/">CÁ</Link></li>
                        <li><Link href="/">RÙA</Link></li>
                        <li><Link href="/">TỐC ĐỘ</Link></li>
                        <li><Link href="/ta-xua">TÀ XÙA</Link></li>
                        <li><Link href="/">VỀ MÌNH</Link></li>
                    </ul>
                </nav>
                <div className="search-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
            </div>
        </header>

        <div className="site-container">
            <main className="main-content">
                {children}
            </main>

            <aside className="sidebar">
                <div className="widget">
                    <h3 className="widget-title"><span>RECENT POSTS</span></h3>
                    <ul className="recent-posts-list">
                        <li>
                            <img src="/images/ta_xua.png" alt="Thumb" />
                            <Link href="/ta-xua">Đám mây lang thang trên đỉnh núi</Link>
                        </li>
                        <li>
                            <img src="/images/ca.png" alt="Thumb" />
                            <Link href="/ca">Bể thuỷ sinh và sự tĩnh tại</Link>
                        </li>
                    </ul>
                </div>

                <div className="widget">
                    <h3 className="widget-title"><span>ABOUT ME</span></h3>
                    <div className="about-me-content">
                        <img src="/images/author.jpg" alt="Trần Thọ Xương" />
                        <p>Xin chào, mình là Trần Thọ Xương. Nhấn vào đây để hiểu hơn về mình nhé!</p>
                    </div>
                </div>
            </aside>
        </div>

        <footer className="site-footer">
            <div className="footer-left">Next.js + Notion CMS by T.T.X</div>
            <div className="footer-right">&copy; TRANTHOXUONG 2026</div>
        </footer>
      </body>
    </html>
  );
}
