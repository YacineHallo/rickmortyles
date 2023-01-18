import React from "react";

const Cards = () => {
  return <div className="col-4">Cards</div>;
};

export default Cards;

// import React, { useEffect } from "react";
// import styles from  "./Card.module.scss"
// //5. {results} zijn de waarden van prop results van <Card />
// //6. maak een const display > met wat er getoond wordt met results en wat er getoond wordt zonder results, dus if else
// //7. Maak nu de content for   if (results)  (is dus true). Je gaat de props results mappen (x) en maakt een const met een object met alle keys = x

// const Cards = ({ results }) => {
// const display = () =>{
// if (results) {
//   display = results.map(x) => {
// const {id, image, name, status, location} =x;
// return (
// <div key={id} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
// <div
//   className={`${styles.card} d-flex flex-column justify-content-center`}
// >
//   <img className={`${styles.img} img-fluid`} src={image} alt="" />
//   <div className={`${styles.content}`}>
//     <div className="fs-5 fw-bold mb-4">{name}</div>
//     <div className="">
//       <div className="fs-6 fw-normal">Last Location</div>
//       <div className="fs-5">{location}</div>
//     </div>
//   </div>
// </div>

// </div>

// );
//   }
// }
// else {
//   display = "No Characters Found ";
// }

// return <>{display}</>;
// }
// }

// export default Cards;
