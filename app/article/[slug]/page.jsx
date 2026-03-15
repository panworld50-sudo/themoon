export default function Article({params}){

return(

<div className="max-w-3xl mx-auto p-6">

<h1 className="text-4xl font-bold mb-4">

Article: {params.slug}

</h1>

<p>Full article content...</p>

</div>

)

}
