import Layout from "@/components/Layout/layout";
import Link from "next/link";

async function getData() {

    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=business&size=1');
    // let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&q=' + {slug});
    // console.log(slug);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function NewsDetails() {
    let newsRes = await getData();
    let details = newsRes.results;

    // console.log(params);
    // return (<h1>hello</h1>);

    return (
        <>
            <Layout>
                <section className="news-section">
                    <div className="text-sm breadcrumbs">
                        <ul className="mt-8 ml-10 pl-4 text-red-600">
                            <li><Link href={"/"}>Home</Link></li>
                            <li>News Details</li>
                        </ul>
                    </div>
                    {/* <div className="container mx-auto p-4 mt-5"> */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> */}
                    {/* {businessgrids.map((business, index)=> (
                                <BusinessCard
                                key={`business=${index}`}
                                image_url={business.image_url}
                                title={business.title}
                                published_at={business.published_at}
                                />
                            ))} */}
                    <div className="hero min-h-80">
                        <div className="hero-content w-full md:w-auto sm:flex block">
                            <div className="text-center p-6 rounded-xl">
                                <img
                                    className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer"
                                    src="https://c8.alamy.com/comp/H1EE3N/news-concept-business-news-on-digital-background-H1EE3N.jpg"
                                    alt="Business"
                                    width={650}
                                    height={350}
                                />
                            </div>


                        </div>
                    </div>
                    <div className="hero-content w-full md:w-auto text-center">
                        <div className="mx-auto md:w-10/12">
                            <div className="flex m-3 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                <span className="text-sm">২৪ এপ্রিল, ২০২২</span>
                            </div>
                            <div className="py-6 ml-4 text-left text-2xl font-medium">
                                <h2>Where does it come from?</h2>
                            </div>
                            <div>
                                <p className="py-6 text-lg">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                                    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                                    accompanied by English versions from the 1914 translation by H. Rackham
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* {Array.isArray(details) ? (
                            details.map((news, index) => (
                                <BusinessCard
                                    key={`news-${index}`}
                                    image_url={news.image_url}
                                    title={news.title.slice(0, 20) + '....'}
                                    pubDate={news.pubDate}
                                />

                            ))
                        ) : (
                            <p>businessgrids is not an array</p>
                        )} */}
                    {/* </div> */}
                    {/* </div> */}
                </section>
            </Layout>
        </>
    );
}