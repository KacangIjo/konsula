import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const ActiveWrapper = styled.div`
  position: relative;
  padding: 5px;
  border: 3px solid #fff;
  border-radius: 10px;

  &.active {
    border-color: green;
  }
`;

const RadioButton = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
  transform: translate(-50%, -50%);

  width: 30px;
  height: 30px;

  border: 1px solid #000;
  background-color: #fff;
  border-radius: 50%;
  z-index: 3;

  ${ActiveWrapper}.active & {
    background-color: green;
    border-color: green;
  }
`;

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 75%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  object-fit: cover;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80%;
  height: 80px;
  padding: 10px;

  left: 50%;

  transform: translate(-50%, -50%);

  color: #fff;
  background-color: cadetblue;

  text-align: center;

  p {
    display: inline-block;
    margin: 0;
    text-align: center;
    font-size: 0.9rem;
  }
`;

const ContentWrapper = styled.div`
  padding: 60px 0 30px;

  border: 1px solid rgba(0, 0, 0, 0.125);
  border-top: none;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Content = styled.p`
  margin: 0 auto 5px;
  width: 80%;
  font-weight: 500;
  font-size: 0.75rem;
  text-align: center;

  @media all and (max-width: 575px) {
    font-size: 1rem;
  }
`;

type UniversitySuggestionItemProps = {
    imgUrl?: string;
    rank?: string;
    nama?: string;
    tuition?: string;
    admin?: string;
    living?: string;
    isActive?: boolean;
    year?: string;
};

const UniversitySuggestionItem = ({
                                      imgUrl,
                                      rank,
                                      tuition,
                                      nama,
                                      living,
                                      admin,
                                      year,
                                      isActive
                                  }: UniversitySuggestionItemProps) => {
    const [imageRef, setImageRef] = useState<HTMLInputElement | null>(null);
    const [top, setTop] = useState(0);
    
    const setTopByRef = useCallback(() => {
        if (imageRef) {
            setTop(imageRef.offsetHeight);
        }
    }, [imageRef]);
    
    const onRefChange = useCallback(
        (node: HTMLInputElement | null) => {
            setImageRef(node);
        },
        [setImageRef]
    );
    
    useEffect(() => {
        window.addEventListener('resize', setTopByRef);
        
        return () => {
            window.removeEventListener('resize', setTopByRef);
        };
    }, [setTopByRef]);
    
    useEffect(() => {
        if (imageRef) {
            setTop(imageRef.offsetHeight);
        }
    }, [imageRef]);
    
    return (
        <ActiveWrapper className={isActive ? 'active' : undefined}>
            <RadioButton/>
            <Wrapper>
                <ImageWrapper ref={onRefChange}>
                    <Image src={imgUrl}/>
                </ImageWrapper>
                <Name style={{top: `${top}px`}}>
                    <p>{nama}</p>
                </Name>
                <ContentWrapper>
                    <Content><b>Proyeksi {year}</b></Content>
                    <Content>Tuition Fee: {tuition}</Content>
                    <Content>Admin Fee: {admin}</Content>
                    <Content>Living Cost: {living}</Content>
                </ContentWrapper>
            </Wrapper>
        </ActiveWrapper>
    );
};

export default UniversitySuggestionItem;
