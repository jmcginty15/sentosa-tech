import './JobDescription.css';

const JobDescription = ({ description, level }) => {
    return (
        <div className="JobDescription">
            {level === 1 && <h4>{description.name}</h4>}
            {level === 2 && <h5 className="JobDescription-ul-2">{description.name}</h5>}
            {level === 3 && <h6 className="JobDescription-ul-3">{description.name}</h6>}
            {typeof description.points[0] === 'string' ? <ul className={`JobDescription-ul-${level}`}>
                {description.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul> : description.points.map(point => <JobDescription description={point} level={level + 1} key={point.name} />)}
        </div>
    )
}

export default JobDescription;
