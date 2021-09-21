import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaHome, FaUserAlt, FaDesktop, FaVideo } from "react-icons/fa";

const Container = styled.aside`
  padding: 2rem;
`;

const NavBar = styled.nav``;

const CustomLink = styled.a`
  display: flex;
  text-transform: uppercase;
  font-size: 1.75rem;
  margin-block: 2rem;
  cursor: pointer;
  background: linear-gradient(to right, var(--gray) 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.2s ease-in-out;
  width: max-content;
  align-items: center;
  border-radius: 50px;

  &:hover {
    background-position: left bottom;

    span {
      opacity: 1;
    }

    span:first-child {
      transform: rotate(360deg);
    }
  }
`;

const LinkIcon = styled.span`
  display: flex;
  font-size: 3.5rem;
  background: var(--gray);
  padding: 1rem;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease-in-out;
`;

const LinkText = styled.span`
  display: block;
  padding-right: 1.5rem;
  opacity: 0;
  transition: all 0.3s ease-in;
`;

export default function Sidebar() {
  return (
    <Container>
      <NavBar>
        <Link href="/">
          <CustomLink>
            <LinkIcon>
              <FaHome />
            </LinkIcon>
            <LinkText>Home</LinkText>
          </CustomLink>
        </Link>
        <Link href="/about">
          <CustomLink>
            <LinkIcon>
              <FaUserAlt />
            </LinkIcon>
            <LinkText>About</LinkText>
          </CustomLink>
        </Link>
        <Link href="/projects">
          <CustomLink>
            <LinkIcon>
              <FaDesktop />
            </LinkIcon>
            <LinkText>Projects</LinkText>
          </CustomLink>
        </Link>
        <Link href="/videos">
          <CustomLink>
            <LinkIcon>
              <FaVideo />
            </LinkIcon>
            <LinkText>Videos</LinkText>
          </CustomLink>
        </Link>
      </NavBar>
    </Container>
  );
}
