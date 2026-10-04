import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPosts() {
    if (!fs.existsSync(postsDirectory)) return [];
    
    // Đọc tên tất cả các file trong thư mục /posts
    const fileNames = fs.readdirSync(postsDirectory);
    
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            // Loại bỏ đuôi .md để lấy tên file làm đường dẫn (slug)
            const slug = fileName.replace(/\.md$/, '');
            
            // Đọc nội dung file
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            
            // Phân tích cú pháp metadata (Title, Date, Image...) ở đầu file
            const matterResult = matter(fileContents);

            return {
                id: slug,
                slug: slug,
                ...matterResult.data // Trả về title, date, excerpt, image, category
            };
        });

    // Sắp xếp bài viết theo ngày mới nhất
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) return 1;
        else return -1;
    });
}

export async function getPost(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Phân tích metadata và phần nội dung
    const matterResult = matter(fileContents);

    // Chuyển đổi nội dung Markdown sang HTML
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        content: contentHtml,
        ...matterResult.data
    };
}
