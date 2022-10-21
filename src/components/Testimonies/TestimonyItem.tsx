import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 0;
`;

const Inner = styled.div`
  position: relative;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
  //box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Content = styled.p`
  font-size: 14px;
  margin: 0 0 10px;
  font-style: italic;
`;

const TestimonyName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: right;
`;

const TestimonyItem = () => {
  return (
    <Wrapper>
      <Inner>
        <Content>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
          pellentesque libero. Sed eget finibus ipsum. Pellentesque lacinia
          rutrum placerat."
        </Content>
        <TestimonyName>- Jerome</TestimonyName>
      </Inner>
    </Wrapper>
  );
};

export default TestimonyItem;
