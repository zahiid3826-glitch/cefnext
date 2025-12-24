import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronRightIcon } from 'lucide-react'
import type { NavigationMenuProps } from '@radix-ui/react-navigation-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

interface SubItem {
  label: string
  to: string
  icon?: React.ReactNode
}

interface SocialIcon {
  name: string
  url: string
  icon: string
}

interface DropdownLink {
  label: string
  to: string
  hasSubItems?: boolean
  subItems?: Array<SubItem>
  specialNote?: string
  socialIcons?: Array<SocialIcon>
}

interface NavigationItem {
  label: string
  to?: string
  hasDropdown: boolean
  dropdownLinks: Array<DropdownLink>
}

const navigationItems: Array<NavigationItem> = [
  {
    label: 'About us',

    hasDropdown: true,
    dropdownLinks: [
      { label: 'Vision, Mission & Core Values', to: '/vision-mission-core' },
      { label: 'Board Of Directors', to: '/bod' },
      { label: 'Management Team', to: '/management' },
    ],
  },
  {
    label: 'Our Programs',

    hasDropdown: true,
    dropdownLinks: [
      { label: 'Character Building Program', to: '/cbp' },
      { label: 'Quran & Sunnah Program', to: '/qsp' },
      { label: 'Community Development Program', to: '/cdp' },
      { label: 'Youth Leadership Program', to: '/ylp' },
      { label: 'Mentor Development Program', to: '/mdp' },
    ],
  },
  {
    label: 'Institutions',

    hasDropdown: true,
    dropdownLinks: [
      { label: 'CE Academics', to: '/academies' },
      { label: 'CE Institutes', to: '/institutes' },
      { label: 'CE Homes', to: '/homes' },
    ],
  },
  {
    label: 'Publications',
    hasDropdown: true,
    dropdownLinks: [
      {
        label: 'Brochures',
        to: '/brochures',
        hasSubItems: true,
        subItems: [
          { label: 'CEF Brief Profile', to: '/brochures/cef-brief-profile' },
          {
            label: 'CEF Corporate Brochure',
            to: '/brochures/cef-corporate-brochure',
          },
        ],
      },
      {
        label: 'Book Catalogues',
        to: '/catalogues',
      },
      {
        label: 'Newsletters',
        to: '/newsletters',
        hasSubItems: true,
        subItems: [
          { label: 'Apr 2025', to: '/newsletters/apr-2025' },
          { label: 'Mar 2025', to: '/newsletters/mar-2025' },
          { label: 'Feb 2025', to: '/newsletters/feb-2025' },
          { label: 'Jan 2025', to: '/newsletters/jan-2025' },
          { label: 'Dec 2024', to: '/newsletters/dec-2024' },
          { label: 'Nov 2024', to: '/newsletters/nov-2024' },
        ],
        specialNote: 'Only latest 6 Newsletters',
      },
      {
        label: 'Annual Reports',
        to: '/annual-reports',
        hasSubItems: true,
        subItems: [
          { label: '2023-24', to: '/annual-reports/2023-24' },
          { label: '2023-22', to: '/annual-reports/2023-22' },
          { label: '2022-21', to: '/annual-reports/2022-21' },
        ],
        specialNote: 'Only latest 3 Annual Reports',
      },
    ],
  },
  {
    label: 'Media Center',
    hasDropdown: true,
    dropdownLinks: [
      { label: 'Our Story', to: '/success-stories' },
      {
        label: 'Documentaries',
        to: '/documentaries',
        hasSubItems: true,
        subItems: [
          {
            label: 'CEF Corporate Documentary',
            to: '/documentaries/cef-corporate',
          },
        ],
      },
      { label: 'Podcasts', to: '/podcasts' },
      { label: 'Messages', to: '/management-msgs' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Blogs', to: '/blogs' },
      { label: 'News & Updates', to: '/news' },
      {
        label: 'Social Media',
        to: '/',
        hasSubItems: true,
        subItems: [
          {
            label: 'Facebook',
            to: 'https://facebook.com',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fill="#1877F2"
                  d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4v-2.3c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.3V12H16l-.4 3h-2.2v7A10 10 0 0 0 22 12z"
                />
              </svg>
            ),
          },
          {
            label: 'Instagram',
            to: 'https://instagram.com',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fill="#E1306C"
                  d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7z"
                />
                <path
                  fill="#fff"
                  d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.5-8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
            ),
          },
          {
            label: 'YouTube',
            to: 'https://youtube.com',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fill="#FF0000"
                  d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-1C16.4 4.5 12 4.5 12 4.5s-4.4 0-7 .5c-.4.2-1.3.2-2 1-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.6.8 2 1 2.6.5 7 .5 7 .5s4.4 0 7-.5c.4-.2 1.3-.2 2-1 .6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2z"
                />
                <path fill="#fff" d="M10 14.7V9.3l5.3 2.7L10 14.7z" />
              </svg>
            ),
          },
          {
            label: 'X',
            to: 'https://twitter.com',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fill="#000000"
                  d="M18 2h3l-7.5 8.6L22 22h-7l-5-6.7L4 22H1l8-9.2L2 2h7l4.3 5.7L18 2z"
                />
              </svg>
            ),
          },
          {
            label: 'Pinterest',
            to: 'https://pinterest.com',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fill="#E60023"
                  d="M12 2a10 10 0 0 0-3.5 19.4c-.1-.8-.2-2 .1-2.9.2-.7 1.2-4.8 1.2-4.8s-.3-.7-.3-1.8c0-1.7 1-3 2.2-3 1 0 1.5.7 1.5 1.6 0 1-.7 2.6-1 4-.3 1.1.6 2 1.7 2 2 0 3.5-2.1 3.5-5 0-2.6-1.9-4.4-4.7-4.4-3.2 0-5.1 2.4-5.1 4.8 0 .9.3 1.8.8 2.3-.1.3-.3 1-.4 1.1-.1.1-.2.2-.4.1-1.3-.6-2-2.4-2-3.9 0-3.1 2.3-6 6.8-6 3.6 0 6.4 2.6 6.4 6.1 0 3.6-2.3 6.5-5.6 6.5-1.1 0-2.2-.6-2.5-1.2l-.7 2.6c-.2.8-.7 1.8-1 2.4A10 10 0 1 0 12 2z"
                />
              </svg>
            ),
          },
          {
            label: 'WhatsApp',
            to: 'https://whatsapp.com',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fill="#25D366"
                  d="M20 3.5A10.5 10.5 0 0 0 2 19l-1 4 4-1a10.5 10.5 0 0 0 15-14.5zM12 19.5a8 8 0 0 1-4.2-1.2l-.3-.2-2.5.6.6-2.4-.2-.3A8 8 0 1 1 12 19.5z"
                />
                <path
                  fill="#25D366"
                  d="M16.4 14c-.2-.1-1.2-.6-1.4-.6s-.3 0-.5.2-.5.6-.7.7c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-2-1.3 7.5 7.5 0 0 1-1.3-2c0-.2 0-.3.1-.5.1-.1.5-.6.6-.8.1-.1.2-.3.1-.5s-.4-1-.6-1.4c-.1-.3-.3-.3-.5-.3h-.4c-.1 0-.5.1-.7.3-.2.2-1 1-1 2.4s1 2.7 1.1 2.9a9 9 0 0 0 3.3 3.3c.4.2 1.2.5 2 .6.8.2 1.5.1 2.1.1.6-.1 1.2-.6 1.4-1.1.2-.6.2-1 .2-1s0-.2-.2-.3z"
                />
              </svg>
            ),
          },
          {
            label: 'LinkedIn',
            to: 'https://linkedin.com',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fill="#0077B5"
                  d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.6v1.7h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.6 4.6 6V21h-4v-5.2c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"
                />
              </svg>
            ),
          },
        ],
      },
    ],
  },
  {
    label: 'Contact Us',
    to: '/contact',
    hasDropdown: false,
    dropdownLinks: [],
  },
]

export const NavMenu = (props: NavigationMenuProps) => {
  const [hoveredDropdownItem, setHoveredDropdownItem] = useState<string | null>(
    null,
  )
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null,
  )
  const isVertical = props.orientation === 'vertical'

  return (
    <NavigationMenu viewport={false} {...props}>
      <NavigationMenuList className="gap-0 space-x-0  data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:w-full relative">
        {navigationItems.map((item) =>
          item.hasDropdown ? (
            <NavigationMenuItem
              key={item.label}
              className={isVertical ? 'w-full' : 'relative'}
            >
              {isVertical ? (
                <button
                  className="text-primary font-semibold lg:!text-[0.6rem] xl:!text-[0.8rem] 2xl:!text-[0.9rem] hover:text-primary hover:font-bold w-full text-left p-1 flex items-center justify-between"
                  onClick={() =>
                    setExpandedMobileItem(
                      expandedMobileItem === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronRightIcon
                    className={`h-4 w-4 text-primary transition-transform ${
                      expandedMobileItem === item.label ? 'rotate-90' : ''
                    }`}
                  />
                </button>
              ) : (
                <NavigationMenuTrigger className="text-primary font-semibold lg:!text-[0.6rem] xl:!text-[0.8rem] 2xl:!text-[0.9rem] hover:text-primary hover:font-bold">
                  {item.label}
                </NavigationMenuTrigger>
              )}
              {/* Mobile expanded content */}
              {isVertical && expandedMobileItem === item.label && (
                <div className="w-full pl-4 py-2 space-y-2">
                  {item.dropdownLinks.map((dropdownItem) => (
                    <div key={dropdownItem.label}>
                      <Link
                        className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-secondary focus:bg-accent focus:text-secondary text-primary font-medium  lg:text-[0.6rem] xl:text-[0.8rem] 2xl:!text-[0.9rem] cursor-pointer"
                        to={dropdownItem.to}
                      >
                        {dropdownItem.label}
                      </Link>
                      {dropdownItem.hasSubItems && (
                        <div className="pl-4 py-1 space-y-1">
                          {dropdownItem.subItems?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-secondary focus:bg-accent focus:text-secondary text-primary font-medium  lg:text-[0.6rem] xl:text-[0.8rem] 2xl:!text-[0.9rem] cursor-pointer"
                              to={subItem.to}
                            >
                              <div className="flex items-center gap-1">
                                {dropdownItem.label === 'Social Media' &&
                                  subItem.icon && (
                                    <span className="w-3 h-3">
                                      {subItem.icon}
                                    </span>
                                  )}
                                <span>{subItem.label}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Desktop dropdown content */}
              {!isVertical && (
                <NavigationMenuContent className="absolute  left-0 top-full mt-1 z-50">
                  <ul className="w-50">
                    {item.dropdownLinks.map((dropdownItem) => (
                      <div
                        key={dropdownItem.label}
                        onMouseEnter={() =>
                          setHoveredDropdownItem(dropdownItem.label)
                        }
                        onMouseLeave={() => {
                          setHoveredDropdownItem(null)
                        }}
                      >
                        <li className="relative">
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none cursor-hand-pointer space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-secondary focus:bg-accent focus:text-secondary text-primary font-medium "
                              to={dropdownItem.to}
                            >
                              <div className="lg:text-[0.6rem] xl:text-[0.8rem] 2xl:text-[0.9rem] font-medium leading-none cursor-hand-pointer flex items-center justify-between">
                                {dropdownItem.label}
                                {dropdownItem.hasSubItems && (
                                  <ChevronRightIcon className="h-4 w-4 text-primary" />
                                )}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                          {dropdownItem.hasSubItems &&
                            hoveredDropdownItem === dropdownItem.label && (
                              <div
                                className="w-max absolute top-0 cursor-hand-pointer left-full ml-2 z-[110] bg-white rounded-b-4xl p-4 shadow-xl border border-gray-200 min-w-[200px]
                                before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[4px] before:bg-[#085c7c] before:rounded-t-4xl before:z-[1]
                                after:content-[''] after:absolute after:left-0 after:top-[4px] after:w-full after:h-[4px] after:bg-[#88bc44] after:z-[1]
                                [&>*]:relative [&>*]:z-[2]"
                                onMouseEnter={() =>
                                  setHoveredDropdownItem(dropdownItem.label)
                                }
                                onMouseLeave={() =>
                                  setHoveredDropdownItem(null)
                                }
                              >
                                <ul className="space-y-1">
                                  {dropdownItem.subItems?.map((subItem) => (
                                    <li key={subItem.label}>
                                      <Link
                                        className="block select-none cursor-hand-pointer rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-secondary focus:bg-accent focus:text-secondary text-primary font-medium "
                                        to={subItem.to}
                                      >
                                        <div className="flex items-center gap-2">
                                          {dropdownItem.label ===
                                            'Social Media' &&
                                            subItem.icon && (
                                              <span className="w-4 h-4">
                                                {subItem.icon}
                                              </span>
                                            )}
                                          <span className="lg:text-[0.6rem] xl:text-[0.8rem] 2xl:text-[0.9rem]">
                                            {subItem.label}
                                          </span>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </li>
                      </div>
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem
              key={item.label}
              className={isVertical ? 'w-full' : ''}
            >
              <NavigationMenuLink asChild>
                <Link
                  className={`text-primary font-semibold cursor-hand-pointer whitespace-nowrap lg:!text-[0.6rem] xl:!text-[0.8rem] 2xl:!text-[0.9rem] hover:text-secondary ${
                    isVertical ? 'w-full block p-3' : ''
                  }`}
                  to={item.to}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
