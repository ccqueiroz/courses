import { useMemo } from "react";
import { CourseType } from "../../../models/Course";
import { Single } from "../Single";
import './index.styles.css';

interface GridInterface {
    items: Array<CourseType>
}

export const Grid = ({ items }: GridInterface) => {

    const renderList = useMemo(() => {
        return items.map(item => (
            <Single key={item.id} item={item} />
        ))
    }, [items]);

    return (
        <div>
            <div className="row">
                <ul>
                    {renderList}
                </ul>
            </div>
        </div>
    )
} 