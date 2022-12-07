import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Button } from "antd";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_USER_SAGA } from "../../../redux/sagas/contants/manageUserContants";
const { Option } = AutoComplete;

function UserSearch(props) {
  const { allUser } = useSelector((state) => state.userReducer);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  return (
    <div className="flex ">
      <AutoComplete
        style={{
          width: 200,
        }}
        onSearch={(value) => {
          if (searchRef.current) {
            clearTimeout(searchRef.current);
          }
          searchRef.current = setTimeout(() => {
            dispatch({
              type: SEARCH_USER_SAGA,
              username: value,
            });
          }, 500);
        }}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        onSelect={(value, option) => {
          setValue(option.label);
          dispatch({
            type: SEARCH_USER_SAGA,
            username: option.label,
          });
        }}
        options={allUser.map((user, index) => {
          return {
            label: user.username,
            value: user._id,
          };
        })}
        placeholder="Tim kiem"
      />
      <div className="mb-2">
        <Button
          icon={<SearchOutlined />}
          size="medium"
          onClick={() => {
            dispatch({
              type: SEARCH_USER_SAGA,
              username: value,
            });
          }}
        >
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
}

export default UserSearch;
