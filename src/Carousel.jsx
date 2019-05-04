import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  // static because it doesn't change anything internally
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }

  // arrow func doesn't need binding "this" because it doesn't create scope unlike function()
  handleIndexClick = event => {
    this.setState({
      // + makes dataset.index number-type from string
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // because we don't want to a button
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              src={photo.value}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="thumnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
