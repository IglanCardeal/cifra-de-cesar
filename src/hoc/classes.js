import React from 'react';

const classes = (Wrapped, nameClass) => {
  return class extends React.Component {
    render() {
      return (
        <div className={nameClass}>
          <Wrapped {...this.props} />
        </div>
      )
    }
  }
}

export default classes;
