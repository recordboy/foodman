import React, { useState } from 'react';
const FoodForm = (props: {
  createList: (data: string) => void;
  deleteList: () => void;
}) => {
  const [inputData, setInputData] = useState('');
  const { createList, deleteList } = props;
  return (
    <div className="search">
      <input
        type="text"
        id="input-txt"
        className="inputTxt"
        value={inputData}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputData(e.target.value);
        }}
      />
      <div className="btnArea">
        <button
          type="button"
          onClick={() => {
            createList(inputData);
            setInputData('');
          }}
        >
          add
        </button>
        <button
          type="button"
          onClick={() => {
            deleteList();
          }}
        >
          all delete
        </button>
        <button type="button" id="btn-mix" className="btnMix">
          mix
        </button>
        <button type="button" id="btn-select" className="btnSelect">
          select
        </button>
      </div>
    </div>
  );
};

export default FoodForm;
