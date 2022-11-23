import styled from '@emotion/styled'

type FooterItems = FooterItem[]

interface FooterItem {
  title: string
  link: string
}

const URL_PREFIX = 'https://docs.github.com/en/site-policy'

const Footer = () => {
  const footerItems: FooterItems = [
    {
      title: 'Terms',
      link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
    },
    { title: 'Privacy', link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
    { title: 'Status', link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
    { title: 'Docs', link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
    { title: 'Contact Github', link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
    { title: 'Pricing', link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
    { title: 'API', link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
    { title: 'Training', link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
    { title: 'Blog', link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
    { title: 'About', link: `${URL_PREFIX}/github-terms/github-terms-of-service` },
  ]
  return (
    <Wrapper>
      {footerItems.map(({ link, title }) => {
        return (
          <Item key={title}>
            <Link href={link}>{title}</Link>
          </Item>
        )
      })}
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 40px 16px 8px;
  border-top: 1px solid #d0d7de;
`

const Item = styled.li`
  margin-right: 20px;
`

const Link = styled.a`
  color: #0969da;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`
