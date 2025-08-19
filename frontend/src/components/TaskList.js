import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TaskItem from "./TaskItem";
const TaskList = ({ tasks, onUpdate, onDelete, onToggle }) => {

  const settings = {
    infinite: true,        
    slidesToShow: 1,       
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 2500,   
    arrows: true,          
    dots: true,            
    pauseOnHover: true,    
  };

 return (
    <div>
      <h2>Task List</h2>
      <Slider {...settings}>
        {tasks.map((task) => (
          <div key={task.id}>
            <TaskItem
              task={task}
              onUpdate={onUpdate}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TaskList;
