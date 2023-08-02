function ImageShow({ image }) {
    return (
        <div>
            <img src={image} alt={image.alt_description} />
        </div>
    )
}

export default ImageShow