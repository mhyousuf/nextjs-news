import NewsCard from "@/components/Ui/NewsCard";
import Link from "next/link";

async function getData(category) {
    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=business&limit=3');
    let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_373013656a5179ef8612a1bd13aeebf656da0&language=en&category=${category}&size=9`);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

export default async function CategoryNewsSection({ category }) {
    let newsRes = await getData(category);

    let newsItems = newsRes.results;

    return (
        <>
            {/* Show first news */}
            {Array.isArray(newsItems) && (
                <section className="business-section">
                    <div className="container mx-auto">
                        <div className="relative">
                            <div className="text-3xl breadcrumbs">
                                <ul className="mt-8 ml-10 text-red-600">
                                    <li>{category}</li>
                                </ul>

                                <div className="mt-12 flex mr-10 absolute top-0 right-0 text-blue-500 text-lg font-bold">
                                    <Link href={`/news-list/${category}`} className="">View All</Link>
                                </div>
                            </div>
                        </div>

                        <div className="hero min-h-80">
                            <div className="hero-content w-full sm:flex block">
                                <div className="text-center md:w-6/12 p-6 rounded-xl">
                                    <img
                                        className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer"
                                        src={newsItems[0].image_url}
                                        alt={category}
                                        width={450}
                                        height={250}
                                    />
                                </div>

                                <div className="mx-auto md:w-6/12">
                                    <h1 className="text-3xl font-bold flex flex-wrap gap-2">
                                        {newsItems[0].title}
                                    </h1>
                                    <div className="flex m-3 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        <span className="text-sm">{newsItems[0].pubDate}</span>
                                    </div>

                                    <p className="py-6 text-lg">{newsItems[0].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Show news items without first item */}
            <section className="business-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Array.isArray(newsItems) ? (
                            newsItems.map((newsItem, index) => (
                                <>
                                    {index == 0
                                        ? ''
                                        : <NewsCard
                                            key={`news-${index}`}
                                            article_id={newsItem.article_id}
                                            image_url={newsItem.image_url}
                                            title={newsItem.title}
                                            pubDate={newsItem.pubDate}
                                        />
                                    }
                                </>
                            ))
                        ) : (
                            <p>news items is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
