export default function NewsCard({title}){

return(

<div className="bg-gray-900 rounded-xl p-4">

<img
src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
className="rounded-lg"
/>

<h3 className="mt-4 text-xl font-semibold">
{title}
</h3>

</div>

)

}
