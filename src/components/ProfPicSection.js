import Figure from "react-bootstrap/Figure";
import React from "react";

function ProfPicSection(props) {
  console.log(props)
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={props.user.imageUrl ? props.user.imageUrl: "https://res.cloudinary.com/teepublic/image/private/s--1oaG9ScN--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1589640408/production/designs/10227750_0.jpg"}
        className="profilePic"
      />
    </Figure>
  );
}

export default ProfPicSection;
