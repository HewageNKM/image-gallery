const ImageCard = (props) => {
    return (
        <div className="flex rounded-xl justify-center items-center">
            <img
                src={props.URL}
                alt={props.description}
                className="rounded bg-cover bg-center w-[100vw] md:h-[80vh] h-[50vh]"
            />
        </div>
    );
};
export default ImageCard;