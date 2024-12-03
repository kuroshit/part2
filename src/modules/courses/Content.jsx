import Part from "./Part";

const Content = ({courses}) => {
    return (
      <>
        {courses.map(course => (
            <Part key = {course.id} data={course}/>
        ))}
      </>
    );
  };
  
  export default Content;