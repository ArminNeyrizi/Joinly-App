import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

export default async function ArticlesPage() {
  const payload = await getPayload({ config: configPromise })

  // دریافت لیست تمام مقالات از دیتابیس
  const result = await payload.find({
    collection: 'articles',
    sort: '-createdAt', // مرتب‌سازی از جدیدترین به قدیمی‌ترین
  })

  const articles = result.docs

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">مقالات و آموزش‌ها</h1>
      
      {articles.length === 0 ? (
        <p className="text-gray-500">هنوز مقاله‌ای منتشر نشده است.</p>
      ) : (
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article.id} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <Link 
                href={`/articles/${article.slug}`} 
                className="text-xl font-semibold text-blue-600 hover:text-blue-800"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
