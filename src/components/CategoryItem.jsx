import React from 'react';
import styled from 'styled-components'
import {mobile} from "../responsive";
import {Link, NavLink} from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 60vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  ${mobile({height: "25vh"})}
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 500;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <NavLink style={{ color: "inherit" }} to={`/products/${item.cat}`}>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </NavLink>
        </Container>
    );
};

export default CategoryItem;
