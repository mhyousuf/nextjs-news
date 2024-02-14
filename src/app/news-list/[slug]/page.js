import Layout from "@/components/Layout/layout";
import BusinessCard from "@/components/Ui/NewsCard";
import Link from "next/link";

async function getData(category) {

    let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=${category}&size=9`);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function BusinessList({params}) {
    let businessRes = await getData(params.slug);
    let businesses = businessRes.results;
    // console.log(params);

    return (
        <>
            <Layout>
                <section className="business-section">
                    <div className="text-sm breadcrumbs">
                        <ul className="mt-8 ml-10 pl-4 text-red-600">
                            <li><Link href={"/"}>Home</Link></li>
                            <li>{params.slug} List</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="text-3xl breadcrumbs">
                            <ul className="mt-8 ml-10 pl-6 text-red-600">
                                <li>{params.slug}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container mx-auto p-4 mt-5 w-full sm:flex block">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:w-8/12 gap-4 h-48">
                            {/* {businessgrids.map((business, index)=> (
                                <BusinessCard
                                key={`business=${index}`}
                                image_url={business.image_url}
                                title={business.title}
                                published_at={business.published_at}
                                />
                            ))} */}

                            {Array.isArray(businesses) ? (
                                businesses.map((news, index) => (
                                    <BusinessCard
                                        key={`news-${index}`}
                                        id={news.id}
                                        image_url={news.image_url}
                                        title={news.title.slice(0, 20) + '....'}
                                        pubDate={news.pubDate}
                                    />
                                ))
                            ) : (
                                <p>businessgrids is not an array</p>
                            )}
                        </div>

                        <div className="mx-auto md:w-4/12 p-8 ml-12 w-full">
                            <div className="relative">
                                <div className="mr-10 top-0 right-0 text-blue-500 text-lg font-bold pb-6">
                                    <h1>The Latest</h1>
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="h-24 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                <div className="mt-7 pl-8">
                                    <h1>hello</h1>
                                    <div className="flex p-3 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        <span className="text-sm pl-2">07-feb-2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="avatar">
                                <div className="h-24 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                <div className="mt-7 pl-8">
                                    <h1>hello</h1>
                                    <div className="flex p-3 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        <span className="text-sm pl-2">07-feb-2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="avatar">
                                <div className="h-24 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                <div className="mt-7 pl-8">
                                    <h1>hello</h1>
                                    <div className="flex p-3 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        <span className="text-sm pl-2">07-feb-2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="avatar">
                                <div className="h-24 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                <div className="mt-7 pl-8">
                                    <h1>hello</h1>
                                    <div className="flex p-3 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        <span className="text-sm pl-2">07-feb-2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="avatar">
                                <div className="h-24 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                <div className="mt-7 pl-8">
                                    <h1>hello</h1>
                                    <div className="flex p-3 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        <span className="text-sm pl-2">07-feb-2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="avatar">
                                <div className="h-24 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                <div className="mt-7 pl-8">
                                    <h1>hello</h1>
                                    <div className="flex p-3 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        <span className="text-sm pl-2">07-feb-2024</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center gap-2">
                        <button className="btn btn-outline">Previous page</button>
                        <button className="btn btn-outline text-center pl-6 pr-6">Next</button>
                    </div>
                </section>
            </Layout>
        </>
    );
}