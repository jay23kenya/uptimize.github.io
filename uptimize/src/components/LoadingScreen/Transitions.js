import { keyframes } from "styled-components";

export const slideOutLeft = keyframes`
from {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}
`;

//Doesn't currently work :(
export const slideOutRight = keyframes`
from {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
`;

export const slideOutUp = keyframes`
from {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}
`;

//Doesn't currently work :(
export const slideOutDown = keyframes`
from {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}
`;

export const none = keyframes`
from {
}

to {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
}

`;
