import BreakingTicker from "@/components/BreakingTicker"
import TrendingSlider from "@/components/TrendingSlider"
import NewsCard from "@/components/NewsCard"

export default function Home(){

return(

<main className="max-w-7xl mx-auto p-6">

<BreakingTicker/>

<TrendingSlider/>

<h2 className="text-3xl font-bold mt-10 mb-6">
Top Stories
</h2>

<div className="grid md:grid-cols-3 gap-6">

<NewsCard title="AI Transforming The World"/>

<NewsCard title="Global Economy Update"/>

<NewsCard title="New Space Discovery"/>

</div>

</main>

)

}
