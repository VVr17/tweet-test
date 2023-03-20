import React from "react";
import Card from "components/Card/Card";
import users from "assets/users.json";
import { ListStyled } from "./CardList.styled";

const CardList = () => {
  return (
    <ListStyled>
      {users &&
        users.map(({ avatar, user, id, tweets, followers }) => (
          <li key={id}>
            <Card
              name={user}
              tweets={tweets}
              initialFollowers={followers}
              avatarUrl={avatar}
            />
          </li>
        ))}
    </ListStyled>
  );
};

export default CardList;
