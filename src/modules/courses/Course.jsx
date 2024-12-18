import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} hsize={'h2'}/>
      <Content courses={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
