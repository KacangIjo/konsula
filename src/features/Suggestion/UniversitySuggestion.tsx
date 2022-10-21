import React from "react";
import Container from "../../components/Container";
import UniversitySuggestionItem from "./UniversitySuggestionItem";
import styled from "styled-components";

const Wrapper = styled(Container.Flex)`
  @media all and (max-width: 767px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

// dummy props
type UniversitySuggestionProps = {
  suggested?: boolean;
};

const UniversitySuggestion = ({ suggested }: UniversitySuggestionProps) => {
  return (
    <Wrapper flexWrap="wrap" alignItems="center" gap="15px">
      {suggested && (
        <>
          <UniversitySuggestionItem
            imgUrl="/images/ntu.jpg"
            tuition="IDR 200.000.000"
            admin="IDR 15.000.000"
            living="IDR 30.000.000"
            rank="4"
          />
          <UniversitySuggestionItem
            imgUrl="/images/uva.jpg"
            tuition="IDR 150.000.000"
            admin="IDR 17.000.000"
            living="IDR 30.000.000"
            rank="6"
          />
          <UniversitySuggestionItem
            imgUrl="/images/monash.jpg"
            tuition="IDR 110.000.000"
            admin="IDR 15.000.000"
            living="IDR 30.000.000"
            rank="7"
          />
        </>
      )}

      {!suggested && (
        <>
          <UniversitySuggestionItem
            imgUrl="/images/ui.jpg"
            tuition="IDR 50.000.000"
            admin="IDR 5.000.000"
            living="IDR 10.000.000"
            rank="20"
          />
          <UniversitySuggestionItem
            imgUrl="/images/itb.jpg"
            tuition="IDR 50.000.000"
            admin="IDR 4.000.000"
            living="IDR 5.000.000"
            rank="32"
          />
          <UniversitySuggestionItem
            imgUrl="/images/prasmul.jpg"
            tuition="IDR 50.000.000"
            admin="IDR 4.500.000"
            living="IDR 8.000.000"
            rank="44"
          />
        </>
      )}
    </Wrapper>
  );
};

export default UniversitySuggestion;
