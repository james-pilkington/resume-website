// HeaderScroller.js
import { useRef } from "react";
import styled from "styled-components";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Util: Wrap around a range like a seamless loop
function wrap(min, max, v) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

// Styled components
const Parallax = styled.div`
  width: 100%;
  overflow: hidden;
  background: #282c34;
  color: White;
  letter-spacing: 2px;
  line-height: 0.7;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  font-family: "Plaster", sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
`;

const Scroller = styled(motion.div)`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 50px;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
`;

const ScrollerSpan = styled.span`
  display: block;
  margin-right: 30px;

`;

function HeaderText({ text, baseVelocity = 75 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <Parallax>
      <Scroller style={{ x }}>
        {[...Array(4)].map((_, i) => (
          <ScrollerSpan key={i}>{text}</ScrollerSpan>
        ))}
      </Scroller>
    </Parallax>
  );
}

export default function HeaderScroller({ text }) {
  return (
    <div >
      <HeaderText baseVelocity={-5} text={text} />
      <HeaderText baseVelocity={5} text={text} />
    </div>
  );
}
