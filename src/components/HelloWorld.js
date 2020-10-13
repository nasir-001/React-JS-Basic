import React from 'react';

// function HelloWorld(props) {
//     return (
//       <h1 className="text-4xl text-center text-pink-500">Hello { props.name }</h1>
//     );
//   }

class HelloWorld extends React.Component{
  render() {
    return (
      <h1 className="text-4xl text-center text-pink-500">Hello {this.props.name} </h1>
    )
  }
}

export default HelloWorld;
  