import React from 'react';

class Sushi extends React.Component {
  state = {
    eaten: false,
  };

  eatSushi = (e) => {
    const cost = parseInt(
      e.target.parentElement.parentElement.children[1].textContent.split(
        '$'
      )[1],
      10
    );
    if (this.state.eaten === false && this.props.money >= cost) {
      this.setState(() => ({
        eaten: true,
      }));
      this.props.empties(cost);
    }
  };

  render() {
    const { name, img_url, price } = this.props.sushi;
    return (
      <div className='sushi'>
        <div className='plate' onClick={this.eatSushi}>
          {this.state.eaten ? null : (
            <img alt={name} src={img_url} width='100%' />
          )}
        </div>
        <h4 className='sushi-details'>
          {name} - ${price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
