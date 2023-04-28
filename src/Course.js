import React from "react";

// export const Course = () => {
//   return (
//     <div>Course div</div>
//   )
// }

// function Course(props) {
function Course({ image, title, description }) {
  // console.log(props);
  //daha profesyonellik için deiğişkene atamak
  // const title=props.title;
  // const description=props.description;
  //daha profesyonel olması için; yukarıdakini tek satıra indirgemek
  // const {title,description}=props;
  //title adlı bir değişken oluştur bunu props.title a eşitle
  //description adlı bir değişken oluştur bunu props.description a eşitle

  //daha da kısaltmak için
  //yukarıya Course(props) yerine Course(title, description) yazabilirsin

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="My Courses" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default Course;
