import Layout from "@/components/Layout/layout";
import CategoryNewsSection from "./components/CategoryNewsSection";

export default function Home() {
    return (
        <>
            <Layout>
                <CategoryNewsSection category="Business" />

                <CategoryNewsSection category="Education" />

                <CategoryNewsSection category="Entertainment" />

                <CategoryNewsSection category="Environment" />

                <CategoryNewsSection category="Food" />

                <CategoryNewsSection category="Health" />

                <CategoryNewsSection category="Politics" />

                <CategoryNewsSection category="Science" />

                <CategoryNewsSection category="Sports" />

                <CategoryNewsSection category="Technology" />

                <CategoryNewsSection category="Top" />

                <CategoryNewsSection category="Tourism" />

                <CategoryNewsSection category="World" />
            </Layout>
        </>
    );
}