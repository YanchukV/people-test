import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Breadcrumb, Spin } from "antd";

import "./people.scss";
import { getPeopleList, isPeopleLoading } from "./selectors";
import { Person } from "./types";
import PeopleItem from "./PeopleItem";

const People:FC = () => {

  const isLoading = useSelector(isPeopleLoading);
  const people = useSelector(getPeopleList);

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>People</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        {isLoading ? (<div className="spinner"><Spin tip="Loading..." /></div>):(
            people?.map((person: Person)=>(
              <PeopleItem key={person?.name} person={person} />
            ))
        )}
      </div>
    </>
  );

};

export default People;