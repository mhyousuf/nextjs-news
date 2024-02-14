import Link from "next/link";

export default function NewsCard(props) {
    return (
        <>
            <div className="card shadow-xl">
                <div className="card-body p-0 overflow-hidden">
                    <div className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer">
                        <img className="h-40" src={props.image_url} width="100%" height={100} />
                    </div>

                    <div className="p-3">
                        <div className="card-title md-2">{props.title}</div>
                    </div>
                    <div className="flex p-3 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-sm pl-2">{props.pubDate}</span>
                    </div>
                    <div className="ml-4 p-4">
                        <Link href={'/news-details/business'} className="link link-info">
                            Read More..
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}