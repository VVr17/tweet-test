import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Logo from "assets/icons/logo_GoIt.svg";
import Button from "components/UI-Kit/Button";
import { CardStyled, LogoStyled, Text, UpperContainer } from "./Card.styled";

const Card = () => {
  const [followers, setFollowers] = useState(100500);

  useEffect(() => {
    const storedFollowers = localStorage.getItem("followers");
    if (storedFollowers) {
      setFollowers(parseInt(storedFollowers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("followers", followers.toString());
  }, [followers]);

  const getVisibleFollowers = (followers) => {
    const str = followers.toString();
    return str.slice(0, -3) + "," + str.slice(-3);
  };

  const getButtonStatus = (followers) => {
    return followers === 100500 ? "Follow" : "Following";
  };

  const handleClick = () => {
    if (followers === 100500) {
      setFollowers((prevState) => prevState + 1);
    } else {
      setFollowers((prevState) => prevState - 1);
    }
  };

  const buttonStatus = getButtonStatus(followers);

  return (
    <CardStyled>
      <UpperContainer>
        <LogoStyled src={Logo} alt="Logo" width="76px" height="22px" />
      </UpperContainer>
      <Avatar />
      <Text> 777 tweets</Text>
      <Text>{getVisibleFollowers(followers)} Followers</Text>
      <Button onClick={handleClick} name={buttonStatus}>
        {buttonStatus}
      </Button>
    </CardStyled>
  );
};

export default Card;
