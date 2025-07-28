// src/components/Navbar.jsx
import React from "react";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Home, Info, Mail, UserPlus, Sparkles } from "lucide-react";

function Navbar() {
    return (
       <div className="p-4 border-b shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="w-full max-w-6xl mx-auto">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-8 items-center justify-between w-full">
                        {/* Logo Section */}
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-6 w-6 text-purple-600" />
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                MyApp
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex gap-6 items-center">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-100">
                                        <Home className="h-4 w-4" />
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link to="/about" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-100">
                                        <Info className="h-4 w-4" />
                                        About
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link to="/contact" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-100">
                                        <Mail className="h-4 w-4" />
                                        Contact
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link to="/signup" className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
                                        <UserPlus className="h-4 w-4" />
                                        Sign Up
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </div>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}

export default Navbar;
