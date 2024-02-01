const Category = (props) => {
    return (
        <div className="shadow-2xl w-full h-full flex flex-col gap-3 items-center cursor-pointer">
            <img src={props.URL} alt={props.description} className="w-full bg-center bg-cover h-4/5 hover:blur-[1px]"/>
            <h1 className="font-medium text-xl text-gray-500">{props.title}</h1>
        </div>
    )
}
export default Category