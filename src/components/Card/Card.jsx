import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import Button from "components/UI-Kit/Button";
import Logo from "assets/icons/logo_GoIt.svg";
import { CardStyled, LogoStyled, Text, UpperContainer } from "./Card.styled";

const Card = ({ name, tweets, avatarUrl, initialFollowers }) => {
  const [followers, setFollowers] = useState(initialFollowers);

  useEffect(() => {
    const storedFollowers = localStorage.getItem(`${name}Followers`);
    if (storedFollowers) {
      setFollowers(parseInt(storedFollowers));
    }
  }, [name]);

  useEffect(() => {
    localStorage.setItem(`${name}Followers`, followers.toString());
  }, [followers, name]);

  const getVisibleFollowers = (followers) => {
    const str = followers.toString();
    return str.slice(0, -3) + "," + str.slice(-3);
  };

  const getButtonStatus = (followers) => {
    return followers === initialFollowers ? "Follow" : "Following";
  };

  const handleClick = () => {
    if (followers === initialFollowers) {
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
      <Avatar name={name} avatarUrl={avatarUrl} />
      <Text> {tweets} tweets</Text>
      <Text>{getVisibleFollowers(followers)} Followers</Text>
      <Button onClick={handleClick} name={buttonStatus}>
        {buttonStatus}
      </Button>
    </CardStyled>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  initialFollowers: PropTypes.number.isRequired,
};

export default Card;
