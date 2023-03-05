import React from 'react';
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import {Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@mui/icons-material";
import {mobile} from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px 20px 20px;
  flex: 1;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>GLAMWAY</Logo>
                <Desc>
                    At GLAMWAY, we're committed to providing our customers with the best
                    shopping experience possible. Our extensive collection of high-quality
                    clothing and accessories is designed to keep you looking and feeling your best,
                    whether you're dressing up for a special occasion or keeping it casual on the weekends.
                    We're proud to offer a wide range of styles, sizes, and colors to suit every taste and budget.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>+1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/>contact@example.com
                </ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
            </Right>
        </Container>
    );
};

export default Footer;
