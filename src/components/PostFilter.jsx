import React from 'react';
import MyInput from "./UI/MyInput";
import MySelect from "./UI/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder={"Поиск"}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort"
                options={
                    [
                        {value: 'title', name: 'by the name'},
                        {value: 'description', name: 'by the desc'}
                    ]
                }
            />
        </div>
    );
};

export default PostFilter;