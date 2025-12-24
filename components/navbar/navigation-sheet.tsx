import { Menu } from 'lucide-react'
import { NavMenu } from './nav-menu'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
// import logo from '@/assets/logo.png'

type NavigationSheetProps = {
  data?: {
    'header-logo'?: {
      full_url?: string
    }
    'facebook-url'?: string
    'insta-url'?: string
    'youtube-url'?: string
    'linkedin-url'?: string
  }
}

export const NavigationSheet = ({ data }: NavigationSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-primary text-primary hover:bg-primary hover:text-white"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="overflow-y-scroll w-80 sm:w-96 bg-white border-l border-gray-200 p-0"
      >
        <SheetHeader className="flex flex-row items-center justify-start p-4 pb-4 border-b border-gray-200">
          {/* <img src={logo} alt="logo" className="w-24 h-auto" /> */}
          <img
            src={data?.['header-logo']?.full_url}
            alt="logo"
            className="w-24 h-auto"
          />
        </SheetHeader>

        <div className="py-6 px-4">
          <NavMenu orientation="vertical" className="mb-8" />

          {/* Mobile Social Icons in Sheet */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-semibold text-primary mb-4">
              Follow Us
            </h3>
            <div className="flex items-center cursor-hand-pointer gap-3">
              {[
                { icon: FaFacebookF, url: data?.['facebook-url'] },
                { icon: FaInstagram, url: data?.['insta-url'] },
                { icon: FaYoutube, url: data?.['youtube-url'] },
                { icon: FaLinkedinIn, url: data?.['linkedin-url'] },
              ]
                .filter(({ url }) => url)
                .map(({ icon: Icon, url }, idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-primary/90"
                  >
                    <Icon className="text-white cursor-hand-pointer text-sm" />
                  </a>
                ))}
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-primary/90"
              >
                <FaFacebookF className="text-white cursor-hand-pointer text-sm" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-primary/90"
              >
                <FaInstagram className="text-white cursor-hand-pointer text-sm" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-primary/90"
              >
                <FaYoutube className="text-white cursor-hand-pointer text-sm" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-primary/90"
              >
                <FaLinkedinIn className="text-white cursor-hand-pointer text-sm" />
              </a> */}
            </div>
          </div>

          {/* Action Buttons in Mobile Menu */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="flex flex-col gap-3">
              {/* Book Shop (External Link) */}
              <a
                href="https://www.cef.org.pk/shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="secondarySmall"
                  className="w-full !py-2.5 !text-sm"
                >
                  Book Shop
                </Button>
              </a>

              {/* CEF Online Academy (External Link) */}
              <a
                href="https://cefonlineacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="primarySmall"
                  className="w-full !py-2.5 !text-sm"
                >
                  CEF Online Academy
                </Button>
              </a>

              {/* Donate Now (Internal Route) */}
              <Link to="/donations" className="w-full">
                <Button
                  variant="dangerSmall"
                  className="w-full !py-2.5 !text-sm"
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
