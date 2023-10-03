import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  
  return (
    <div>
      <h2 className="text-2xl font-medium">All Caterogy</h2>
      {categories.map((category) => (
        <NavLink
          className="block mb-4 mt-3 pl-4 text-xl text-[#9F9F9F] font-medium"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
