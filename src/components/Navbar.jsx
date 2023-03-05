import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive'

const Container = styled.div`
  height: 80px;
  ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
  align-items: center;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`

const Input = styled.input`
  background: transparent;
  border: none;
  ${mobile({width: "40px", fontSize: "12px"})}
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgrey;
  margin-left: 25px;
  padding: 5px;
`

const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

const Logo = styled.h1`
  ${mobile({fontSize: "18px", marginLeft: "10px"})}
`

const Center = styled.div`
  align-items: center;
  flex: 2;
  text-align: center;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  text-align: center;
  ${mobile({flex: 1, justifyContent: "center", marginRight: "10px" })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "11px", marginLeft: "10px"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <SearchIcon style={{color: "grey", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>GLAMWAY</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action"/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
