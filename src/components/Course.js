import React from 'react';

const Course = (props) => {
    return (
        <div style={{
            borderBottom: "1px solid #000",
            borderRight: "1px solid #000",
            padding: "3rem 0"
        }}>
            <img style={{height: "100px"}} src={props.course.img} alt="" />
            <h2>{props.course.title}</h2>
            <p><small>Instractor: {props.course.instractor}</small></p>
            <p>description: <b>{props.course.description}</b></p>
            <p>Enrolled Students: <b>{props.course.student}</b></p>
            <h4>Price: <b>${props.course.price}</b></h4>
            <button onClick={() => props.handleAddCourse(props.course)} className="btn btn-success mt-3">Enroll Now</button>
        </div>
    );
};

export default Course;