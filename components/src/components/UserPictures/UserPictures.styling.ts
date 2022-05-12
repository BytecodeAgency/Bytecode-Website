import { theme } from "../../theme";
import styled from "styled-components";
import { UserPictureStylingProps } from "./UserPicture.types";

export const Container = styled.div`
  margin: 7px; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserPictureContainer = styled.figure<UserPictureStylingProps>`
  margin: 0;  
  padding: 0;
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  background-color: ${props => props.bgColor}; 
  border-radius: ${props => props.size}px;
  border: 1px solid ${theme.colors.black};

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 2;
  overflow: hidden;
`;

export const ShadowContainer = styled.div<UserPictureStylingProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.shadowColor}; 
  border-radius: ${props => props.size}px;
  border: 1px solid ${theme.colors.black};

  position: absolute;
  ${props => props.shadowPosition}
  z-index: 1;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

export const Photo = styled.div<UserPictureStylingProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: relative;
`;

export const Balloon = styled.div`
  margin-left: 20px;
`;