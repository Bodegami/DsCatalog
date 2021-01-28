import React from 'react';
import { ReactComponent as ArrowIcon } from "core/assets/images/arrow.svg";
import './styles.scss';
import { generateList } from 'core/utils/list';


const Pagination = () => {
  const items = generateList(10);

  return (
    <div className="pagination-container">
      <ArrowIcon className="pagination-previous" />
      {items.map(item => (
        <div
          key={item}
          className="pagination-item active"
        >
          {item + 1}
        </div>
      ))}
      <ArrowIcon className="pagination-next" />
    </div>

  );
}

export default Pagination;