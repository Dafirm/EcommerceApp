import { FaStar } from "react-icons/fa";

export const StarRatings = () => {
     const rating = ((Math.random() * 5) | 0) + 1;
  return (
    <div style={{ display: "flex" }}>
      {[...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
       
        return (
          <div key={i}>
            <FaStar
              size={20}
             
              color={ratingVal <= rating ? "#ffc107" : "#e4e5e9"}
            />
          </div>
        );
      })}
    </div>
  );
};