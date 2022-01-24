import React from 'react';
import styled from 'styled-components';
import big_logo from '../images/big_logo.svg';

const Timeline = () => {
  return (
    <Timeline_Container>
      <Timeline_row>
        <Timeline_Content>
          <Time_Row1>
            <h1>lorem ipsum</h1>
          </Time_Row1>
          <Time_Row2>
            <Time_div1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quidem expedita possimus corporis? A, dolor aut
              deleniti at quisquam excepturi placeat unde soluta repellendus in
              quasi explicabo! Id consequuntur architecto labore. Dolorem amet
              repellat rerum quia explicabo accusamus natus?
            </Time_div1>
            <Time_div2>
              <img src={big_logo} alt='' />
            </Time_div2>
          </Time_Row2>
        </Timeline_Content>
        <Timeline_Content>
          <Time_Row1>
            <h1>lorem ipsum</h1>
          </Time_Row1>
          <Time_Row2>
            <Time_div1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quidem expedita possimus corporis? A, dolor aut
              deleniti at quisquam excepturi placeat unde soluta repellendus in
              quasi explicabo! Id consequuntur architecto labore. Dolorem amet
              repellat rerum quia explicabo accusamus natus?
            </Time_div1>
            <Time_div2>
              <img src={big_logo} alt='' />
            </Time_div2>
          </Time_Row2>
        </Timeline_Content>
        <Timeline_Content>
          <Time_Row1>
            <h1>lorem ipsum</h1>
          </Time_Row1>
          <Time_Row2>
            <Time_div1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias optio quidem expedita possimus corporis? A, dolor aut
              deleniti at quisquam excepturi placeat unde soluta repellendus in
              quasi explicabo! Id consequuntur architecto labore. Dolorem amet
              repellat rerum quia explicabo accusamus natus?
            </Time_div1>
            <Time_div2>
              <img src={big_logo} alt='' />
            </Time_div2>
          </Time_Row2>
        </Timeline_Content>
      </Timeline_row>
    </Timeline_Container>
  );
};

export default Timeline;

export const Timeline_Container = styled.div`
  height: 100vh;
  background: #000;
  color: #fff;
  padding: 0px 40px 0 40px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* width: 100%;
  width: 400vw; */
`;

export const Timeline_row = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  /* width: 100%; */
  position: relative;
  padding-top: 150px;

  &::before {
    content: '';
    height: 0.03472vw;
    min-height: 1px;
    position: absolute;
    color: #fff;
    background: #fff;
    width: 200vw;
    left: 0;
    top: 150px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Timeline_Content = styled.div`
  position: relative;
  width: 100vw;
  margin-right: 60px;
  &::before {
    content: '';
    height: 0.03472vw;
    min-height: 1px;
    position: absolute;
    color: #fff;
    background: #fff;
    width: 100%;
    left: 0;
    top: 0;
  }
`;
export const Time_Row1 = styled.div``;
export const Time_Row2 = styled.div`
  display: flex;
  margin-top: 30px;
`;
export const Time_div1 = styled.div`
  margin-top: 50px;
`;
export const Time_div2 = styled.div`
  width: 900px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
