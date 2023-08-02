import ImageShow from './ImageShow'
function ImageList({ images }) {

     return (
         <div className="grid grid-co">
             {
                 images.map(image => (
                     <ImageShow key={image.id} image={image}/>
                 ))
             }
         </div>
     )
}

export default ImageList