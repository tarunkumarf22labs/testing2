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
  title: string;
  beforeYouBook: ICondition[];
}

export const BeforeYouBook = ({ title,beforeYouBook }: IBeforeYouBook) => {
  
  return (
    <Container bgWhite={false}>
      <div>
        <NameTitle propertyName={`${title}'s`} title="BEFORE YOU BOOK" />
        <div className="space-y-8 divide-y">
          {beforeYouBook.map((item, index) => {
            return <Conditions data={item} key={index} index={index} />;
          })}
        </div>
      </div>
    </Container>
  );
};
