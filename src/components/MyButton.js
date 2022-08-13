/* eslint react/prefer-stateless-function: 0 */
/* eslint  react/prop-types: 0 */

import React from 'react';

class MyButton extends React.Component {
  render() {
    const { val, classN } = this.props;
    return <button className={classN} type="button">{val}</button>;
  }
}

export default MyButton;
