import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { IconComponent, IconType, IconSize } from "./icons";
import { C } from "./typography";
const Nav = styled.nav``;

const List = styled.ol`
  display: flex;
  align-items: stretch;
  gap: ${({ theme }) => theme.size.m};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.size.xs};
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const CrumbLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

export default function Breadcrumbs() {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { href, label };
  });

  return (
    <Nav aria-label="breadcrumb">
      <List>
        <ListItem>
          <IconWrapper>
            <CrumbLink href="/">
              <IconComponent
                icon={IconType.HOME}
                size={IconSize.S}
                aria-label="Home"
              />
            </CrumbLink>
          </IconWrapper>
        </ListItem>

        {breadcrumbs.map((crumb, i) => (
          <>
            <ListItem>
              <C>/</C>
            </ListItem>
            <ListItem key={i}>
              <Link href={crumb.href}>
                <C>{crumb.label}</C>
              </Link>
            </ListItem>
          </>
        ))}
      </List>
    </Nav>
  );
}
