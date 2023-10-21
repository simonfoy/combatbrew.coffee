import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  padding-bottom: 15px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  padding-bottom: 10px;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const ProductCard = ({ imgSrc, title, price }) => {
  return (
    <CardContainer>
      <ProductImage src={imgSrc} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>${price}</ProductPrice>
    </CardContainer>
  );
};

export default ProductCard;