import React from "react";
import { Container } from "./Container";
import { NameTitle } from "./NameTitle";
import { Conditions } from "./Conditions";

interface IConditionProps {
  label: string;
  text: string;
}

export interface ICondition {
  title: string;
  conditions: IConditionProps[] | string;
}

interface IBeforeYouBook {
  beforeYouBook: ICondition[];
}

export const BeforeYouBook = ({ beforeYouBook }: IBeforeYouBook) => {
  return (
    <Container bgWhite={false}>
      <div>
        <NameTitle propertyName="Deja View's" title="BEFORE YOU BOOK" />
        <div className="divide-y space-y-8">
          {beforeYouBook.map((item, index) => {
            return <Conditions data={item} key={index} index={index} />;
          })}
        </div>
      </div>
    </Container>
  );
};
