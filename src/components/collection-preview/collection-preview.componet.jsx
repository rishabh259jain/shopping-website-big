import React from "react";

import "./collection-preview.styles.css";

import CollectionItem from "../collection-item/collection-item.componet";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4) //this shows that default initilization of idx varaiable is 0. so, idx-> 0,1,2,3 (4 times)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
