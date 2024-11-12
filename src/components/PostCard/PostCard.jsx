import image from '../../assets/img/procione.jpg'
import Button from '../Button/Button'
export default function PostCard() {

    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="text-section">
                <div className="title">
                    <strong>Lui è Jack!</strong>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at non error molestias reiciendis obcaecati consequatur maiores ipsum! Ullam corporis aut suscipit quas maxime ad perspiciatis earum cumque sint quaerat.
                </div>
                <Button />
            </div>
        </div>
    )

}