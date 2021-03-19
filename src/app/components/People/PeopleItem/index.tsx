import React, { FC, useState } from "react";
import { Button, Input } from "antd";

import "../people.scss";
import { Person } from "../types";
const { TextArea } = Input;

type Props = {
  person: Person;
};

const PeopleItem:FC<Props> = (props) => {

  const { person } = props;
  const [ isComment, setIsComment ] = useState(false);
  const [ comment, setComment ] = useState("");
  const [ newComment, addNewComment ] = useState("");

  const handleToggleComment = () => {
    setIsComment(true);
  };
  const handleChangeComment = (e:any) => {
    setComment(e.target.value);
  };
  const handleAddComment = () => {
    addNewComment(comment);
    setIsComment(false);
  };

  return (
    <div key={person?.name} className="peopleItem">
      <div className="peopleItem__person">
        <div className="peopleItem__info">{person?.name}</div>
        <Button size="small" type="primary" ghost onClick={handleToggleComment}>
          {newComment.length > 0 ? "edit comment" : "comment"}
        </Button>
      </div>
      {newComment.length > 0 && <div>
        <p className="peopleItem__comment">
          {newComment}
        </p>
      </div>}
      {isComment && <div className="peopleItem__form">
        <TextArea className="peopleItem__comment-area" rows={4} value={comment} onChange={handleChangeComment}/>
        <Button type="primary" onClick={handleAddComment}>
          Add comment
        </Button>
      </div>}
    </div>
  );

};

export default PeopleItem;