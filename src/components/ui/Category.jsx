

function Category({category:{id,title,image}}) {
  return (
    <a href="#" className="flex flex-col group items-center gap-y-2 text-center p-4 transi hover:bg-purple-50">
        <img src={image} className="w-12 h-12 rounded border border-gray-200 "/>
        <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight">{title}</span>
        </a>
  )
}

export default Category