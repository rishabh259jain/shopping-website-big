import React from "react";
import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.componet.jsx";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const {collections} =this.state; // made a new object with a collections property and assign our new object(with a property) to this.state(full object)
    return(
      <div className="shop-page">
        {
          collections.map(({id,...otherCollectionItemProps}) => (
            <CollectionPreview key={id} {...otherCollectionItemProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;
