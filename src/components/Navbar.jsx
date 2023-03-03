import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height: 80px;
`

const Wrapper = styled.div`
  align-items: center;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const Input = styled.input`
  background: transparent;
  border: none;
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
  
`

const Center = styled.div`
  align-items: center;
  flex: 1;
  text-align: center;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  text-align: center;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
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
