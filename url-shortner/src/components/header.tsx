import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkIcon, LucideLogOut } from "lucide-react";

const Header = () => {
  const user = true;
  const navigate = useNavigate();
  return (
    <nav className="p-4 flex items-center justify-between">
      <Link to={"/"}>home</Link>

      <div className="">
        {!user ? (
          <Button onClick={() => navigate("/auth")}>Login</Button>
        ) : (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>developerdev2007</DropdownMenuLabel>
                <DropdownMenuSeparator />pnpm dlx shadcn@latest add input

                <DropdownMenuItem>
                  <LinkIcon />
                  My Links
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">
                  <LucideLogOut />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </nav>
  );
};
export default Header;
