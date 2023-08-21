import { CourseType } from "../../../models/Course"
import './index.styles.css';
interface SingleInterface {
    item: CourseType
}
export const Single = ({ item }: SingleInterface) => {

    return (
        <li className="col">
            <div className="card">
                <div className="card-image">
                    <img src={item.image} alt={item.title}/>
                </div>
                <div className="card-content">
                <span className="card-title">{item.title}</span>
                <p>{item.description}</p>
                <div className="row">
                    <div className="col">
                    <blockquote><h5>Released: {item.release_date}</h5></blockquote>
                    </div>
                    <div className="col">
                    <blockquote><h5>Views: {item.views}</h5></blockquote>
                    </div>
                </div>
                </div>
                <div className="card-action">
                    <a href={item.link} target="noopener _blank">Link to course</a>
                </div>
            </div>
            {/* <br/> */}
        </li>
    )
}