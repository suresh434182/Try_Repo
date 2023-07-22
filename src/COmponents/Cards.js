import React from 'react';
import Card from './Card';
const Cards=(({Courses})=>{
    let allCourses=[];

    // returns you a list of cource recived from API
    const getCourses=()=>{
        console.log("printing all courses");
        console.log(Courses);
        Object.values(Courses).forEach((courceCategory)=>{
            courceCategory.forEach((Courses)=>{
                allCourses.push(Courses);
            })
        })
        return allCourses;
        
    }

    return(
        <div>
        {
        getCourses().map((course)=>{
           return <Card key={course.id} course={course} />
        })
        }
        </div>
    )

})

export default Cards;