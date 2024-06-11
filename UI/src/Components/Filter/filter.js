import React from 'react';
import { ALL, DONE, IN_PROGRESS, TO_DO } from '../../constants';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter-container">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value={ALL}>All</option>
        <option value={TO_DO}>To-do</option>
        <option value={IN_PROGRESS}>In Progress</option>
        <option value={DONE}>Done</option>
      </select>
    </div>
  );
};

export default Filter;
