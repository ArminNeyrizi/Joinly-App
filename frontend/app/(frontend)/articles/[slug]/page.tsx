import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'

// این کامپوننت مستقیماً مقاله را از دیتابیس می‌خواند
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  // جستجوی مقاله بر اساس slug
  const result = await payload.find({
    collection: 'articles',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const article = result.docs[0]

  if (!article) {
    notFound()
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
      {/* 
        در اینجا باید محتوای Lexical (article.content) را رندر کنید.
        فعلاً برای تست، اطلاعات خام را نمایش می‌دهیم.
      */}
      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-left" dir="ltr">
        {JSON.stringify(article.content, null, 2)}
      </pre>
    </main>
  )
}
