import { useContext } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.compoent";

import "./shop.styles.scss";
import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
