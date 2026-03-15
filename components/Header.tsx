"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  phone: string;
  firstName?: string;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/profile");
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error("[v0] Error fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      window.location.href = "/";
    } catch (error) {
      console.error("[v0] Logout error:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-teal-600">
          {/* HealthLab */}
          <img
            src="Microbe-Logo-1.png"
            alt="The Microbe"
            width={90}
            height={40}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-teal-600 transition"
          >
            Home
          </Link>
          <Link
            href="/tests"
            className="text-gray-700 hover:text-teal-600 transition"
          >
            Tests
          </Link>
          {/* <Link
            href="/packages"
            className="text-gray-700 hover:text-teal-600 transition"
          >
            Packages
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-teal-600 transition"
          >
            Blog
          </Link> */}
          <Link
            href="/about"
            className="text-gray-700 hover:text-teal-600 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-teal-600 transition"
          >
            Contact Us
          </Link>
          <Link
            href="https://crm.themicrobe.in/Account/SignIn.aspx?_gl=1*ajhyuh*_ga*ODU4NzQ0MTA1LjE3NzE3NTEwODQ.*_ga_D1ZZ1PRK9J*czE3NzE3NzIyNjIkbzQkZzEkdDE3NzE3NzY2MDYkajYwJGwwJGgw"
            target="_blank"
            className="text-gray-700 hover:text-teal-600 transition"
          >
            Download Reports
          </Link>
        </div>

        {/* Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {isLoading ? (
            <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
          ) : user ? (
            <>
              <Link href="/profile">
                <Button variant="ghost" className="text-teal-600">
                  {user.firstName || user.phone}
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut size={16} />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-teal-600">
                  Login
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-4 space-y-4">
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:text-teal-600"
          >
            Home
          </Link>
          <Link
            href="/tests"
            className="block py-2 text-gray-700 hover:text-teal-600"
          >
            Tests
          </Link>
          {/* <Link
            href="/packages"
            className="block py-2 text-gray-700 hover:text-teal-600"
          >
            Packages
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-gray-700 hover:text-teal-600"
          >
            Blog
          </Link> */}
          <Link
            href="/about"
            className="block py-2 text-gray-700 hover:text-teal-600"
          >
            About
          </Link>
          <Link
            href="https://crm.themicrobe.in/Account/SignIn.aspx?_gl=1*ajhyuh*_ga*ODU4NzQ0MTA1LjE3NzE3NTEwODQ.*_ga_D1ZZ1PRK9J*czE3NzE3NzIyNjIkbzQkZzEkdDE3NzE3NzY2MDYkajYwJGwwJGgw"
            target="_blank"
            className="text-gray-700 hover:text-teal-600 transition"
          >
            Download Reports
          </Link>
          {user ? (
            <>
              <Link
                href="/profile"
                className="block py-2 text-gray-700 hover:text-teal-600"
              >
                Profile
              </Link>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/login" className="block">
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Login
              </Button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
